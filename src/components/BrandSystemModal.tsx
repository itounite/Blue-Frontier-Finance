import React from "react";
import { X, Check, ExternalLink, Sparkles, BookOpen, Layers } from "lucide-react";

interface BrandSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrandSystemModal({ isOpen, onClose }: BrandSystemModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="brand-modal-title"
    >
      <div 
        className="relative w-full max-w-3xl my-8 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-[#FAF8F5]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#003F61] text-white flex items-center justify-center">
              <Layers className="w-4 h-4 text-[#5DB77A]" />
            </div>
            <div>
              <h2 id="brand-modal-title" className="text-lg font-bold text-[#003F61]">
                Co-Design & Style Guide System
              </h2>
              <p className="text-xs text-slate-500">
                Synthesis of Beyond Impact and UMITO Partners Brand Guidelines
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="min-touch-target p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close style guide modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Partnership Foundation */}
          <div className="p-4 rounded-xl bg-[#003F61]/5 border border-[#003F61]/15">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#003F61]">
              <Sparkles className="w-3.5 h-3.5 text-[#3328F0]" />
              Strategic Alignment: Beyond Impact × UMITO Partners
            </div>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              This digital architecture unites <strong>Beyond Impact</strong> (Article 9 SFDR European venture platform) with <strong>UMITO Partners</strong> (Tokyo-based ocean sustainability consultancy). Together, they anchor the <em>Blue Frontier Fund</em>, bridging European deep-tech with Asian coastal and regenerative marine implementations.
            </p>
          </div>

          {/* Color Palettes Combined */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
              1. Synthesized Color Architecture
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Beyond Impact Colors */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="text-xs font-bold text-[#003F61] uppercase tracking-wider mb-2">
                  Beyond Impact (UK / Europe)
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md shadow-sm border border-black/10" style={{ backgroundColor: "#003F61" }}></span>
                      <span className="text-xs font-semibold text-slate-800">Sea Navy</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500">#003F61</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md shadow-sm border border-black/10" style={{ backgroundColor: "#5DB77A" }}></span>
                      <span className="text-xs font-semibold text-slate-800">Earth Green</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500">#5DB77A</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md shadow-sm border border-black/10" style={{ backgroundColor: "#F08372" }}></span>
                      <span className="text-xs font-semibold text-slate-800">Heart Coral</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500">#F08372</span>
                  </div>
                </div>
              </div>

              {/* UMITO Partners Colors */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="text-xs font-bold text-[#3328F0] uppercase tracking-wider mb-2">
                  UMITO Partners (Japan / APAC)
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md shadow-sm border border-black/10" style={{ backgroundColor: "#3328F0" }}></span>
                      <span className="text-xs font-semibold text-slate-800">Ocean Blue</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500">#3328F0</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md shadow-sm border border-black/10" style={{ backgroundColor: "#00CD69" }}></span>
                      <span className="text-xs font-semibold text-slate-800">Nature Green</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500">#00CD69</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md shadow-sm border border-black/10" style={{ backgroundColor: "#EBE6E1" }}></span>
                      <span className="text-xs font-semibold text-slate-800">Warm Sand (45%)</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500">#EBE6E1</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md shadow-sm border border-black/10" style={{ backgroundColor: "#E6005A" }}></span>
                      <span className="text-xs font-semibold text-slate-800">Vivid Accent</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500">#E6005A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Typography System */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
              2. Typographic Hierarchy
            </h3>
            <div className="p-4 rounded-xl border border-slate-200 bg-[#FAF8F5] space-y-3">
              <div className="border-b border-slate-200 pb-3">
                <div className="text-xs text-slate-500 font-mono">Display & Body: Manrope (Specified in UMITO & Modern Beyond)</div>
                <div className="text-2xl font-extrabold text-[#003F61] mt-1">
                  Capital for the transition economy.
                </div>
                <div className="text-sm text-slate-600 mt-1">
                  Geometric neo-grotesque sans-serif with open apertures and high x-height for effortless readability across mobile viewports.
                </div>
              </div>
              <div className="border-b border-slate-200 pb-3">
                <div className="text-xs text-slate-500 font-mono">Accent Editorial: Newsreader Italic</div>
                <div className="font-serif italic text-xl text-[#F08372] mt-1">
                  "ウミとヒトの関係を、ポジティブにつなぎ直す" — Reconnecting sea & humanity
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-mono">Data & Metrics: Tabular Numerals</div>
                <div className="font-mono tabular-nums text-lg font-bold text-[#003F61] mt-1">
                  $191M AUM · 23+ Portfolio Co. · Article 9 SFDR · B-Corp
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Accessibility Benchmarks */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
              3. Mobile Accessibility Principles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Touch Targets &ge; 44px
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  All navigation links, sector filters, drawer controls, and buttons meet Apple/WCAG tap size standards.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <Check className="w-4 h-4 text-emerald-600" />
                  WCAG AA Contrast
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Deep sea navy (#003F61) on sand canvas (#FAF8F5) delivers &gt; 9:1 contrast ratio, surpassing accessibility minimums.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Thumb Zone Navigation
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Sticky mobile bottom bar and quick drawer ensure essential routes and CTAs are reachable with one thumb.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>Source attachments: UMITO Branding Note (2026.08.15) & Beyond Brand StyleSheet</span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#003F61] text-white font-semibold hover:bg-[#002B44] transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
