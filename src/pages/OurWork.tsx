import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  TrendingUp,
  Award,
  ShieldCheck,
  Mail,
  CheckCircle2,
  Copy,
  Check,
  BookOpen,
  Sparkles,
  Users,
} from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { advisory } from "@/content/site";
import { toast } from "sonner";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/content/translations";

const legIcons = [TrendingUp, Award, ShieldCheck];

type TabId = "blue-awards" | "study-sessions" | "co-investment";

const OurWork = () => {
  const [activeTab, setActiveTab] = useState<TabId>("blue-awards");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { language, isJapanese, t } = useLanguage();
  const tr = translations[language].ourWork;

  const copyEmail = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast.success(
      isJapanese ? `クリップボードにコピーしました: ${text}` : `Copied to clipboard: ${text}`
    );
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <Layout navVariant="light">
      <SEO
        title={t(
          "Our Work — Blue Frontier Finance | Co-Investments, Study Sessions & Blue Awards",
          "事業・協業 — Blue Frontier Finance | 共同投資・勉強会・Blue Awards"
        )}
        description={t(
          "Explore Our Work at Blue Frontier Finance — co-investment opportunities, investor education, ecosystem study sessions, the annual Blue Awards, and dedicated investment vehicle partnerships across Japan, Europe, and APAC.",
          "Blue Frontier Financeの活動をご紹介。共同投資機会、投資家教育、エコシステム勉強会、毎年開催されるBlue Awards、特化型投資ビークル連携を日本・欧州・APAC全域で展開しています。"
        )}
        path="/our-work"
        keywords="Blue Frontier Finance, Our Work, ocean co-investment, investor education, Apply for Blue Awards, blue economy study sessions, marine biotechnology, UMITO Partners, Beyond Impact"
      />
      <PageHero
        eyebrow={tr.hero.eyebrow}
        title={
          isJapanese ? (
            <>
              ニュー・ブルーエコノミーを推進する<span className="script text-heart">3つの柱</span>。
            </>
          ) : (
            <>
              Three legs driving the <span className="script text-heart">New Blue Economy</span>.
            </>
          )
        }
        sub={tr.hero.sub}
        image={advisory.hero.image}
      />

      {/* THREE LEGS DEEP DIVE */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-x">
          <div className="space-y-24">
            {advisory.legs.map((leg, idx) => {
              const Icon = legIcons[idx];
              const isEcosystemLeg = leg.id === "ecosystem";

              const legTitle = isJapanese
                ? idx === 0
                  ? "共同投資機会と投資家教育"
                  : idx === 1
                    ? "エコシステム構築・勉強会・Blue Awards"
                    : "特化型投資ビークルでのパートナーシップ"
                : leg.title;

              const legEyebrow = isJapanese
                ? idx === 0
                  ? "直接的な資本展開"
                  : idx === 1
                    ? "エコシステム＆知見のリーダーシップ"
                    : "特化型投資ビークル連携"
                : leg.eyebrow;

              const legSubtitle = isJapanese
                ? idx === 0
                  ? "取引を超えたハンズオンのポートフォリオ管理"
                  : idx === 1
                    ? "未来はブルーにある — 日本、APAC、欧州を架橋"
                    : "機関投資家ガバナンスと二国間資本展開"
                : leg.subtitle;

              const legBody = isJapanese
                ? idx === 0
                  ? "私たちは、再生型ブルーエコノミーへの投資を志向する財団、ファミリーオフィス、事業会社と直接協業します。最先端サイエンスを紐解き、詳細なデューデリジェンスレポートを共有した上で、高確度案件への直接共同投資をストラクチャリングします。"
                  : idx === 1
                    ? "海洋経済の真の転換には、見識ある投資家コミュニティと力強いスタートアップ創業者群が不可欠です。私たちは勉強会、政策・事業ワークショップ、エグゼクティブ・ラウンドテーブルを開催し、欧州の科学と日本の産業を結ぶ調査研究を発信します。"
                    : idx === 2
                      ? "私たちは、プレシリーズAからシリーズBのディープテック海洋ベンチャーに機動的な資金を供給するため、機関投資家水準の特化型投資ビークルを維持・運用しています。関心のある機関投資家、事業会社、ファミリーオフィスとの直接連携をお待ちしています。"
                      : leg.body
                : leg.body;

              const bullets = isJapanese
                ? idx === 0
                  ? [
                      "海洋バイオおよび気候テック領域の市場ダイナミクス、ユニットエコノミクス、規制動向に関する投資家教育",
                      "Beyond Animalの10,000名超の投資家ネットワークおよびUMITO Partnersの水産ネットワークから創出される独自ディールフロー",
                      "取引完了後も伴走するハンズオン管理：取締役就任、事業会社マッチング、スケールアップ支援",
                      "知財の防衛性、バイオプロセスのスケールアップ、技術経済的検証を網羅した透明性の高いDDメモ",
                    ]
                  : idx === 1
                    ? [
                        "機関投資家、事業会社、政府機関向けにカスタマイズされた勉強会＆エグゼクティブ・ワークショップ",
                        "海洋バイオポリマー、養殖飼料転換、ブルーカーボンに関する独自レポートおよびホワイトペーパー",
                        "毎年開催の「Blue Awards」：日本・APAC・欧州で有望な海洋スタートアップを発掘・表彰・メンター支援",
                        "学術研究機関、水産協同組合、大企業イノベーション部門の連携促進",
                      ]
                    : idx === 2
                      ? [
                          "ルクセンブルクの確立された機関投資家ガバナンスとAIFM統制下での強固なストラクチャー",
                          "日本の海洋水産ノウハウと欧州の先端サイエンスを融合させた二国間ソーシング",
                          "コモディティ価格競争を避け、高収益ビーチヘッド市場を狙う規律あるB2B厳選投資",
                          "守秘義務契約に基づく詳細な機関投資家向け説明の実施",
                        ]
                      : leg.bullets
                : leg.bullets;

              const ctaText = isJapanese
                ? idx === 0
                  ? "共同投資について問い合わせる"
                  : idx === 1
                    ? "勉強会への参加を問い合わせる"
                    : "合同チームへ問い合わせる"
                : leg.ctaText;

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
                        <span className="text-xs font-bold uppercase tracking-widest text-earth">{legEyebrow}</span>
                        <h2 className="display text-2xl sm:text-3xl md:text-4xl text-navy">{legTitle}</h2>
                      </div>
                    </div>

                    <a
                      href={leg.ctaHref}
                      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-blue bg-blue px-6 py-3 text-sm font-semibold text-white shadow-blue hover:bg-blue/90 transition-all self-start"
                    >
                      <span>{ctaText}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="mt-4 text-sm font-bold uppercase tracking-wider text-earth">
                    {legSubtitle}
                  </div>

                  <p className="mt-6 text-base sm:text-lg text-navy/75 leading-relaxed max-w-4xl">
                    {legBody}
                  </p>

                  <div className="mt-8 grid gap-4 md:grid-cols-2 pt-8 border-t border-navy/10">
                    {bullets.map((point) => (
                      <div key={point} className="flex items-start gap-3 text-sm text-navy/80 leading-relaxed">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-earth mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* INTERACTIVE ACTION TABS */}
                  {isEcosystemLeg && (
                    <div className="mt-12 rounded-2xl border-2 border-blue/20 bg-gradient-to-br from-blue/5 via-white to-earth/5 p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-navy/10">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-widest text-blue">
                            {tr.interactiveSectionTitle}
                          </span>
                          <h3 className="display text-xl sm:text-2xl text-navy mt-1">
                            {isJapanese ? "Blue Awards 応募 ＆ 投資家勉強会 窓口" : "Direct Engagement Hub"}
                          </h3>
                        </div>
                        <span className="text-xs text-navy/60 font-medium">
                          {isJapanese ? "▼ 目的のタブを選択してください" : "Select an action tab below"}
                        </span>
                      </div>

                      {/* Tab Buttons */}
                      <div className="mt-6 flex flex-wrap gap-2 rounded-2xl bg-navy/5 p-1.5 border border-navy/10">
                        <button
                          type="button"
                          onClick={() => setActiveTab("blue-awards")}
                          className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                            activeTab === "blue-awards"
                              ? "bg-white text-navy shadow-sm border border-navy/10"
                              : "text-navy/70 hover:text-navy hover:bg-white/50"
                          }`}
                        >
                          <Sparkles className="h-4 w-4 text-heart" />
                          {tr.tabBlueAwards}
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveTab("study-sessions")}
                          className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                            activeTab === "study-sessions"
                              ? "bg-white text-navy shadow-sm border border-navy/10"
                              : "text-navy/70 hover:text-navy hover:bg-white/50"
                          }`}
                        >
                          <BookOpen className="h-4 w-4 text-blue" />
                          {tr.tabStudySessions}
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveTab("co-investment")}
                          className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                            activeTab === "co-investment"
                              ? "bg-white text-navy shadow-sm border border-navy/10"
                              : "text-navy/70 hover:text-navy hover:bg-white/50"
                          }`}
                        >
                          <Users className="h-4 w-4 text-earth" />
                          {tr.tabCoInvestment}
                        </button>
                      </div>

                      {/* Tab Content Box */}
                      <div className="mt-6">
                        <AnimatePresence mode="wait">
                          {activeTab === "blue-awards" && (
                            <motion.div
                              key="tab-blue-awards"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.25 }}
                              className="rounded-2xl border border-navy/15 bg-white p-6 sm:p-8 shadow-soft"
                            >
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-heart">
                                    <Sparkles className="h-3.5 w-3.5" />
                                    {isJapanese ? "スタートアップ公募枠" : "Startup Application Window"}
                                  </div>
                                  <h4 className="display mt-1 text-2xl text-navy">
                                    The Annual Blue Awards
                                  </h4>
                                  <p className="mt-2 text-sm text-navy/75 max-w-2xl leading-relaxed">
                                    {isJapanese
                                      ? "日本、APAC、欧州の卓越した海洋スタートアップを発掘・支援・表彰します。細胞培養水産、微細藻類、海洋バイオマテリアル、気候テック領域の創業者のご応募をお待ちしています。"
                                      : "Spotlighting and accelerating the most visionary ocean startups across Japan, APAC, and Europe. Open to founders solving cellular seafood, microalgae, biomaterials, and ocean climate-tech bottlenecks."}
                                  </p>

                                  <div className="mt-5 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                                    <div className="flex items-center gap-2 rounded-lg bg-clay-warm px-3 py-1.5 border border-navy/10 font-mono text-xs">
                                      <span className="font-semibold text-navy/60 font-sans">{tr.sendEmailTo}</span>
                                      <span className="font-bold text-navy">info@umitopartners.com</span>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-lg bg-clay-warm px-3 py-1.5 border border-navy/10 font-mono text-xs">
                                      <span className="font-semibold text-navy/60 font-sans">{tr.ccRecipient}</span>
                                      <span className="font-bold text-navy">invest@beyondimpact.vc</span>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        copyEmail(
                                          "To: info@umitopartners.com | CC: invest@beyondimpact.vc",
                                          "blue-awards-emails"
                                        )
                                      }
                                      className="inline-flex items-center gap-1 text-xs text-navy/60 hover:text-navy underline transition-colors"
                                    >
                                      {copiedId === "blue-awards-emails" ? (
                                        <>
                                          <Check className="h-3.5 w-3.5 text-earth" /> {tr.copiedTooltip}
                                        </>
                                      ) : (
                                        <>
                                          <Copy className="h-3.5 w-3.5" /> {tr.copyEmailBtn}
                                        </>
                                      )}
                                    </button>
                                  </div>
                                </div>

                                <a
                                  href="mailto:info@umitopartners.com?cc=invest@beyondimpact.vc&subject=Blue%20Frontier%20Finance%20-%20Apply%20for%20Blue%20Awards&body=Hello%20UMITO%20Partners%20%26%20Beyond%20Impact%20Teams%2C%0A%0AWe%20would%20like%20to%20apply%20for%20the%20Blue%20Awards.%0A%0ACompany%20Name%3A%20%0AHQ%20Location%3A%20%0ASector%20%2F%20Focus%3A%20%0AWebsite%20%2F%20Pitch%20Deck%20Link%3A%20%0A%0AThank%20you!"
                                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-heart px-7 py-3.5 text-sm font-semibold text-white shadow-heart hover:bg-heart-bright transition-all"
                                >
                                  <Mail className="h-4 w-4" />
                                  {tr.tabBlueAwards}
                                </a>
                              </div>
                            </motion.div>
                          )}

                          {activeTab === "study-sessions" && (
                            <motion.div
                              key="tab-study-sessions"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.25 }}
                              className="rounded-2xl border border-navy/15 bg-white p-6 sm:p-8 shadow-soft"
                            >
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue">
                                    <BookOpen className="h-3.5 w-3.5" />
                                    {isJapanese ? "エグゼクティブ勉強会シリーズ" : "Executive Knowledge Series"}
                                  </div>
                                  <h4 className="display mt-1 text-2xl text-navy">
                                    {isJapanese ? "投資家向け勉強会 ＆ ワークショップ" : "Investor Study Sessions & Workshops"}
                                  </h4>
                                  <p className="mt-2 text-sm text-navy/75 max-w-2xl leading-relaxed">
                                    {isJapanese
                                      ? "財団、ファミリーオフィス、事業会社CVC向けに設計されたラウンドテーブル＆勉強会。技術経済ベンチマーク、Horizon Europe連携、日本の水産養殖政策などを深く議論します。"
                                      : "Tailored roundtables and policy briefings for foundations, family offices, and corporate venture arms. Exploring techno-economic benchmarks, Horizon Europe synergy, and Japanese aquaculture policy."}
                                  </p>

                                  <div className="mt-5 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                                    <div className="flex items-center gap-2 rounded-lg bg-clay-warm px-3 py-1.5 border border-navy/10 font-mono text-xs">
                                      <span className="font-semibold text-navy/60 font-sans">{tr.sendEmailTo}</span>
                                      <span className="font-bold text-navy">invest@beyondimpact.vc</span>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-lg bg-clay-warm px-3 py-1.5 border border-navy/10 font-mono text-xs">
                                      <span className="font-semibold text-navy/60 font-sans">{tr.ccRecipient}</span>
                                      <span className="font-bold text-navy">info@umitopartners.com</span>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        copyEmail(
                                          "To: invest@beyondimpact.vc | CC: info@umitopartners.com",
                                          "study-sessions-emails"
                                        )
                                      }
                                      className="inline-flex items-center gap-1 text-xs text-navy/60 hover:text-navy underline transition-colors"
                                    >
                                      {copiedId === "study-sessions-emails" ? (
                                        <>
                                          <Check className="h-3.5 w-3.5 text-earth" /> {tr.copiedTooltip}
                                        </>
                                      ) : (
                                        <>
                                          <Copy className="h-3.5 w-3.5" /> {tr.copyEmailBtn}
                                        </>
                                      )}
                                    </button>
                                  </div>
                                </div>

                                <a
                                  href="mailto:invest@beyondimpact.vc?cc=info@umitopartners.com&subject=Blue%20Frontier%20Finance%20-%20Study%20Sessions%20Inquiry&body=Hello%20Beyond%20Impact%20%26%20UMITO%20Partners%20Teams%2C%0A%0AWe%20are%20interested%20in%20participating%20in%20your%20upcoming%20study%20sessions%20and%20investor%20workshops.%0A%0AOrganization%3A%20%0AInvestor%20Type%20(Foundation%20%2F%20Family%20Office%20%2F%20Corporate)%3A%20%0AAreas%20of%20Interest%3A%20%0A%0AThank%20you!"
                                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white shadow-blue hover:bg-blue/90 transition-all"
                                >
                                  <Mail className="h-4 w-4" />
                                  {isJapanese ? "勉強会について問い合わせる" : "Inquire for Study Sessions"}
                                </a>
                              </div>
                            </motion.div>
                          )}

                          {activeTab === "co-investment" && (
                            <motion.div
                              key="tab-co-investment"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.25 }}
                              className="rounded-2xl border border-navy/15 bg-white p-6 sm:p-8 shadow-soft"
                            >
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-earth">
                                    <Users className="h-3.5 w-3.5" />
                                    {isJapanese ? "直接ディール・シンジケーション" : "Direct Deal Syndication"}
                                  </div>
                                  <h4 className="display mt-1 text-2xl text-navy">
                                    {isJapanese ? "共同投資ディールルームへのアクセス" : "Co-Investment Deal Room Access"}
                                  </h4>
                                  <p className="mt-2 text-sm text-navy/75 max-w-2xl leading-relaxed">
                                    {isJapanese
                                      ? "機関投資家向け詳細メモ、バイオプロセスの実証データ、リード投資家との直接シンジケーション権利を提供します。投資後のガバナンスとポートフォリオ支援も完備。"
                                      : "Access institutional memos, comprehensive bioprocess validation, and direct syndication rights alongside our lead investments. Full post-deal governance and portfolio support included."}
                                  </p>

                                  <div className="mt-5 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                                    <div className="flex items-center gap-2 rounded-lg bg-clay-warm px-3 py-1.5 border border-navy/10 font-mono text-xs">
                                      <span className="font-semibold text-navy/60 font-sans">{tr.sendEmailTo}</span>
                                      <span className="font-bold text-navy">invest@beyondimpact.vc</span>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-lg bg-clay-warm px-3 py-1.5 border border-navy/10 font-mono text-xs">
                                      <span className="font-semibold text-navy/60 font-sans">{tr.ccRecipient}</span>
                                      <span className="font-bold text-navy">info@umitopartners.com</span>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        copyEmail(
                                          "To: invest@beyondimpact.vc | CC: info@umitopartners.com",
                                          "co-invest-emails"
                                        )
                                      }
                                      className="inline-flex items-center gap-1 text-xs text-navy/60 hover:text-navy underline transition-colors"
                                    >
                                      {copiedId === "co-invest-emails" ? (
                                        <>
                                          <Check className="h-3.5 w-3.5 text-earth" /> {tr.copiedTooltip}
                                        </>
                                      ) : (
                                        <>
                                          <Copy className="h-3.5 w-3.5" /> {tr.copyEmailBtn}
                                        </>
                                      )}
                                    </button>
                                  </div>
                                </div>

                                <a
                                  href="mailto:invest@beyondimpact.vc?cc=info@umitopartners.com&subject=Blue%20Frontier%20Finance%20-%20Co-Investment%20Deal%20Room%20Access&body=Hello%20Beyond%20Impact%20%26%20UMITO%20Partners%20Teams%2C%0A%0AWe%20are%20interested%20in%20accessing%20your%20co-investment%20deal%20room%20and%20receiving%20diligence%20memos.%0A%0AOrganization%3A%20%0AContact%20Person%3A%20%0AInvestor%20Classification%3A%20%0A%0AThank%20you!"
                                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-earth px-7 py-3.5 text-sm font-semibold text-white shadow-earth hover:bg-earth-dark transition-all"
                                >
                                  <Mail className="h-4 w-4" />
                                  {isJapanese ? "ディールルームを申請する" : "Request Deal Room Access"}
                                </a>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER CALLOUT BANNER */}
      <section className="bg-navy py-20 text-white">
        <div className="container-x flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-earth">
              {isJapanese ? "次なるステップ" : "Next Steps"}
            </span>
            <h3 className="display mt-2 text-3xl md:text-4xl">
              {isJapanese
                ? "Blue Frontier Finance と海洋の未来を創る。"
                : "Ready to scale the New Blue Economy with us?"}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-white/75 max-w-2xl leading-relaxed">
              {isJapanese
                ? "欧州の先端科学と日本の産業実行力を結集した共同投資・勉強会・投資ビークル連携へのお問い合わせをお待ちしています。"
                : "Whether participating in co-investments, hosting a study session, or structuring vehicles, our joint team is here to collaborate."}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:invest@beyondimpact.vc?cc=info@umitopartners.com&subject=Blue%20Frontier%20Finance%20Inquiry"
              className="inline-flex items-center gap-2 rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white shadow-blue hover:bg-blue/90 transition-all"
            >
              <span>{isJapanese ? "合同チームへ問い合わせる" : "Connect with Joint Team"}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurWork;
