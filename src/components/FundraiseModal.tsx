import React, { useState } from "react";
import { X, Send, CheckCircle2, ShieldCheck, Mail } from "lucide-react";

interface FundraiseModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: "founder" | "investor" | "blue-frontier";
}

export default function FundraiseModal({ isOpen, onClose, defaultType = "founder" }: FundraiseModalProps) {
  const [inquiryType, setInquiryType] = useState<"founder" | "investor" | "blue-frontier">(defaultType);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setOrganization("");
    setMessage("");
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="fundraise-modal-title"
    >
      <div className="relative w-full max-w-lg my-8 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-[#FAF8F5]">
          <div>
            <h2 id="fundraise-modal-title" className="text-xl font-bold text-[#003F61]">
              Connect with Beyond Impact
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Article 9 SFDR Impact Fund Platform · Luxembourg SICAV-RAIF
            </p>
          </div>
          <button
            onClick={onClose}
            className="min-touch-target p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Thank you, {name}</h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Your inquiry has been received. Our investment team (led by Claire Smith and Sagar Tandon) reviews incoming biosolution ventures and LP registrations weekly.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#003F61] text-white font-semibold text-sm hover:bg-[#002B44] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Inquiry Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                I am reaching out as:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setInquiryType("founder")}
                  className={`min-touch-target px-3 py-2 text-xs font-semibold rounded-lg border transition-all text-center ${
                    inquiryType === "founder"
                      ? "border-[#003F61] bg-[#003F61] text-white shadow-sm"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  Founder / Venture
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType("investor")}
                  className={`min-touch-target px-3 py-2 text-xs font-semibold rounded-lg border transition-all text-center ${
                    inquiryType === "investor"
                      ? "border-[#003F61] bg-[#003F61] text-white shadow-sm"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  LP / Investor
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType("blue-frontier")}
                  className={`min-touch-target px-3 py-2 text-xs font-semibold rounded-lg border transition-all text-center ${
                    inquiryType === "blue-frontier"
                      ? "border-[#3328F0] bg-[#3328F0] text-white shadow-sm"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  Blue Frontier
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="inquiry-name" className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                id="inquiry-name"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-[#3328F0] focus:ring-1 focus:ring-[#3328F0] outline-none"
              />
            </div>

            <div>
              <label htmlFor="inquiry-email" className="block text-xs font-semibold text-slate-700 mb-1">
                Work Email *
              </label>
              <input
                id="inquiry-email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@company.com"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-[#3328F0] focus:ring-1 focus:ring-[#3328F0] outline-none"
              />
            </div>

            <div>
              <label htmlFor="inquiry-org" className="block text-xs font-semibold text-slate-700 mb-1">
                Company / Organization
              </label>
              <input
                id="inquiry-org"
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Biotech Innovator Inc."
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-[#3328F0] focus:ring-1 focus:ring-[#3328F0] outline-none"
              />
            </div>

            <div>
              <label htmlFor="inquiry-msg" className="block text-xs font-semibold text-slate-700 mb-1">
                Brief Overview / Deck Link
              </label>
              <textarea
                id="inquiry-msg"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your venture thesis, round details, or LP mandate..."
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-[#3328F0] focus:ring-1 focus:ring-[#3328F0] outline-none resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#5DB77A]" />
                <span>Strict confidentiality guaranteed</span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto min-touch-target px-6 py-2.5 rounded-lg bg-[#003F61] text-white text-sm font-semibold hover:bg-[#002B44] transition-colors flex items-center justify-center gap-2"
              >
                <span>Submit Details</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
