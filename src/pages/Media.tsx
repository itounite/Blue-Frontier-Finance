import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { site, heroOcean } from "@/content/site";

type Row = { date: string; title: string; source: string; href?: string };

const pressReleases: Row[] = [
  { date: "Aug 12, 2019", title: "World's first plant-based & climate-conscious ETF (VEGN) opens for trading on NYSE — Sept 10, 2019", source: "Beyond Investing" },
  { date: "Sep 9, 2021", title: "VEGN ETF celebrates two years of outperforming the S&P 500 — ~$65M AUM, 67.91% total return since inception", source: "veganetf.com" },
  { date: "Nov 2021", title: "Vegan World Index Certificate launch — first targeted exposure to plant-based companies with accelerating sales", source: "Beyond Investing" },
  { date: "2021–22", title: "Beyond Investing expands range of animal-friendly investment products — five new products launched", source: "GreenMoney", href: "https://greenmoney.com" },
  { date: "2023", title: "Beyond Impact releases inaugural Annual Impact & ESG Report — 8 portfolio companies as of Dec 31, 2022", source: "EIN Presswire", href: "https://www.einpresswire.com" },
  { date: "Sep 2023", title: "VEGN 4-year anniversary — up 26.20% YTD through Sept 7, 2023, 10.27% ahead of the S&P 500", source: "veganetf.com" },
  { date: "Jan 2024", title: "US Vegan Climate ETF outperforms S&P 500 with 2023 performance — VEGN up 38.08% vs S&P's 26.29%; ~3M animal lives spared", source: "EIN Presswire", href: "https://www.einpresswire.com" },
  { date: "Oct 1, 2025", title: "APAC Society for Cellular Agriculture (APAC-SCA) partners with Beyond Impact VC and Beyond Animal to strengthen investment in the future of food", source: "APAC-SCA", href: "https://apac-sca.org" },
  { date: "Apr 13, 2026", title: "Beyond Impact and UMITO Partners announce strategic partnership to accelerate the blue innovation ecosystem across Europe and Asia — 'Blue Frontier' fund targeting $75M", source: "LinkedIn Pulse", href: "https://www.linkedin.com/company/beyond-impact-advisors/" },
  { date: "2026", title: "Beyond Impact selected for the ImpactAssets 50® (IA 50) 2026 as an Emerging Impact Manager — 15th anniversary edition", source: "ImpactAssets", href: "https://impactassets.org/ia-50/" },
  { date: "Mar 2026", title: "VEGN 6-year anniversary — continued positive performance; new product launch teased", source: "veganetf.com" },
  { date: "Mar 2026", title: "US VEGN ETF annualized return of 15.90% since inception — 2025 performance update", source: "veganetf.com" },
];

const coverage: Row[] = [
  { date: "May 2018", title: "New Stock Index Makes It Easier For Ethical Investors To Invest — launch of the US Vegan Climate Index", source: "Forbes" },
  { date: "Sep 17, 2019", title: "A plant-based ETF just launched, and its holdings may surprise you — VEGN begins trading on NYSE", source: "CNBC" },
  { date: "Sep 2019", title: "US Vegan Climate ETF Off To A Promising Start, Trading Over $4m Worth of Shares", source: "Mondovisione" },
  { date: "Sep 2019", title: "Vegan ETF Almost Like the Real Thing", source: "Wall Street Journal" },
  { date: "Jan 2021", title: "The Story Behind the Market's Hottest Funds — thematic ETFs feature including VEGN", source: "Wall Street Journal" },
  { date: "Sep 2021", title: "World's First Plant-Based ETF Outperforms S&P For Second Consecutive Year", source: "Green Queen" },
  { date: "Sep 8, 2021", title: "VEGN ETF celebrates two years of outperformance", source: "ETF Express" },
  { date: "2021", title: "Invest In High Growth Plant-based Companies With Beyond Investing's Vegan World Index", source: "Vegconomist" },
  { date: "2021", title: "Interview with Claire Smith on Beyond Impact Vegan Diversity Rolling Fund", source: "Vegconomist" },
  { date: "2022", title: "Impact fund participates in transfer to sustainable economy", source: "Opalesque" },
  { date: "2022", title: "Claire Smith of Beyond Impact Fund II — Family Office Insights Q&A", source: "Family Office Insights" },
  { date: "2023", title: "5-Minute Interview with Sagar Tandon, Beyond Impact", source: "LinkedIn" },
  { date: "2023", title: "How Beyond Impact Is Investing In Companies That Are Driving A Cleaner And Healthier World", source: "Pulse2" },
  { date: "Feb 2024", title: "VEGN growth and expansion plans — VEGN at USD 83.7M AUM; 2023 results announced", source: "ETF Express" },
  { date: "2025", title: "Vegan ETF Issuer Preps an International Flavor — VEGN pulled $13M in flows in 2025", source: "Yahoo Finance" },
  { date: "2025", title: "VEGN: Animal-Friendly ETF With A Tech-Heavy Portfolio And High Beta", source: "Seeking Alpha" },
  { date: "Oct 2025", title: "APAC-SCA and Beyond Impact VC Launch Initiative to Support the Future of Food and Cellular Agriculture", source: "Cultivated X" },
  { date: "Oct 2025", title: "Clearing the bottlenecks: What it will take to scale cellular agriculture in Asia", source: "Asia Food Journal" },
  { date: "Oct 2025", title: "Demonstrating Scale-Up in Cultivated Food: A Biomanufacturing Conference — APAC-SCA Penang", source: "Malaysia SME" },
  { date: "2026", title: "European and Japanese impact firms team up to launch $75m blue economy fund — Blue Frontier fund", source: "Impact Loop" },
  { date: "2026", title: "UMITO Partners and Beyond Impact unite for blue economy investment", source: "Zenbird" },
  { date: "Jun 8, 2026", title: "Flanigan's Eco-Logic Podcast #274 — Claire Smith on cruelty-free & plant-based investing", source: "EcoMotion / YouTube" },
  { date: "2026", title: "Episode 138: Vegan Investing with Claire Smith", source: "Hope for the Animals Podcast" },
];

