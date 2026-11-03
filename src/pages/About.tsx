import { motion } from "framer-motion";
import { Sprout, Globe2, HeartPulse, Building2, ShieldCheck } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { about } from "@/content/site";

const pillarIcons = { Sprout, Globe2, HeartPulse } as const;

const About = () => {
  const teamJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Blue Frontier Finance",
    url: "https://beyondimpact.vc/about",
    description: "Blue Frontier Finance is a collaborative impact venture initiative between Beyond Impact and UMITO Partners.",
    about: [...about.team, ...about.advisors].map((p) => ({
      "@type": "Person",
      name: p.name,
      jobTitle: p.role,
      description: p.bio,
      worksFor: { "@type": "Organization", name: "Blue Frontier Finance" },
    })),
  };

  return (
    <Layout navVariant="light">
      <SEO
        title="About Blue Frontier Finance — Beyond Impact & UMITO Partners"
        description="Meet the Blue Frontier Finance team — Claire Smith, Shunji Murakami, Sagar Tandon, Tarja Zudemberg, and our global advisors. Bridging European deep-tech science and Japanese operational leadership for the New Blue Economy."
        path="/about"
        keywords="Blue Frontier Finance, Claire Smith, Shunji Murakami, Sagar Tandon, Tarja Zudemberg, Michael Adams, Torsten Thiele, UMITO Partners, Beyond Impact, blue economy, marine biotechnology, ocean impact investing, cellular aquaculture"
        jsonLd={teamJsonLd}
      />
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={
          <>
            A bilateral alliance for <span className="script text-heart">ocean resilience</span>.
          </>
        }
        sub={about.hero.sub}
        image={about.hero.image}
      />

      {/* BILATERAL CREDENTIALS */}
      <section className="bg-white py-20 border-b border-navy/10">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2">
            {about.credentials.map((c) => (
              <div
                key={c.org}
                className="rounded-2xl border border-navy/15 bg-white p-8 md:p-10 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue/10 text-blue font-bold">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-earth">{c.org}</span>
                    <h3 className="display text-xl text-navy">{c.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-navy/75">{c.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-x">
          <div className="eyebrow text-earth font-bold">Our Conviction</div>
          <h2 className="display mt-4 max-w-3xl text-4xl text-navy md:text-5xl">
            Three principles guiding Blue Frontier Finance.
          </h2>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {about.values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-2xl border border-navy/15 shadow-soft hover:shadow-elevated transition-shadow"
              >
                <div className="display text-sm tracking-wider text-blue font-bold uppercase">{v.tag}</div>
                <h3 className="display mt-6 text-2xl text-navy">{v.title}</h3>
                <p className="mt-4 leading-relaxed text-navy/75 text-sm">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT FRAMEWORK */}
      <section className="bg-white py-24 md:py-32 border-y border-navy/10">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="eyebrow text-earth font-bold">{about.impactPillars.eyebrow}</div>
            <h2 className="display mt-4 text-4xl text-navy md:text-5xl">
              {about.impactPillars.title}
            </h2>
            <p className="mt-6 leading-relaxed text-navy/75">{about.impactPillars.sub}</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {about.impactPillars.pillars.map((p, i) => {
              const Icon = pillarIcons[p.icon as keyof typeof pillarIcons];
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative rounded-2xl bg-white border border-navy/15 p-8 text-navy shadow-soft md:p-10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-earth text-white shadow-sm mb-6">
                    {Icon && <Icon className="h-6 w-6" strokeWidth={2.25} />}
                  </div>
                  <h3 className="display text-2xl text-navy">{p.name}</h3>
                  <ul className="mt-6 space-y-3.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-navy/80">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-heart" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE COLLABORATION LEADERSHIP */}
      <section className="bg-white py-24 text-navy md:py-32">
        <div className="container-x">
          <div className="eyebrow text-blue font-bold">Investment Leadership</div>
          <h2 className="display mt-4 max-w-3xl text-4xl text-navy md:text-5xl">
            Cross-continental execution with <span className="script text-heart">deep</span> ocean conviction.
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {about.team.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                className="flex flex-col sm:flex-row gap-6 border-t border-navy/15 pt-8"
              >
                <div className="shrink-0">
                  <div className="h-28 w-28 overflow-hidden rounded-full bg-navy/5 ring-2 ring-blue/20 md:h-32 md:w-32">
                    <img src={p.photo} alt={p.name} className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="display text-xl text-navy md:text-2xl">{p.name}</h3>
                    <span className="text-xs font-bold text-earth uppercase tracking-wider">{p.org}</span>
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue">{p.role}</div>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-navy/75">{p.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVISORS & VENTURE PARTNERS */}
      <section className="bg-white py-24 text-navy md:py-32 border-t border-navy/10">
        <div className="container-x">
          <div className="eyebrow text-earth font-bold">Global Network</div>
          <h2 className="display mt-4 max-w-3xl text-4xl text-navy md:text-5xl">
            Advisors &amp; <span className="script text-heart">Venture Partners</span>
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {about.advisors.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                className="flex flex-col sm:flex-row gap-6 border-t border-navy/15 pt-8"
              >
                <div className="shrink-0">
                  <div className="h-24 w-24 overflow-hidden rounded-full bg-navy/5 ring-1 ring-navy/20 md:h-28 md:w-28">
                    <img src={a.photo} alt={a.name} className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="display text-lg text-navy md:text-xl">{a.name}</h3>
                    <span className="text-xs text-navy/60 font-medium">{a.affiliation}</span>
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-earth">{a.role}</div>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-navy/75">{a.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
