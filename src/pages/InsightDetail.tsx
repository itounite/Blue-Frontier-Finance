import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { getInsight, insights } from "@/content/insights";

const parseDate = (d: string) => {
  const t = Date.parse(d);
  return isNaN(t) ? new Date().toISOString() : new Date(t).toISOString();
};

const InsightDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const insight = slug ? getInsight(slug) : undefined;

  if (!insight) return <Navigate to="/insights" replace />;

  const idx = insights.findIndex((i) => i.slug === insight.slug);
  const next = insights[(idx + 1) % insights.length];

  // Also link 2 related insights (same category or same author)
  const related = insights
    .filter(
      (i) =>
        i.slug !== insight.slug &&
        (i.category === insight.category || i.author === insight.author)
    )
    .slice(0, 3);

  const path = `/insights/${insight.slug}`;
  const url = `https://beyondimpact.vc${path}`;
  const articleImage = insight.body.find((block) => block.type === "img");
  const imageUrl = articleImage?.type === "img"
    ? new URL(articleImage.src, "https://beyondimpact.vc").href
    : undefined;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: insight.title,
    description: insight.excerpt,
    author: {
      "@type": "Person",
      name: insight.author,
      ...(insight.authorRole && { jobTitle: insight.authorRole }),
      ...(insight.authorImage && { image: new URL(insight.authorImage, "https://beyondimpact.vc").href }),
    },
    ...(imageUrl && { image: imageUrl }),
    datePublished: parseDate(insight.date),
    dateModified: parseDate(insight.date),
    articleSection: insight.category,
    keywords: [
      insight.category,
      "industrial biotech",
      "applied biotech",
      "bioeconomy",
      "advanced nutrition",
      "human food",
      "pet food",
      "impact investing",
      "impact VC",
      "climate VC",
      "alternative protein",
    ].join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    publisher: {
      "@type": "Organization",
      name: "Beyond Impact",
      logo: {
        "@type": "ImageObject",
        url: "https://beyondimpact.vc/favicon.ico",
      },
    },
    url,
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beyondimpact.vc/" },
      { "@type": "ListItem", position: 2, name: "Insights", item: "https://beyondimpact.vc/insights" },
      { "@type": "ListItem", position: 3, name: insight.title, item: url },
    ],
  };

  return (
    <Layout navVariant="light">
      <SEO
        title={`${insight.title} — ${insight.author} | Beyond Impact`}
        description={insight.excerpt}
        path={path}
        type="article"
        image={imageUrl}
        keywords={`${insight.category}, ${insight.author}, industrial biotech, applied biotech, bioeconomy, advanced nutrition, human food, pet food, impact investing, impact VC, climate VC, alternative protein, biodiversity fund, Article 9 SFDR, biosolutions`}
        jsonLd={[articleJsonLd, breadcrumbsJsonLd]}
      />
      <article>
        {/* Hero */}
        <section className="relative isolate bg-white text-navy pt-32 pb-16 md:pt-40 md:pb-20 border-b border-navy/10">
          <div className="container-x max-w-4xl">
            <Link to="/insights" className="inline-flex items-center gap-2 text-sm text-blue hover:text-heart font-semibold transition-colors">
              <ArrowLeft className="h-4 w-4" /> All insights
            </Link>
            <div className="eyebrow mt-8 text-earth font-bold">{insight.category}</div>
            <h1 className="display mt-5 text-4xl text-navy md:text-6xl leading-[1.05]">
              {insight.title}
            </h1>
            <p className="mt-6 text-lg text-navy/75">{insight.excerpt}</p>
            <div className="mt-8 flex items-center gap-4 text-sm text-navy/75">
              {insight.authorImage && (
                <img src={insight.authorImage} alt={insight.author} width={80} height={80} className="h-20 w-20 shrink-0 rounded-full object-cover object-top border-2 border-navy/10 shadow-sm" />
              )}
              <div>
                <p className="font-semibold text-navy">{insight.author}</p>
                {insight.authorRole && <p className="mt-1 text-navy/70">{insight.authorRole}</p>}
                <p className="mt-1 text-navy/60">{insight.date}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="bg-white py-16 md:py-24">
          <div className="container-x max-w-3xl">
            <div className="space-y-6">
              {insight.body.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={i} className="display mt-10 text-2xl text-navy md:text-3xl">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={i} className="list-disc space-y-3 pl-6 text-navy/80 leading-relaxed">
                      {block.items.map((it, j) => (
                        <li key={j}>{it}</li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={i}
                      className="border-l-4 border-heart bg-heart/5 px-6 py-5 text-lg italic text-navy/85 rounded-r-xl"
                    >
                      "{block.text}"
                      {block.cite && (
                        <footer className="mt-3 text-sm not-italic text-navy/70 font-sans">— {block.cite}</footer>
                      )}
                    </blockquote>
                  );
                }
                if (block.type === "img") {
                  return (
                    <figure key={i} className="my-8">
                      <img
                        src={block.src}
                        alt={block.alt}
                        loading="lazy"
                        className="w-full rounded-xl border border-navy/10"
                      />
                      {block.caption && (
                        <figcaption className="mt-2 text-center text-xs text-navy/60">{block.caption}</figcaption>
                      )}
                      {block.credit && (
                        <p className="mt-2 text-center text-sm text-navy/80">
                          Photo: <a href={block.credit.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-coral">{block.credit.name}</a>
                          {block.credit.license && <> · <a href={block.credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-coral">{block.credit.license}</a></>}
                        </p>
                      )}
                    </figure>
                  );
                }
                return (
                  <p key={i} className="text-[1.05rem] leading-relaxed text-navy/80">
                    {block.text}
                  </p>
                );
              })}

            </div>

            {/* Related insights — internal links for SEO */}
            {related.length > 0 && (
              <aside className="mt-16 rounded-2xl border border-navy/10 bg-white p-6 md:p-8 shadow-soft">
                <h3 className="display text-lg text-navy md:text-xl">Related insights</h3>
                <ul className="mt-4 space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to={`/insights/${r.slug}`}
                        className="group flex items-center justify-between gap-4 border-b border-navy/10 pb-3 text-sm text-navy hover:text-blue transition-colors"
                      >
                        <span>
                          <span className="mr-2 text-[11px] uppercase tracking-wider text-earth font-bold">
                            {r.category}
                          </span>
                          {r.title}
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-heart transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </section>

        {/* Next */}
        <section className="border-t border-navy/10 bg-clay-warm py-12">
          <div className="container-x max-w-3xl">
            <Link
              to={`/insights/${next.slug}`}
              className="group flex flex-col gap-2 rounded-2xl border border-navy/10 bg-white p-6 transition-all hover:border-blue hover:shadow-lg"
            >
              <span className="eyebrow text-heart font-semibold">Read next · {next.category}</span>
              <div className="flex items-center justify-between gap-4">
                <h3 className="display text-xl text-navy md:text-2xl group-hover:text-blue transition-colors">{next.title}</h3>
                <ArrowRight className="h-5 w-5 shrink-0 text-heart transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default InsightDetail;
