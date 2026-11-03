import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Info } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { portfolio } from "@/content/site";
import heroOceanFarm from "@/assets/images/ocean_deep_blue_algae_farm_1793609732681.jpg";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/content/translations";

const jaCompanyData: Record<string, { desc: string; focus: string; region: string; deckNote: string; category: string }> = {
  BlueNalu: {
    desc: "魚類の細胞から直接プレミアムな寿司グレードの水産食品を生産する細胞農業の世界的パイオニア。乱獲、水銀、マイクロプラスチックを排除し、海洋生態系と生物多様性を保護。",
    focus: "細胞培養本マグロ・白身魚",
    region: "米国",
    deckNote: "細胞農業のパイオニア。魚細胞から高品質で持続可能な水産物を直接生産。",
    category: "細胞培養水産",
  },
  "Swedish Algae Factory": {
    desc: "微細珪藻を培養し、特許取得済みの循環型シリカナノ材料「Algica®」を生産。60種以上のパーソナルケア処方、UV保護、スキンケア、およびハイテク蓄電池に応用。",
    focus: "珪藻ナノマテリアル (Algica®)",
    region: "スウェーデン (EU)",
    deckNote: "微細珪藻を培養し、スキンケアや先端素材に用いられる高性能シリカAlgicaを生産。",
    category: "微細藻類・珪藻",
  },
  "Umami Bioworks": {
    desc: "甲殻類および希少魚類の培養肉を手がける世界初の先駆企業。自動化されたモジュール型生産システムとAIバイオリアクターソフトウェアを独自開発。",
    focus: "細胞培養甲殻類＆水産原料",
    region: "シンガポール (APAC)",
    deckNote: "世界で初めて培養甲殻類を開発。自動モジュールシステムで培養水産を効率的にスケール。",
    category: "細胞培養水産",
  },
  Ingrediome: {
    desc: "光とCO₂を利用した光合成ラン藻の精密発酵技術により、高栄養で生体同一な動物・魚介タンパク質を低炭素・高効率で生産。",
    focus: "ラン藻（シアノバクテリア）精密発酵",
    region: "イスラエル・米国",
    deckNote: "ラン藻ベースの精密発酵による高機能・高栄養な生体同一タンパク質の生産。",
    category: "精密発酵",
  },
  Algama: {
    desc: "微細藻類抽出物から革新的な機能性栄養素・原料を開発。食品・飲料向けに優れた栄養プロファイル、抗酸化特性、高乳化性を提供。",
    focus: "微細藻類ベースの機能性原料",
    region: "フランス (EU)",
    deckNote: "微細藻類抽出物を含有し、栄養価と食味を飛躍的に高めた機能性原料を開発。",
    category: "機能性藻類原料",
  },
  Geltor: {
    desc: "合成生物学を活用し、高機能なアニマルフリー・コラーゲンおよびバイオ設計タンパク質を創出。高級ニュートリションや臨床スキンケアに応用。",
    focus: "アニマルフリーコラーゲン＆バイオ設計タンパク質",
    region: "米国",
    deckNote: "合成生物学で設計・構築された優れた食感・機能性タンパク質を開発。",
    category: "合成生物学",
  },
};

