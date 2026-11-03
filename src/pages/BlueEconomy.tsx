import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { blueEconomy, site } from "@/content/site";
import heroOcean from "@/assets/images/ocean_surface_blue_frontier_1793609681201.jpg";

const BlueEconomy = () => {
  return (
    <Layout navVariant="light">
      <SEO
        title="Blue Economy — Blue Frontier Fund | Beyond Impact × UMITO Partners"
        description="Beyond Impact and UMITO Partners are building the Blue Frontier Fund — a cross-regional impact fund bridging Europe, Japan and Asia-Pacific across ocean innovation, blue food, marine biotech, alternative seafood and regenerative aquaculture."
        path="/blue-economy"
        keywords="industrial biotech, applied biotech, bioeconomy, blue economy fund, Blue Frontier Fund, UMITO Partners, ocean impact investing, blue food, marine biotechnology, sustainable aquaculture, cultivated seafood, seaweed innovation, microalgae fund, ocean climate fund"
      />
      <PageHero
        eyebrow={blueEconomy.hero.eyebrow}
        title={
          <>
            A strategic partnership for the <span className="script text-heart">Blue Economy</span>.
          </>
        }
        sub={blueEconomy.hero.sub}
        image={heroOcean}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-x max-w-4xl">
          <a
            href={blueEconomy.hero.sourceHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-earth hover:text-heart transition-colors font-bold"
          >
            {blueEconomy.hero.sourceLabel}
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <div className="mt-10 space-y-6 text-lg text-navy/80 leading-relaxed">
            {blueEconomy.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {blueEconomy.sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="mt-16 border-t border-navy/15 pt-10"
            >
              <h2 className="display text-3xl text-navy md:text-4xl">{s.title}</h2>
              {"body" in s && s.body && (
                <div className="mt-6 space-y-5 text-navy/75 leading-relaxed">
                  {s.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              )}
              {"list" in s && s.list && (
                <ul className="mt-6 space-y-3">
                  {s.list.map((item) => (
                    <li key={item} className="flex gap-3 text-navy/80">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-heart" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}

          <div className="mt-20 grid gap-6 md:grid-cols-2">
            {blueEconomy.quotes.map((q) => (
              <figure key={q.who} className="bg-white border border-navy/15 rounded-2xl p-8 shadow-soft">
                <blockquote className="display text-xl text-navy leading-snug">
                  "{q.text}"
                </blockquote>
                <figcaption className="mt-6 text-sm uppercase tracking-wider text-blue font-bold">
                  {q.who} <span className="text-navy/70 font-normal">— {q.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* INVESTOR CTA */}
          <div className="mt-16 grid gap-6 bg-white border border-navy/15 rounded-2xl p-8 text-navy shadow-soft md:grid-cols-12 md:items-center md:p-12">
            <div className="md:col-span-8">
              <div className="eyebrow text-earth font-bold">For investors</div>
              <p className="mt-3 text-navy/80 leading-relaxed">{site.investors.intro}</p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <a
                href={site.investors.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue/90 shadow-blue"
              >
                {site.investors.display}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlueEconomy;
