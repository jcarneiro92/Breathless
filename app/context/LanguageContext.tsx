"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  translations,
  languages,
  type LanguageCode,
} from "../translations";

type LanguageContextType = {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  t: (typeof translations)[LanguageCode];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const STORAGE_KEY = "breathless-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
      if (stored && stored in translations) {
        setLanguageState(stored);
      }
    } catch {
      // localStorage not available (e.g. private browsing)
    }
    setMounted(true);
  }, []);

  const setLanguage = useCallback((code: LanguageCode) => {
    setLanguageState(code);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, code);
      document.documentElement.lang = code === "zh" ? "zh-CN" : code;
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language === "zh" ? "zh-CN" : language;
    }
  }, [language, mounted]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export { languages };
