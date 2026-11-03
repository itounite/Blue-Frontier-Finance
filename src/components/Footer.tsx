import { Link } from "react-router-dom";
import { site } from "@/content/site";
import BrandLockup from "@/components/BrandLockup";
import { ArrowUpRight, Twitter, Facebook, Linkedin } from "lucide-react";

const socialIcon = (label: string) => {
  if (label === "Twitter") return Twitter;
  if (label === "Facebook") return Facebook;
  return Linkedin;
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#1A1F9E] via-[#12166E] to-[#0A0D46] text-white">
      {/* Subtle organic light reflections matching the partnership section */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute top-10 left-1/4 h-[500px] w-[500px] rounded-full bg-earth/30 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-[500px] w-[500px] rounded-full bg-heart/30 blur-3xl" />
      </div>

      <div className="container-x relative py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand lockup & emails */}
          <div className="md:col-span-6">
            <Link
              to="/"
              className="inline-block group"
              aria-label="Beyond Impact & UMITO Partners — Blue Frontier Finance"
            >
              <BrandLockup variant="dark" size="md" align="start" />
            </Link>

            <p className="mt-6 max-w-md text-sm sm:text-base text-white/85 leading-relaxed">
              {site.tagline}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <a
                href={`mailto:${site.contactEmail}`}
                className="inline-flex items-center gap-1.5 font-display text-lg sm:text-xl font-bold tracking-tight text-white hover:text-earth transition-colors"
              >
                {site.contactEmail}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <span className="hidden sm:inline-block h-4 w-px bg-white/20" />
              <a
                href={`mailto:${site.secondaryEmail}`}
                className="inline-flex items-center gap-1.5 font-display text-lg sm:text-xl font-bold tracking-tight text-white hover:text-earth transition-colors"
              >
                {site.secondaryEmail}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation Sitemap */}
          <div className="md:col-span-3 md:col-start-8">
            <div className="eyebrow text-white/70">Navigation</div>
            <ul className="mt-6 space-y-3">
              {site.navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-white/90 hover:text-earth transition-colors font-medium text-sm sm:text-base"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2">
            <div className="eyebrow text-white/70">Connect</div>
            <ul className="mt-6 flex flex-wrap gap-3">
              {site.social.map((s) => {
                const Icon = socialIcon(s.label);
                return (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-all hover:border-white hover:bg-white/15"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Call to founders / partners */}
        <div className="mt-16 grid gap-6 border-t border-white/15 pt-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <div className="eyebrow text-white/80 font-bold">For Ocean Founders & Partners</div>
            <p className="mt-2 text-sm sm:text-base text-white/85 leading-relaxed">
              {site.funding.intro}
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href={site.funding.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-heart px-6 py-3 text-sm font-semibold text-white shadow-heart transition-all hover:bg-heart-bright"
            >
              {site.funding.display}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-8 text-xs text-white/70 md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} Blue Frontier Finance — A strategic collaboration between Beyond Impact & UMITO Partners. All rights reserved.
          </div>
          <div>Tokyo · London · Geneva · Stockholm</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
