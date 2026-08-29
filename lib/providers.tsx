"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AppContextType {
  isDark: boolean;
  toggleTheme: () => void;
  language: string;
  setLanguage: (l: string) => void;
  cmdOpen: boolean;
  setCmdOpen: (v: boolean) => void;
  aiOpen: boolean;
  setAiOpen: (v: boolean) => void;
  devMode: boolean;
  toggleDevMode: () => void;
}

const AppContext = createContext<AppContextType>({} as AppContextType);

export function useApp() {
  return useContext(AppContext);
}

export default function AppProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState("EN");
  const [cmdOpen, setCmdOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [devMode, setDevMode] = useState(false);

  const toggleTheme = () => setIsDark((p) => !p);
  const toggleDevMode = () => setDevMode((p) => !p);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdOpen((p) => !p);
      }
      if (e.key === "Escape") {
        setCmdOpen(false);
        setAiOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isDark,
        toggleTheme,
        language,
        setLanguage,
        cmdOpen,
        setCmdOpen,
        aiOpen,
        setAiOpen,
        devMode,
        toggleDevMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}