const awards: Row[] = [
  { date: "2026", title: "Selected for the ImpactAssets 50® (IA 50) 2026 — Emerging Impact Manager, 15th anniversary edition", source: "ImpactAssets" },
  { date: "2026", title: "CEO Claire Smith nominated for Women in Investment Awards 2026", source: "Investment Week" },
  { date: "2024", title: "Best Impact-Focused Fund Management Firm — Beyond Impact", source: "Wealth & Finance — Ethical Finance Awards" },
  { date: "2023", title: "Environmental Fund of the Year — Global (Beyond Impact)", source: "Environmental Finance Sustainable Investment Awards" },
  { date: "2023", title: "Best Investment Company", source: "Wealth & Finance — Ethical Finance Awards" },
  { date: "2022", title: "Investment Leader of the Year — Claire Smith, CEO & Founder", source: "Environmental Finance Sustainable Investment Awards" },
  { date: "Certified", title: "Best ESG Fund — Climate Focused", source: "ESG AAA Rating — European Awards (Private Equity Wire)" },
  { date: "Certified", title: "Best ESG Fund", source: "ESG AAA Rating" },
  { date: "Classified", title: "Article 9 (SFDR) Impact Fund Platform", source: "SFDR Classification" },
];


const partnerships = [
  { title: "Blue Frontier Fund", body: "$75M blue economy fund with UMITO Partners (Tokyo), targeting early-stage deep-tech across Europe & APAC." },
  { title: "APAC-SCA & Beyond Biotech Series", body: "Cell Ag Investment Forum and webinar series with the APAC Society for Cellular Agriculture." },
  { title: "EIT Community — New European Bauhaus", body: "Sagar Tandon, Partner at Beyond Impact VC, appointed to the Advisory Board (Jul 2026)." },
  { title: "Sustainable Ocean Summit & Global Blue Finance Summit", body: "Beyond Impact at Tomorrow.BlueEconomy, Barcelona." },
  { title: "Re:Invest in Nature", body: "Claire Smith on jury panel during EU Green Week, Brussels (Jun 3, 2026)." },
  { title: "Investing for Humanity", body: "Short film — bit.ly/investingforhumanity." },
];

