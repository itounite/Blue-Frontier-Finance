import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "ja";

interface LanguageContextType {
  language: Language;
  isJapanese: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (en: string, ja: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "bff_language";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // 1. Check local storage first
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "ja") {
        return stored;
      }
      // 2. Initial fast heuristic: browser timezone or language
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (tz === "Asia/Tokyo") return "ja";
        if (navigator.language && navigator.language.toLowerCase().startsWith("ja")) return "ja";
      } catch {
        // Fallback to en
      }
    }
    return "en";
  });

  // Location-dependent IP detection on initial mount (if user hasn't explicitly set preference)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return; // User made manual choice previously, don't override

    let cancelled = false;

    // Detect country by IP via high-availability HTTPS endpoints
    const detectCountry = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);
        
        // Fast country code lookup
        const res = await fetch("https://api.country.is", { signal: controller.signal });
        clearTimeout(timeoutId);
        
        if (res.ok) {
          const data = await res.json();
          if (!cancelled && data && data.country) {
            if (data.country === "JP") {
              setLanguageState("ja");
            } else {
              setLanguageState("en");
            }
            return;
          }
        }
      } catch {
        // If api.country.is is unreachable or blocked, try ipwho.is as fallback
        try {
          const fallbackRes = await fetch("https://ipwho.is/?fields=country_code", {
            signal: AbortSignal.timeout(2000),
          });
          if (fallbackRes.ok) {
            const data = await fallbackRes.json();
            if (!cancelled && data && data.country_code) {
              if (data.country_code === "JP") {
                setLanguageState("ja");
              } else {
                setLanguageState("en");
              }
            }
          }
        } catch {
          // Keep existing heuristic state
        }
      }
    };

    detectCountry();

    return () => {
      cancelled = true;
    };
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  };

  const toggleLanguage = () => {
    const next = language === "en" ? "ja" : "en";
    setLanguage(next);
  };

  const t = (en: string, ja: string) => (language === "ja" ? ja : en);

  return (
    <LanguageContext.Provider
      value={{
        language,
        isJapanese: language === "ja",
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