const Portfolio = () => {
  const [filter, setFilter] = useState<string>("All");
  const { language, isJapanese, t } = useLanguage();
  const tr = translations[language].portfolio;

  const rawCategories = useMemo(
    () => Array.from(new Set(portfolio.companies.map((c) => c.category))),
    []
  );

  const filtered = useMemo(
    () => (filter === "All" ? portfolio.companies : portfolio.companies.filter((c) => c.category === filter)),
    [filter]
  );

  const getCategoryLabel = (cat: string) => {
    if (cat === "All") return isJapanese ? "すべて" : "All";
    if (!isJapanese) return cat;
    if (cat === "Cellular Aquaculture") return "細胞培養水産";
    if (cat === "Microalgae & Diatoms") return "微細藻類・珪藻";
    if (cat === "Precision Fermentation") return "精密発酵";
    if (cat === "Microalgae Ingredients") return "機能性藻類原料";
    if (cat === "Synthetic Biology") return "合成生物学";
    return cat;
  };

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
        title={t(
          "Portfolio — Blue Frontier Finance | Blue Economy & Marine Biotech Companies",
          "ポートフォリオ — Blue Frontier Finance | 海洋バイオテック・細胞水産企業"
        )}
        description={t(
          "Blue Frontier Finance portfolio: BlueNalu, Swedish Algae Factory (Algica), Umami Bioworks, Ingrediome, Algama, and Geltor. Pioneer companies advancing cellular aquaculture, diatoms, precision fermentation, and synthetic biology.",
          "Blue Frontier Finance ポートフォリオ：BlueNalu、Swedish Algae Factory (Algica)、Umami Bioworks、Ingrediome、Algama、Geltor。細胞培養水産、珪藻ナノマテリアル、精密発酵、合成生物学の先駆的企業群。"
        )}
        path="/portfolio"
        keywords="BlueNalu, Swedish Algae Factory, Algica, Umami Bioworks, Ingrediome, Algama, Geltor, cellular aquaculture, cultivated seafood, microalgae, diatom silica, cyanobacteria fermentation, blue economy portfolio, Blue Frontier Finance"
        jsonLd={portfolioJsonLd}
      />
      <PageHero
        eyebrow={tr.hero.eyebrow}
        title={
          isJapanese ? (
            <>
              ニュー・ブルーエコノミーを牽引する<span className="script text-heart">厳選ポートフォリオ</span>。
            </>
          ) : (
            <>
              Select portfolio companies in the <span className="script text-heart">New Blue Economy</span>.
            </>
          )
        }
        sub={tr.hero.sub}
        image={heroOceanFarm}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          {/* Prominent Portfolio Attribution Note */}
          <div className="mb-12 rounded-2xl border border-navy/15 bg-clay-warm/70 p-6 sm:p-8 shadow-soft flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue text-white shadow-sm">
              <Info className="h-6 w-6" strokeWidth={2.25} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-earth">{tr.noteBadge}</span>
                <span className="text-navy/30">·</span>
                <span className="text-xs font-bold text-navy/60">{tr.notePartner}</span>
              </div>
              <p className="mt-1.5 text-sm sm:text-base font-medium text-navy leading-relaxed">
                {isJapanese ? (
                  <>
                    掲載企業は、Blue Frontier Financeの協業パートナーである<span className="font-bold text-blue">Beyond Impact VC</span>のポートフォリオ企業です。持続可能な海洋バイオエコノミー、細胞培養水産、珪藻ナノマテリアル、精密発酵分野における先駆的投資実績をご紹介しています。
                  </>
                ) : (
                  <>
                    These are portfolio companies of <span className="font-bold text-blue">Beyond Impact VC</span> — highlighting pioneer investments in the sustainable ocean bioeconomy, cellular aquaculture, diatom nanomaterials, and precision fermentation.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilter("All")}
              className={`rounded-full border px-5 py-2 text-xs sm:text-sm font-medium transition-all ${
                filter === "All"
                  ? "border-blue bg-blue text-white shadow-sm font-semibold"
                  : "border-navy/20 text-navy hover:border-blue hover:text-blue hover:bg-blue/5"
              }`}
            >
              {getCategoryLabel("All")}
            </button>
            {rawCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full border px-5 py-2 text-xs sm:text-sm font-medium transition-all ${
                  filter === cat
                    ? "border-blue bg-blue text-white shadow-sm font-semibold"
                    : "border-navy/20 text-navy hover:border-blue hover:text-blue hover:bg-blue/5"
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>

          {/* Companies Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((c) => {
                const jaInfo = jaCompanyData[c.name];
                const desc = isJapanese && jaInfo ? jaInfo.desc : c.desc;
                const focus = isJapanese && jaInfo ? jaInfo.focus : c.focus;
                const region = isJapanese && jaInfo ? jaInfo.region : c.region;
                const deckNote = isJapanese && jaInfo ? jaInfo.deckNote : c.deckNote;
                const category = isJapanese && jaInfo ? jaInfo.category : c.category;

                return (
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
                            {category}
                          </span>
                          <h3 className="display mt-3 text-2xl text-navy group-hover:text-blue transition-colors">
                            {c.name}
                          </h3>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-earth block">
                            {isJapanese ? "調達額" : "Raised"}
                          </span>
                          <span className="display text-base font-extrabold text-heart">{c.raised}</span>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center gap-2 text-xs text-navy/60 font-medium">
                        <MapPin className="h-3.5 w-3.5 text-navy/40" />
                        <span>{region}</span>
                        <span className="text-navy/30">·</span>
                        <span className="text-earth font-semibold">{focus}</span>
                      </div>

                      <p className="mt-5 text-sm leading-relaxed text-navy/75">
                        {desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-5 border-t border-navy/10 flex items-center justify-between text-xs">
                      <span className="text-navy/60 italic font-sans">{deckNote}</span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Bottom Partnership Callout */}
          <div className="mt-20 rounded-2xl bg-white border border-navy/15 p-8 sm:p-12 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-earth">
                {isJapanese ? "共同投資ディールフロー" : "Co-Investment Dealflow"}
              </span>
              <h3 className="display mt-2 text-2xl sm:text-3xl text-navy">
                {isJapanese
                  ? "Blue Frontier Finance との共同投資をご検討ですか？"
                  : "Looking to co-invest alongside Blue Frontier Finance?"}
              </h3>
              <p className="mt-2 text-sm text-navy/75 leading-relaxed">
                {isJapanese
                  ? "共同投資ネットワークのパートナーに向けて、機関投資家向け詳細メモ、技術的実証データ、およびハンズオンの経営支援体制を共有しています。"
                  : "We share institutional diligence memos, technical validation, and provide hands-on portfolio management for our co-investor network."}
              </p>
            </div>
            <a
              href="mailto:invest@beyondimpact.vc?cc=info@umitopartners.com&subject=Co-Investment%20Dealflow%20Inquiry"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white shadow-blue hover:bg-blue/90 transition-all"
            >
              <span>{isJapanese ? "ディール情報を請求する" : "Request Access"}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