const Section = ({
  eyebrow,
  title,
  intro,
  rows,
  headers,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  rows: Row[];
  headers: [string, string, string];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="mt-20 border-t border-navy/15 pt-10"
  >
    <div className="eyebrow text-earth font-bold">{eyebrow}</div>
    <h2 className="display mt-4 text-3xl text-navy md:text-4xl">{title}</h2>
    {intro && <p className="mt-4 max-w-3xl text-navy/70 leading-relaxed">{intro}</p>}

    <div className="mt-8 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-soft">
      <div className="hidden grid-cols-12 gap-4 border-b border-navy/10 bg-clay-warm px-6 py-4 text-[11px] uppercase tracking-wider text-navy/70 md:grid">
        <div className="col-span-2">{headers[0]}</div>
        <div className="col-span-7">{headers[1]}</div>
        <div className="col-span-3">{headers[2]}</div>
      </div>
      <ul>
        {rows.map((r, i) => (
          <li
            key={`${r.date}-${i}`}
            className="grid grid-cols-1 gap-2 border-b border-navy/10 px-6 py-5 last:border-b-0 md:grid-cols-12 md:gap-4"
          >
            <div className="col-span-2 text-xs uppercase tracking-wider text-navy/60">
              {r.date}
            </div>
            <div className="col-span-7 text-navy leading-snug">{r.title}</div>
            <div className="col-span-3 text-sm text-navy/70">
              {r.href ? (
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue hover:text-heart transition-colors font-medium"
                >
                  {r.source}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : (
                r.source
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Media = () => {
  return (
    <Layout navVariant="light">
      <SEO
        title="Media & Press Room — Press releases, coverage & awards | Beyond Impact"
        description="Curated archive of press releases, media coverage, awards and founder interviews across Beyond Impact, Beyond Investing (VEGN ETF) and Beyond Animal — impact venture capital, climate VC and the bioeconomy."
        path="/media"
        keywords="industrial biotech, applied biotech, bioeconomy, advanced nutrition, human food, pet food, Beyond Impact press, media room, VEGN ETF news, impact investing press releases, Beyond Investing coverage, Claire Smith interviews, blue economy fund, ImpactAssets IA 50"
      />
      <PageHero
        eyebrow="Media & Press Room"
        title={
          <>
            News, coverage &amp; the <span className="script text-heart">Beyond</span> story.
          </>
        }
        sub="A curated archive of press releases, media coverage, awards and founder interviews across the Beyond group of companies — Beyond Impact (impact venture capital), Beyond Investing (climate indexes & the VEGN ETF) and Beyond Animal (investor platform for the animal-free economy). Founded 2017 in Montreux, Switzerland, with operations across Europe, the US and Asia-Pacific."
        image={heroOcean}
      >
        <div className="mt-8">
          <a
            href={`mailto:${site.contactEmail}`}
            className="inline-flex items-center gap-2 rounded-full border border-blue/30 bg-white/80 px-6 py-3 text-sm font-semibold text-blue transition-all hover:bg-blue hover:text-white shadow-sm"
          >
            Media enquiries: {site.contactEmail}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </PageHero>

      <section className="bg-white py-20 md:py-28 border-t border-navy/10">
        <div className="container-x max-w-6xl">
          {/* About the Beyond Group */}
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                name: "Beyond Impact VC",
                body: "Article 9 SFDR impact venture capital platform backing plant-based, biodiversity-positive biosolutions, advanced nutrition, human food, pet food and biomaterials. Founded 2017, Montreux.",
                href: "https://beyondimpact.vc",
              },
              {
                name: "Beyond Investing",
                body: "Plant-based investment platform; creator of the US, Europe, Global & International Vegan Climate Indexes and the US Vegan Climate ETF (NYSE/BATS: VEGN).",
                href: "https://beyondinvesting.com",
              },
              {
                name: "Beyond Animal",
                body: "Online networking and funding platform accelerating the animal-free economy.",
                href: "https://beyondanimal.com",
              },
              {
                name: "Beyond Cruelty Foundation",
                body: "Campaigns for zero animal exploitation and funds safe havens for animals.",
                href: "https://beyondcruelty.org/",
              },
            ].map((c) => (
              <div key={c.name} className="rounded-2xl border border-navy/10 bg-white p-7 shadow-soft">
                <div className="eyebrow text-earth font-bold">The Beyond Group</div>
                <h3 className="display mt-3 text-2xl text-navy">{c.name}</h3>
                <p className="mt-3 text-navy/75 leading-relaxed">{c.body}</p>
                {c.href && (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-blue hover:text-heart transition-colors font-semibold"
                  >
                    Visit site
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>

          <Section
            eyebrow="01 — Press Releases"
            title="Official announcements."
            intro="Chronological list of press releases and company-issued announcements from across the Beyond group."
            rows={pressReleases}
            headers={["Date", "Announcement", "Source"]}
          />

          <Section
            eyebrow="02 — Media Coverage"
            title="Third-party reporting & interviews."
            intro="Profiles, market analysis and founder interviews across business, finance and trade press."
            rows={coverage}
            headers={["Date", "Coverage", "Outlet"]}
          />

          <Section
            eyebrow="03 — Awards & Recognition"
            title="Independently recognised."
            rows={awards}
            headers={["Year", "Award", "Awarding body"]}
          />

          {/* Partnerships */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mt-20 border-t border-navy/15 pt-10"
          >
            <div className="eyebrow text-earth font-bold">04 — Partnerships</div>
            <h2 className="display mt-4 text-3xl text-navy md:text-4xl">
              Strategic initiatives.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {partnerships.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-navy/10 bg-white p-7 shadow-soft"
                >
                  <h3 className="display text-xl text-navy">{p.title}</h3>
                  <p className="mt-3 text-navy/75 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Investor CTA */}
          <div className="mt-20 grid gap-6 rounded-3xl bg-white border-2 border-navy/15 p-8 text-navy shadow-soft md:grid-cols-12 md:items-center md:p-12">
            <div className="md:col-span-8">
              <div className="eyebrow text-earth font-bold">For journalists & investors</div>
              <p className="mt-3 text-navy/80 leading-relaxed">
                For interviews, quotes, factsheets or high-resolution assets, please reach the team directly. We typically respond within one business day.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <a
                href={`mailto:${site.contactEmail}`}
                className="inline-flex items-center gap-2 rounded-full bg-heart px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-heart-bright shadow-heart"
              >
                {site.contactEmail}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <p className="mt-10 text-xs text-navy/50">
            © {new Date().getFullYear()} Beyond Impact Advisors Sàrl, part of the Beyond Investing platform. This page is provided for informational purposes only and does not constitute an offer to buy or sell securities.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
