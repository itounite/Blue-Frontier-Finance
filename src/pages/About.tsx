import { motion } from "framer-motion";
import { Sprout, Globe2, HeartPulse, Building2, ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { about } from "@/content/site";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/content/translations";

const pillarIcons = { Sprout, Globe2, HeartPulse } as const;

const About = () => {
  const { language, isJapanese, t } = useLanguage();
  const tr = translations[language].about;

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
        title={t(
          "About Blue Frontier Finance — Beyond Impact & UMITO Partners",
          "Blue Frontier Finance 概要 — Beyond Impact & UMITO Partners"
        )}
        description={t(
          "Meet the Blue Frontier Finance team — Claire Smith, Shunji Murakami, Sagar Tandon, Tarja Zudemberg, and our global advisors. Bridging European deep-tech science and Japanese operational leadership for the New Blue Economy.",
          "Blue Frontier Financeの合同チーム（クレア・スミス、村上春二、サガル・タンドン、タリヤ・ズーデンバーグ、およびグローバル・アドバイザー陣）のご紹介。欧州の先端サイエンスと日本の海洋産業実行力を架橋します。"
        )}
        path="/about"
        keywords="Blue Frontier Finance, Claire Smith, Shunji Murakami, Sagar Tandon, Tarja Zudemberg, Michael Adams, Torsten Thiele, UMITO Partners, Beyond Impact, blue economy, marine biotechnology, ocean impact investing, cellular aquaculture"
        jsonLd={teamJsonLd}
      />
      <PageHero
        eyebrow={tr.hero.eyebrow}
        title={
          isJapanese ? (
            <>
              海洋の再生と強靭化を拓く、<span className="script text-heart">二国間アライアンス</span>。
            </>
          ) : (
            <>
              A bilateral alliance for <span className="script text-heart">ocean resilience</span>.
            </>
          )
        }
        sub={tr.hero.sub}
        image={about.hero.image}
      />

      {/* BILATERAL CREDENTIALS & COLLABORATIVE TRACK RECORD */}
      <section className="bg-white py-20 border-b border-navy/10">
        <div className="container-x">
          <div className="mb-10 max-w-3xl">
            <div className="eyebrow text-earth font-bold">
              {tr.trackRecordHeading}
            </div>
            <h2 className="display mt-3 text-3xl md:text-4xl text-navy">
              {tr.trackRecordSub}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {about.credentials.map((c) => {
              const isBeyond = c.org.includes("Beyond");
              const details = isJapanese
                ? isBeyond
                  ? "2017年設立。ベンチャー投資、共同投資、上場インデックスを通じ運用資産1億9,100万ドル超。IA 50 Emerging Impact Manager (2026) および Ethical Finance Awards Best Impact-Focused Firm (2024) 受賞。"
                  : "B Corp認証取得、WIRED Japan「リジェネラティブ・カンパニー 2025」選出。持続可能な漁業・養殖業イニシアチブ10件以上に1,000万ドル超を投じ、日本国内で5件のMSC・ASC認証取得を支援。"
                : c.details;

              const title = isJapanese
                ? isBeyond
                  ? "先駆的インパクトVC & SFDR Article 9 運用の実績"
                  : "ニュー・ブルーエコノミーを牽引する日本のリーダー"
                : c.title;

              return (
                <div
                  key={c.org}
                  className="rounded-2xl border border-navy/15 bg-white p-8 md:p-10 shadow-soft flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                        isBeyond ? "bg-emerald-100 text-emerald-800" : "bg-blue/10 text-blue"
                      }`}>
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-earth">{c.org}</span>
                        <h3 className="display text-xl text-navy">{title}</h3>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-navy/75">{details}</p>
                  </div>

                  {/* Links in Boxes: Beyond Impact in GREEN box, UMITO Partners in BLUE box, NO 'Official Website' text */}
                  <div className="mt-8 pt-5 border-t border-navy/10 flex items-center">
                    {isBeyond ? (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-500 bg-emerald-50 px-5 py-2.5 text-xs sm:text-sm font-bold text-emerald-800 transition-all hover:bg-emerald-600 hover:text-white hover:border-emerald-600 shadow-sm"
                      >
                        <span>{c.displayUrl}</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border-2 border-[#3328F0] bg-[#3328F0]/10 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#3328F0] transition-all hover:bg-[#3328F0] hover:text-white hover:border-[#3328F0] shadow-sm"
                      >
                        <span>{c.displayUrl}</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-x">
          <div className="eyebrow text-earth font-bold">{tr.convictionEyebrow}</div>
          <h2 className="display mt-4 max-w-3xl text-4xl text-navy md:text-5xl">
            {tr.convictionTitle}
          </h2>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {tr.values.map((v, i) => (
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
            <div className="eyebrow text-earth font-bold">
              {t("Impact Framework", "インパクト・フレームワーク")}
            </div>
            <h2 className="display mt-4 text-4xl text-navy md:text-5xl">
              {t(
                "Three pillars of ocean impact — measured, verifiable, and net-positive.",
                "海洋インパクトの3つの柱 — 測定可能・検証可能・真のネットポジティブ"
              )}
            </h2>
            <p className="mt-6 leading-relaxed text-navy/75">
              {t(
                "Every company supported through Blue Frontier Finance is assessed against concrete ocean resilience metrics.",
                "Blue Frontier Financeを通じて支援・投資されるすべての企業は、具体的な海洋回復・再生指標に基づいて評価されます。"
              )}
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {about.impactPillars.pillars.map((p, i) => {
              const Icon = pillarIcons[p.icon as keyof typeof pillarIcons];
              const pillarTitle = isJapanese
                ? i === 0
                  ? "海洋生物多様性と生態系の再生"
                  : i === 1
                    ? "ブルー・気候アクション"
                    : "安全でクリーンな海洋栄養供給"
                : p.name;

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
                  <h3 className="display text-2xl text-navy">{pillarTitle}</h3>
                  <ul className="mt-6 space-y-3.5">
                    {p.points.map((pt, pIdx) => {
                      const localizedPoint = isJapanese
                        ? i === 0
                          ? [
                              "細胞培養水産および精密発酵技術により、犠牲となる水生動物の命を救い、天然海洋生物を保護。",
                              "沿岸生息地の自然再生、アマモ場・藻場の再生活動、マングローブの保全を推進。",
                              "標準化された海洋生物多様性フレームワークに基づき、ネットポジティブな生態系改善を測定。",
                            ][pIdx] || pt
                          : i === 1
                            ? [
                                "海藻養殖および機能性微細藻類の活用により、反芻動物のメタン排出を抜本的に削減。",
                                "高耐久性の海洋炭素隔離（ブルーカーボン）および海運産業の脱炭素化を優先支援。",
                                "支援先ポートフォリオ企業を科学的根拠に基づくネットゼロ基準に準拠。",
                              ][pIdx] || pt
                            : [
                                "マイクロプラスチック、水銀、PFAS、重金属の生体濃縮から人類と動物の食生活を保護。",
                                "集約型海面養殖に起因する抗生物質使用や人獣共通感染症リスクを排除。",
                                "優れた食味・機能性と生体利用効率を備えた、栄養密度の高い海洋原料を供給。",
                              ][pIdx] || pt
                        : pt;

                      return (
                        <li key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-navy/80">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-heart" />
                          <span>{localizedPoint}</span>
                        </li>
                      );
                    })}
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
          <div className="eyebrow text-blue font-bold">{tr.leadershipEyebrow}</div>
          <h2 className="display mt-4 max-w-3xl text-4xl text-navy md:text-5xl">
            {isJapanese ? (
              <>
                確かな海洋への情熱と信念を持つ、<span className="script text-heart">合同エグゼクティブ</span>陣。
              </>
            ) : (
              <>
                Cross-continental execution with <span className="script text-heart">deep</span> ocean conviction.
              </>
            )}
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {about.team.map((p, i) => {
              const bio = isJapanese
                ? i === 0
                  ? "Beyond InvestingおよびBeyond Animalプラットフォームの創業者。35年以上の金融・資産運用経験を有する。元Albourne Partners Limited 株式クオンツ戦略責任者、UBS投資家デリバティブ・マーケティング責任者、Swiss Bank Corporation転換社債セールス責任者。Geltor、EVERY、Mosa Meat、SuperMeat、BlueNalu等の初期投資をリード。"
                  : i === 1
                    ? "UMITO Partners 代表取締役。日本各地における海洋保全および持続可能な水産業の推進で10年以上のリーダーシップを持つ。元Wild Salmon CenterおよびOcean Outcomes (O2) 日本代表、元シーフードレガシー副社長。現在、アジア太平洋FIP協議会理事および日本の水産増養殖産業化推進協議会委員を務める。"
                    : i === 2
                      ? "バイオエコノミー特化型ファンド設計者。Gray Matters Capital（AUM 2億ドル超）および豪州政府DFAT支援のインパクト・ビークルなど、2つのインパクトファンド立ち上げに参画。20社以上の初期スタートアップ投資を指揮。Good Food Institute India & APAC、Fashion for Good（オランダ）メンター。Swedish Algae Factory（スウェーデン）、TissenBioFarm（韓国）、Perfat（フィンランド）等の取締役を歴任。"
                      : "ベンチャーキャピタル、インパクト投資、中小企業ファイナンスにおいて20年以上の実績。Almi InvestのCEO兼ファンドマネージャーを13年間務め、60社以上で100件超の投資案件を実行、30社で取締役を務めた。北欧の気候・海洋イノベーション領域のエンジェル投資家としても活動。"
                : p.bio;

              const role = isJapanese
                ? i === 0
                  ? "創業者 兼 最高投資責任者 (CIO)"
                  : i === 1
                    ? "代表取締役 (CEO)"
                    : i === 2
                      ? "パートナー"
                      : "パートナー"
                : p.role;

              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                  className="flex flex-col sm:flex-row gap-6 border-t border-navy/15 pt-8"
                >
                  <div className="shrink-0">
                    <div className="h-28 w-28 overflow-hidden rounded-full bg-slate-100 ring-2 ring-blue/20 shadow-sm md:h-32 md:w-32 flex items-center justify-center">
                      <img src={p.photo} alt={p.name} className="h-full w-full object-cover object-center" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="display text-xl text-navy md:text-2xl">{p.name}</h3>
                      <span className="text-xs font-bold text-earth uppercase tracking-wider">{p.org}</span>
                    </div>
                    <div className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue">{role}</div>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-navy/75">{bio}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ADVISORS & VENTURE PARTNERS */}
      <section className="bg-white py-24 text-navy md:py-32 border-t border-navy/10">
        <div className="container-x">
          <div className="eyebrow text-earth font-bold">{tr.advisorsEyebrow}</div>
          <h2 className="display mt-4 max-w-3xl text-4xl text-navy md:text-5xl">
            {tr.advisorsTitleLead} <span className="script text-heart">{tr.advisorsTitleScript}</span>
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {about.advisors.map((a, i) => {
              const bio = isJapanese
                ? i === 0
                  ? "投資銀行での30年のキャリアと海洋への情熱を経て2016年にOcean Assetsを設立。グローバルなインパクト海洋プロジェクトおよびブルーエコノミー・ベンチャーに民間資本を動員するためOcean Assets Instituteを創設。"
                  : i === 1
                    ? "海洋ガバナンスと持続可能なブルーファイナンスの世界的第一人者。大手金融機関におけるプロジェクトおよびインフラファイナンスで20年以上の経験を持ち、海洋レジリエンスのための革新的金融スキームの構築に尽力。"
                    : i === 2
                      ? "ジュネーブHEG国際経営学士（2025年）。英語、フランス語、ドイツ語、日本語に堪能。Ocean Assetsおよびカリブ海生物多様性基金の戦略プロジェクト調査をリードし、国境を越えた海洋ディールオリジネーションを専門とする。"
                      : "アジア太平洋細胞農業協会（APAC-SCA）プログラムディレクター。アジア太平洋地域における規制調整と戦略的パートナーシップを主導。BNPパリバ証券での株式リサーチ経験を活かし、新規食品およびバイオテクノロジー投資を助言。"
                : a.bio;

              const role = isJapanese
                ? i === 0
                  ? "アドバイザー 兼 投資委員会メンバー"
                  : i === 1
                    ? "ストラテジック・アドバイザー"
                    : i === 2
                      ? "ベンチャーパートナー（ソーシング）"
                      : "ベンチャーパートナー（技術デューデリジェンス）"
                : a.role;

              return (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                  className="flex flex-col sm:flex-row gap-6 border-t border-navy/15 pt-8"
                >
                  <div className="shrink-0">
                    <div className="h-24 w-24 overflow-hidden rounded-full bg-slate-100 ring-1 ring-navy/20 shadow-sm md:h-28 md:w-28 flex items-center justify-center">
                      <img src={a.photo} alt={a.name} className="h-full w-full object-cover object-center" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="display text-lg text-navy md:text-xl">{a.name}</h3>
                      <span className="text-xs text-navy/60 font-medium">{a.affiliation}</span>
                    </div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-earth">{role}</div>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-navy/75">{bio}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
