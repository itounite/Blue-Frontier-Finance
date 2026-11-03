import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, ShieldCheck, Award, TrendingUp, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { home, site } from "@/content/site";

const legIcons = [TrendingUp, Award, ShieldCheck];

const Index = () => {
  return (
    <Layout navVariant="light">
      <SEO
        title="Blue Frontier Finance — Beyond Impact & UMITO Partners | New Blue Economy"
        description="Blue Frontier Finance is a collaborative initiative between Beyond Impact and UMITO Partners accelerating the New Blue Economy across Europe, Japan and APAC through co-investments, ecosystem building, and specialized investment vehicle partnerships."
        path="/"
        keywords="Blue Frontier Finance, Beyond Impact, UMITO Partners, blue economy, marine biotechnology, ocean climate tech, blue foods, cellular aquaculture, algae biomaterials, diatom silica, Japan Europe impact investing, Shunji Murakami, Claire Smith, Sagar Tandon"
      />

      {/* HERO */}
      <section className="relative isolate min-h-screen overflow-hidden bg-white text-navy">
        <img
          src={home.hero.image}
          alt="Coastal marine biotechnology hub on ocean"
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/85 to-white/40" />

        <div className="container-x relative flex min-h-screen flex-col justify-end pb-20 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-earth font-semibold"
          >
            {home.hero.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="display mt-8 max-w-[14ch] text-[clamp(2.75rem,8.5vw,8.5rem)] leading-[0.95] text-navy"
          >
            {home.hero.headlineLead}{" "}
            <span className="script font-normal text-heart">
              {home.hero.headlineScript}
            </span>{" "}
            {home.hero.headlineRest}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-xl text-lg leading-relaxed text-navy/80">
              {home.hero.sub}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#three-legs"
                className="inline-flex items-center gap-2 rounded-full bg-blue px-7 py-4 text-sm font-medium text-white shadow-blue transition-all hover:bg-blue/90 hover:shadow-elevated"
              >
                Explore the Three Legs
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-7 py-4 text-sm font-medium text-navy transition-colors hover:border-heart hover:text-heart"
              >
                Our Blue Portfolio
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="relative border-t border-navy/10 py-6 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-16 text-navy/80 font-display text-lg">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 gap-16 items-center">
                <span>Marine Biotech</span><span className="text-heart">✦</span>
                <span>Blue Economy</span><span className="text-earth">✦</span>
                <span>Algae &amp; Seaweed</span><span className="text-blue">✦</span>
                <span>Cellular Aquaculture</span><span className="text-heart">✦</span>
                <span>Japan · Europe · APAC Bridge</span><span className="text-earth">✦</span>
                <span>Blue Awards</span><span className="text-blue">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE LEGS OF BLUE FRONTIER FINANCE */}
      <section id="three-legs" className="bg-white py-24 md:py-32 border-t border-navy/10 scroll-mt-20">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="eyebrow text-blue font-bold">Platform Architecture</div>
            <h2 className="display mt-4 text-4xl text-navy md:text-5xl">
              The Three Legs of <span className="script text-heart">Blue Frontier Finance</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-navy/75 leading-relaxed">
              A comprehensive bilateral platform engineered by Beyond Impact and UMITO Partners to catalyze capital, knowledge, and high-impact ocean ventures.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {home.threeLegs.map((leg, idx) => {
              const Icon = legIcons[idx];
              return (
                <motion.div
                  key={leg.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="relative flex flex-col justify-between rounded-2xl border border-navy/15 bg-white p-8 md:p-10 shadow-soft hover:shadow-elevated transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="display text-3xl font-extrabold text-blue">{leg.num}</span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue/10 text-blue">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="display mt-6 text-2xl text-navy leading-snug">{leg.title}</h3>
                    <div className="mt-2 text-xs font-bold uppercase tracking-wider text-earth">{leg.tagline}</div>
                    <p className="mt-4 text-sm leading-relaxed text-navy/75">{leg.body}</p>

                    <ul className="mt-6 space-y-3 border-t border-navy/10 pt-6">
                      {leg.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy/85">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-heart" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {leg.cta && (
                    <div className="mt-8 border-t border-navy/10 pt-6">
                      <a
                        href={leg.cta.href}
                        className="inline-flex items-center gap-2 text-xs font-bold text-blue hover:text-heart transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        <span>Partner with us: info@umitopartners.com / invest@beyondimpact.vc</span>
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION CALLOUT / STRUCTURAL INFLECTION */}
      <section className="bg-white py-24 md:py-32 border-t border-navy/10">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="eyebrow text-earth font-bold">{home.missionCallout.eyebrow}</div>
            <h2 className="display mt-6 text-4xl text-navy md:text-6xl">
              {home.missionCallout.title}
            </h2>
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-navy/10 shadow-soft">
                <img
                  src={home.missionCallout.image}
                  alt="Restorative ocean seaweed mariculture lines and marine biotechnology infrastructure"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:col-span-5 flex flex-col justify-between">
              <p className="text-lg leading-relaxed text-navy/75">
                {home.missionCallout.body}
              </p>
              <div className="mt-8 pt-6 border-t border-navy/10">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 border-b-2 border-blue pb-1 text-sm font-semibold text-blue hover:text-heart hover:border-heart transition-colors"
                >
                  Explore our collaborative thesis <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-px bg-navy/10 sm:grid-cols-2 lg:grid-cols-4 border border-navy/10 rounded-2xl overflow-hidden shadow-soft">
            {home.missionCallout.stats.map((s, idx) => (
              <div key={s.label} className="bg-white p-7">
                <div className={`display text-3xl md:text-4xl ${idx === 0 ? "text-heart" : idx === 1 ? "text-blue" : idx === 2 ? "text-earth" : "text-navy"}`}>{s.value}</div>
                <div className="mt-3 text-xs uppercase tracking-wider text-navy/70 leading-relaxed font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section className="bg-white py-24 text-navy border-t border-navy/10">
        <div className="container-x">
          <div className="eyebrow text-earth font-bold">Collaborative Track Record</div>
          <h2 className="display mt-4 max-w-2xl text-4xl text-navy md:text-5xl">
            Discipline compounding across <span className="script text-heart">oceans</span>.
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {home.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-t-2 border-earth/40 pt-6 group"
              >
                <div className="display text-5xl text-earth md:text-6xl font-bold group-hover:text-earth-dark transition-colors">{s.value}</div>
                <div className="mt-3 text-sm leading-relaxed text-navy/70 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS / BLUE FRONTIER THESIS */}
      <section className="bg-white py-24 md:py-32 border-t border-navy/10">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="eyebrow text-earth font-bold">Blue Frontier Thesis</div>
              <h2 className="display mt-4 text-4xl text-navy md:text-5xl">
                Three core domains. One <span className="script text-heart">ocean</span>.
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue hover:text-heart transition-colors"
            >
              See our portfolio <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {home.sectors.map((s) => (
              <div key={s.name} className="group relative overflow-hidden rounded-2xl border border-navy/15 bg-white shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between">
                <div>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-earth">{s.share} Focus</span>
                      <span className="display text-sm font-bold text-heart">{s.market}</span>
                    </div>
                    <h3 className="display mt-3 text-2xl text-navy">{s.name}</h3>
                    <p className="mt-3 text-sm text-navy/70 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP CTA — Flows seamlessly into Footer */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#003452] via-[#0E2875] to-[#1A1F9E] pt-28 pb-20 text-white">
        <div aria-hidden className="absolute inset-0 opacity-25">
          <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-earth/40 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-heart/40 blur-3xl" />
        </div>
        <div className="container-x relative">
          <div className="max-w-4xl">
            <div className="eyebrow text-heart font-bold">Connect With Us</div>
            <h2 className="display mt-6 text-4xl leading-tight md:text-6xl lg:text-7xl">
              {home.partnership.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
              {home.partnership.body}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={home.partnership.primaryCta.href}
                className="inline-flex items-center gap-2.5 rounded-full bg-heart px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-heart transition-all hover:bg-heart-bright hover:shadow-elevated"
              >
                {home.partnership.primaryCta.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={home.partnership.secondaryCta.href}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white"
              >
                {home.partnership.secondaryCta.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
