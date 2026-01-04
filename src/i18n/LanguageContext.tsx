import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations, Translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  fontSize: "small" | "medium" | "large";
  setFontSize: (size: "small" | "medium" | "large") => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "kathamandir_preferences";

interface StoredPreferences {
  language: Language;
  fontSize: "small" | "medium" | "large";
}

const defaultPreferences: StoredPreferences = {
  language: "english",
  fontSize: "medium",
};

function getStoredPreferences(): StoredPreferences {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...defaultPreferences, ...JSON.parse(stored) };
    }
  } catch (e) {
    console.error("Error reading preferences:", e);
  }
  return defaultPreferences;
}

function storePreferences(prefs: StoredPreferences) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch (e) {
    console.error("Error storing preferences:", e);
  }
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => getStoredPreferences().language);
  const [fontSize, setFontSizeState] = useState<"small" | "medium" | "large">(() => getStoredPreferences().fontSize);

  useEffect(() => {
    storePreferences({ language, fontSize });

    // Apply font size to document
    const root = document.documentElement;
    const sizes = {
      small: "14px",
      medium: "16px",
      large: "18px",
    };
    root.style.fontSize = sizes[fontSize];
  }, [language, fontSize]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const setFontSize = (size: "small" | "medium" | "large") => {
    setFontSizeState(size);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    fontSize,
    setFontSize,
  };

  return (
    <LanguageContext.Provider value={value}>
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

export { type Language };
