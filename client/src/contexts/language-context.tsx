import { createContext, useContext, useEffect, useState } from "react";
import { Language, translations, Translations } from "@/lib/translations";
import { trackEvent } from "@/lib/analytics";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      // Check localStorage first
      const stored = localStorage.getItem("language") as Language;
      if (stored && Object.keys(translations).includes(stored)) {
        return stored;
      }
      
      // Try to detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('az')) return 'az';
      if (browserLang.startsWith('tr')) return 'tr';
      
      // Default to Azerbaijani
      return 'az';
    }
    return 'az';
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    // Track language change event
    trackEvent('language_change', 'ui', `${language}_to_${lang}`);
    setLanguageState(lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}