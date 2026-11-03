import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, MapPin, DollarSign } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { portfolio } from "@/content/site";
import heroOceanFarm from "@/assets/images/ocean_deep_blue_algae_farm_1793609732681.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState<string>("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(portfolio.companies.map((c) => c.category)))],
    []
  );

  const filtered = useMemo(
    () => (filter === "All" ? portfolio.companies : portfolio.companies.filter((c) => c.category === filter)),
    [filter]
  );

  const portfolioJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Blue Frontier Finance Portfolio",
    itemListElement: portfolio.companies.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Organization",
        name: c.name,
        description: c.desc,
        areaServed: c.region,
      },
    })),
  };

  return (
    <Layout navVariant="light">
      <SEO
        title="Portfolio — Blue Frontier Finance | Blue Economy & Marine Biotech Companies"
        description="Blue Frontier Finance portfolio: BlueNalu, Swedish Algae Factory (Algica), Umami Bioworks, Ingrediome, Algama, and Geltor. Pioneer companies advancing cellular aquaculture, diatoms, precision fermentation, and synthetic biology."
        path="/portfolio"
        keywords="BlueNalu, Swedish Algae Factory, Algica, Umami Bioworks, Ingrediome, Algama, Geltor, cellular aquaculture, cultivated seafood, microalgae, diatom silica, cyanobacteria fermentation, blue economy portfolio, Blue Frontier Finance"
        jsonLd={portfolioJsonLd}
      />
      <PageHero
        eyebrow={portfolio.hero.eyebrow}
        title={
          <>
            Select portfolio companies in the <span className="script text-heart">New Blue Economy</span>.
          </>
        }
        sub={portfolio.hero.sub}
        image={heroOceanFarm}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full border px-5 py-2 text-xs sm:text-sm font-medium transition-all ${
                  filter === cat
                    ? "border-blue bg-blue text-white shadow-sm"
                    : "border-navy/20 text-navy hover:border-blue hover:text-blue hover:bg-blue/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Companies Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((c) => (
                <motion.div
                  key={c.name}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col justify-between rounded-2xl border border-navy/15 bg-white p-7 sm:p-8 shadow-soft hover:shadow-elevated transition-all group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-block rounded-full bg-blue/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue">
                          {c.category}
                        </span>
                        <h3 className="display mt-3 text-2xl text-navy group-hover:text-blue transition-colors">
                          {c.name}
                        </h3>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-earth block">Raised</span>
                        <span className="display text-base font-extrabold text-heart">{c.raised}</span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-xs text-navy/60 font-medium">
                      <MapPin className="h-3.5 w-3.5 text-navy/40" />
                      <span>{c.region}</span>
                      <span className="text-navy/30">·</span>
                      <span className="text-earth font-semibold">{c.focus}</span>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-navy/75">
                      {c.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-navy/10 flex items-center justify-between text-xs">
                    <span className="text-navy/60 italic font-sans">{c.deckNote}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Bottom Partnership Callout */}
          <div className="mt-20 rounded-2xl bg-white border border-navy/15 p-8 sm:p-12 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-earth">Co-Investment Dealflow</span>
              <h3 className="display mt-2 text-2xl sm:text-3xl text-navy">
                Looking to co-invest alongside Blue Frontier Finance?
              </h3>
              <p className="mt-2 text-sm text-navy/75 leading-relaxed">
                We share institutional diligence memos, technical validation, and provide hands-on portfolio management for our co-investor network.
              </p>
            </div>
            <a
              href="mailto:invest@beyondimpact.vc?subject=Co-Investment%20Dealflow%20Inquiry"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white shadow-blue hover:bg-blue/90 transition-all"
            >
              Request Access
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
