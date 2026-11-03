import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { site } from "@/content/site";
import BrandLockup from "@/components/BrandLockup";
import { useLanguage } from "@/lib/LanguageContext";

interface NavbarProps {
  variant?: "light" | "dark";
}

const Navbar = ({ variant = "light" }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isDark = variant === "dark" && !scrolled;
  const textClass = isDark ? "text-clay" : "text-navy";
  const bgClass = scrolled
    ? "bg-clay/85 backdrop-blur-xl border-b border-navy/10 shadow-sm"
    : isDark
      ? "bg-transparent"
      : "bg-clay/40 backdrop-blur-md";

  const navLinks = [
    { label: t("About", "概要"), href: "/about" },
    { label: t("Our Work", "事業・協業"), href: "/our-work" },
    { label: t("Portfolio", "ポートフォリオ"), href: "/portfolio" },
    { label: t("Insights", "インサイト"), href: "/insights" },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${bgClass}`}>
      <div className="container-x flex min-h-20 sm:min-h-[5.25rem] py-2 items-center justify-between">
        <Link
          to="/"
          className="group py-1 inline-block"
          aria-label="Beyond Impact & UMITO Partners — Blue Frontier Finance"
        >
          <BrandLockup variant={isDark ? "dark" : "light"} size="sm" align="start" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm font-medium transition-colors ${textClass} ${
                  isActive ? "" : "opacity-70 hover:opacity-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-coral" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* Bilingual Language Switcher */}
          <div className="ml-2 mr-1 flex items-center">
            <div
              className={`flex items-center rounded-full p-1 border text-xs font-semibold tracking-wide transition-all ${
                isDark
                  ? "border-clay/30 bg-black/25 text-clay"
                  : "border-navy/20 bg-white/70 text-navy shadow-sm backdrop-blur-sm"
              }`}
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-2.5 py-1 transition-all ${
                  language === "en"
                    ? isDark
                      ? "bg-white text-navy font-bold shadow"
                      : "bg-blue text-white font-bold shadow"
                    : "opacity-70 hover:opacity-100 hover:text-blue"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("ja")}
                className={`rounded-full px-2.5 py-1 transition-all ${
                  language === "ja"
                    ? isDark
                      ? "bg-white text-navy font-bold shadow"
                      : "bg-blue text-white font-bold shadow"
                    : "opacity-70 hover:opacity-100 hover:text-blue"
                }`}
              >
                日本語
              </button>
            </div>
          </div>

          <div className="ml-2 flex items-center gap-2">
            <a
              href={site.investors.href}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs xl:text-sm font-medium transition-all ${
                isDark
                  ? "border-clay/40 text-clay hover:bg-blue hover:border-blue hover:text-white"
                  : "border-blue/30 text-navy hover:bg-blue hover:border-blue hover:text-white"
              }`}
            >
              {t("Invest with us", "投資・提携窓口")}
            </a>
            <a
              href="http://bit.ly/fundregenerative"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-heart px-4 py-2 text-xs xl:text-sm font-medium text-white transition-all hover:bg-heart-bright shadow-heart"
            >
              {t("Submit your pitch", "ピッチ送付")}
            </a>
          </div>
        </nav>

        {/* Mobile menu and mobile language switcher */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Language Switcher */}
          <div
            className={`flex items-center rounded-full p-0.5 border text-xs font-semibold ${
              isDark
                ? "border-clay/30 bg-black/25 text-clay"
                : "border-navy/20 bg-white/70 text-navy"
            }`}
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-2 py-0.5 text-[11px] ${
                language === "en"
                  ? isDark
                    ? "bg-white text-navy font-bold shadow-xs"
                    : "bg-blue text-white font-bold shadow-xs"
                  : "opacity-70"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("ja")}
              className={`rounded-full px-2 py-0.5 text-[11px] ${
                language === "ja"
                  ? isDark
                    ? "bg-white text-navy font-bold shadow-xs"
                    : "bg-blue text-white font-bold shadow-xs"
                  : "opacity-70"
              }`}
            >
              JA
            </button>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className={`p-1.5 ${textClass}`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-navy/10 bg-clay shadow-lg">
          <div className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-3 text-base font-medium text-navy hover:bg-navy/5 flex items-center justify-between"
              >
                <span>{l.label}</span>
              </NavLink>
            ))}

            {/* Language Switch in Drawer */}
            <div className="mt-2 flex items-center justify-between rounded-xl bg-white/60 p-3 border border-navy/10">
              <span className="text-xs font-semibold text-navy/70 flex items-center gap-1.5">
                <Globe className="h-4 w-4 text-blue" />
                {t("Language / 言語", "言語 / Language")}
              </span>
              <div className="flex items-center rounded-full bg-navy/5 p-1 border border-navy/15 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`rounded-full px-3 py-1 ${
                    language === "en" ? "bg-blue text-white shadow" : "text-navy/70"
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("ja")}
                  className={`rounded-full px-3 py-1 ${
                    language === "ja" ? "bg-blue text-white shadow" : "text-navy/70"
                  }`}
                >
                  日本語
                </button>
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-navy/10">
              <a
                href={site.investors.href}
                onClick={() => setOpen(false)}
                className="rounded-full border border-blue bg-blue px-5 py-3 text-center text-sm font-medium text-white transition-all hover:bg-blue/90"
              >
                {t("Invest with us", "投資・提携窓口")}
              </a>
              <a
                href="http://bit.ly/fundregenerative"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="rounded-full bg-heart px-5 py-3 text-center text-sm font-medium text-white transition-all hover:bg-heart-bright shadow-heart"
              >
                {t("Submit your pitch", "ピッチ送付")}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
