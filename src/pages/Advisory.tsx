import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Award, ShieldCheck, Mail, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { advisory } from "@/content/site";

const legIcons = [TrendingUp, Award, ShieldCheck];

const Advisory = () => {
  return (
    <Layout navVariant="light">
      <SEO
        title="Platform & Advisory — The Three Legs of Blue Frontier Finance"
        description="Blue Frontier Finance provides co-investment opportunities, investor education, ecosystem study sessions, the Blue Awards, and dedicated investment vehicle partnerships across Japan, Europe, and APAC."
        path="/advisory"
        keywords="Blue Frontier Finance, ocean co-investment, investor education, Blue Awards, blue economy study sessions, marine biotechnology advisory, ocean impact investing, UMITO Partners, Beyond Impact"
      />
      <PageHero
        eyebrow={advisory.hero.eyebrow}
        title={
          <>
            Three legs driving the <span className="script text-heart">New Blue Economy</span>.
          </>
        }
        sub={advisory.hero.sub}
        image={advisory.hero.image}
      />

      {/* THREE LEGS DEEP DIVE */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-x">
          <div className="space-y-24">
            {advisory.legs.map((leg, idx) => {
              const Icon = legIcons[idx];
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={leg.id}
                  id={leg.id}
                  className="rounded-3xl border border-navy/15 bg-white p-8 md:p-14 shadow-soft scroll-mt-24"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                    <div className="flex items-center gap-4">
                      <span className="display text-4xl sm:text-5xl font-black text-blue">{leg.num}</span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue/10 text-blue">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-earth">{leg.eyebrow}</span>
                        <h2 className="display text-2xl sm:text-3xl md:text-4xl text-navy">{leg.title}</h2>
                      </div>
                    </div>

                    <a
                      href={leg.ctaHref}
                      className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-blue hover:bg-blue/90 transition-all self-start md:self-auto"
                    >
                      {leg.ctaText}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="mt-8 border-t border-navy/10 pt-8 grid gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                      <div className="text-sm font-bold uppercase tracking-wider text-heart">
                        {leg.subtitle}
                      </div>
                      <p className="mt-4 text-base sm:text-lg leading-relaxed text-navy/75">
                        {leg.body}
                      </p>
                    </div>

                    <div className="lg:col-span-7">
                      <div className="rounded-2xl bg-clay-warm/60 border border-navy/10 p-6 sm:p-8">
                        <div className="text-xs font-bold uppercase tracking-wider text-navy/60 mb-4">
                          Core Platform Capabilities
                        </div>
                        <ul className="space-y-4">
                          {leg.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-3 text-sm text-navy/85 leading-relaxed">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-earth" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BILATERAL ALLIANCE STRIP */}
      <section className="bg-clay-warm py-24 border-t border-navy/10">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="eyebrow text-blue font-bold">Why Collaborate with Us</div>
            <h2 className="display mt-4 text-3xl sm:text-4xl text-navy">
              Fusing European science with Japanese maritime infrastructure.
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-navy/75">
              With Japan officially associated with Horizon Europe Pillar II (€52B+) and UMITO Partners' nationwide network across Japanese seafood cooperatives and government councils, Blue Frontier Finance is the definitive bridge connecting capital, technology, and real-world implementation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-7 rounded-2xl border border-navy/10 shadow-soft">
              <div className="display text-sm font-bold uppercase text-blue">Beyond Impact Platform</div>
              <p className="mt-3 text-xs sm:text-sm text-navy/75 leading-relaxed">
                Pioneer Article 9 SFDR venture capital discipline with 7+ years in bioeconomy investing and proprietary deal origination via Beyond Animal.
              </p>
            </div>
            <div className="bg-white p-7 rounded-2xl border border-navy/10 shadow-soft">
              <div className="display text-sm font-bold uppercase text-earth">UMITO Partners Leadership</div>
              <p className="mt-3 text-xs sm:text-sm text-navy/75 leading-relaxed">
                Japan's premier B Corp ocean consultancy, trusted advisor on national aquaculture strategy, and steward of 10+ sustainable fisheries transformations.
              </p>
            </div>
            <div className="bg-white p-7 rounded-2xl border border-navy/10 shadow-soft">
              <div className="display text-sm font-bold uppercase text-heart">The Blue Awards</div>
              <p className="mt-3 text-xs sm:text-sm text-navy/75 leading-relaxed">
                Our global initiative honoring exceptional ocean innovators across Europe, Japan, and APAC, elevating founders to institutional global partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section className="bg-white py-24 border-t border-navy/10">
        <div className="container-x">
          <div className="rounded-3xl bg-gradient-impact p-10 md:p-16 text-white shadow-elevated">
            <div className="max-w-3xl">
              <div className="eyebrow text-heart font-bold">Initiate Collaboration</div>
              <h2 className="display mt-4 text-3xl sm:text-5xl">
                Ready to partner with Blue Frontier Finance?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed">
                Whether you are exploring co-investment syndicates, interested in our study sessions and Blue Awards, or discussing our dedicated investment vehicle, we welcome direct discussions.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:invest@beyondimpact.vc?cc=info@umitopartners.com&subject=Blue%20Frontier%20Finance%20Inquiry"
                  className="inline-flex items-center gap-2 rounded-full bg-heart px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-heart hover:bg-heart-bright transition-all"
                >
                  <Mail className="h-4 w-4" />
                  invest@beyondimpact.vc
                </a>
                <a
                  href="mailto:info@umitopartners.com?cc=invest@beyondimpact.vc&subject=Blue%20Frontier%20Finance%20Inquiry"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all"
                >
                  <Mail className="h-4 w-4" />
                  info@umitopartners.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Advisory;
