import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { heroSeaweed } from "@/content/site";
import { insights } from "@/content/insights";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const parseDate = (d: string) => {
  const t = Date.parse(d);
  return isNaN(t) ? 0 : t;
};

const Insights = () => {
  const [author, setAuthor] = useState<string>("All");
  const [category, setCategory] = useState<string>("All");

  const sorted = useMemo(
    () => [...insights].sort((a, b) => parseDate(b.date) - parseDate(a.date)),
    []
  );

  const authors = useMemo(
    () => ["All", ...Array.from(new Set(insights.map((i) => i.author)))],
    []
  );
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(insights.map((i) => i.category)))],
    []
  );

  const filtered = useMemo(
    () =>
      sorted.filter(
        (i) =>
          (author === "All" || i.author === author) &&
          (category === "All" || i.category === category)
      ),
    [sorted, author, category]
  );

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: sorted.map((i, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://beyondimpact.vc/insights/${i.slug}`,
      name: i.title,
    })),
  };

  return (
    <Layout navVariant="light">
      <SEO
        title="Insights — Impact VC field notes on industrial biotech, bioeconomy & advanced nutrition | Beyond Impact"
        description="Long-form essays and research from Beyond Impact on impact investing, industrial biotech, applied biotech, the bioeconomy, advanced nutrition, human food, pet food, biodiversity, blue economy, and precision fermentation."
        path="/insights"
        keywords="industrial biotech, applied biotech, bioeconomy, industrial biotechnology, applied biotechnology, advanced nutrition, human food, pet food, impact investing insights, climate VC essays, bioeconomy research, alternative protein analysis, biodiversity fund, blue economy, precision fermentation, biomaterials, Article 9 SFDR"
        jsonLd={itemListJsonLd}
      />
      <PageHero
        eyebrow="Insights"
        title={<>Field notes from the <span className="script text-coral">transition</span>.</>}
        sub="Long-form essays, opinion pieces and white papers from the Beyond Impact team — on capital, climate, biodiversity, biomanufacturing and the future of food."
        image={heroSeaweed}
      />
      <section className="bg-white py-20 md:py-28 border-t border-navy/10">
        <div className="container-x">
          {/* Spotlight Box */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14 overflow-hidden rounded-3xl bg-white text-navy shadow-elevated relative isolate border-2 border-navy/10"
          >
            {/* Ambient gradients */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-heart/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-earth/15 blur-3xl" />

            <div className="relative p-8 md:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="eyebrow text-heart font-semibold">Spotlight · White Paper</span>
                  <span className="rounded-full bg-heart/15 border border-heart/30 px-3 py-0.5 text-[11px] font-semibold tracking-wide text-heart">
                    Featured
                  </span>
                </div>

                <h2 className="display mt-4 text-2xl md:text-3xl lg:text-4xl leading-tight text-navy font-normal">
                  <a
                    href="https://beyondimpact.hubspotpagebuilder.com/resilient-food-northern-europe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-heart transition-colors"
                  >
                    Resilient Food Systems for Northern Europe: From Agricultural Dependence to Bio-Based Sovereignty
                  </a>
                </h2>

                <p className="mt-4 text-base md:text-lg leading-relaxed text-navy/75">
                  Our latest white paper,{" "}
                  <a
                    href="https://beyondimpact.hubspotpagebuilder.com/resilient-food-northern-europe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-heart underline underline-offset-4 decoration-heart/50 hover:decoration-heart transition-colors font-medium"
                  >
                    Resilient Food Systems for Northern Europe: From Agricultural Dependence to Bio-Based Sovereignty
                  </a>
                  , explores why the transformation of food production should now be viewed not simply as a sustainability challenge, but as a question of resilience, sovereignty and long-term economic security.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href="https://beyondimpact.hubspotpagebuilder.com/resilient-food-northern-europe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-heart px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-heart-bright shadow-heart group"
                >
                  <span>Read White Paper</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Filters */}
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-4 md:flex-row md:gap-8">
              <div>
                <div className="mb-2 text-[11px] uppercase tracking-wider text-navy/70 font-semibold">Filter by author</div>
                <div className="flex flex-wrap gap-2">
                  {authors.map((a) => (
                    <button
                      key={a}
                      onClick={() => setAuthor(a)}
                      className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
                        author === a
                          ? "border-blue bg-blue text-white shadow-sm"
                          : "border-navy/20 text-navy hover:border-blue hover:text-blue"
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-2 text-[11px] uppercase tracking-wider text-navy/70 font-semibold">Filter by tag</div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCategory(c)}
                      className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
                        category === c
                          ? "border-earth bg-earth text-white shadow-sm"
                          : "border-navy/20 text-navy hover:border-earth hover:text-earth"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-sm text-navy/70">
              {filtered.length} {filtered.length === 1 ? "article" : "articles"} · newest first
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((i, idx) => (
              <motion.div
                key={i.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                <Link
                  to={`/insights/${i.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-navy/10 bg-white p-7 transition-all hover:border-blue hover:shadow-xl"
                >
                  <div>
                    <span className="eyebrow text-earth font-bold">{i.category}</span>
                    <h2 className="display mt-3 text-2xl text-navy md:text-[1.65rem] leading-tight group-hover:text-blue transition-colors">
                      {i.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-navy/70">{i.excerpt}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-navy/10 pt-4 text-xs uppercase tracking-wider text-navy/70 font-medium">
                    <span>{i.author} · {i.date}</span>
                    <ArrowRight className="h-4 w-4 text-heart transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-16 rounded-2xl border border-navy/10 bg-white p-10 text-center text-navy/70">
              No insights match this combination. Try clearing a filter.
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
