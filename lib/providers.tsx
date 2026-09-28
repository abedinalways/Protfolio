"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type ProfileTab =
  | "overview"
  | "repositories"
  | "projects"
  | "packages"
  | "stars";

interface AppContextType {
  isDark: boolean;
  toggleTheme: () => void;
  cmdOpen: boolean;
  setCmdOpen: (v: boolean) => void;
  tab: ProfileTab;
  setTab: (t: ProfileTab) => void;
}

const AppContext = createContext<AppContextType>({} as AppContextType);

export function useApp() {
  return useContext(AppContext);
}

export default function AppProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [tab, setTab] = useState<ProfileTab>("overview");

  const toggleTheme = () => setIsDark((p) => !p);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  /* ⌘K / Ctrl+K toggles the command palette; "/" opens it like GitHub;
     Escape closes everything. */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const typing =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((p) => !p);
      } else if (e.key === "/" && !typing && !cmdOpen) {
        e.preventDefault();
        setCmdOpen(true);
      } else if (e.key === "Escape") {
        setCmdOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [cmdOpen]);

  return (
    <AppContext.Provider
      value={{ isDark, toggleTheme, cmdOpen, setCmdOpen, tab, setTab }}
    >
      {children}
    </AppContext.Provider>
  );
}