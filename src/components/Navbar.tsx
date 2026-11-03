import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import BrandLockup from "@/components/BrandLockup";

interface NavbarProps {
  variant?: "light" | "dark";
}

const Navbar = ({ variant = "light" }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const isDark = variant === "dark" && !scrolled;
  const textClass = isDark ? "text-clay" : "text-navy";
  const bgClass = scrolled
    ? "bg-clay/85 backdrop-blur-xl border-b border-navy/10 shadow-sm"
    : isDark
      ? "bg-transparent"
      : "bg-clay/40 backdrop-blur-md";

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

        <nav className="hidden items-center gap-1 lg:flex">
          {site.navLinks.map((l) => (
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
          <div className="ml-3 flex items-center gap-2">
            <a
              href={site.investors.href}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs xl:text-sm font-medium transition-all ${
                isDark
                  ? "border-clay/40 text-clay hover:bg-blue hover:border-blue hover:text-white"
                  : "border-blue/30 text-navy hover:bg-blue hover:border-blue hover:text-white"
              }`}
            >
              Invest with us
            </a>
            <a
              href="http://bit.ly/fundregenerative"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-heart px-4 py-2 text-xs xl:text-sm font-medium text-white transition-all hover:bg-heart-bright shadow-heart"
            >
              Submit your pitch
            </a>
          </div>
        </nav>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${textClass}`}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-navy/10 bg-clay shadow-lg">
          <div className="container-x flex flex-col gap-1 py-4">
            {site.navLinks.map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-3 text-base font-medium text-navy hover:bg-navy/5"
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-navy/10">
              <a
                href={site.investors.href}
                onClick={() => setOpen(false)}
                className="rounded-full border border-blue bg-blue px-5 py-3 text-center text-sm font-medium text-white transition-all hover:bg-blue/90"
              >
                Invest with us
              </a>
              <a
                href="http://bit.ly/fundregenerative"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="rounded-full bg-heart px-5 py-3 text-center text-sm font-medium text-white transition-all hover:bg-heart-bright shadow-heart"
              >
                Submit your pitch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
