"use client";

import { useState, useEffect } from "react";
import { useApp } from "@/lib/providers";
import { scrollToId } from "@/lib/utils";

const NAV_LINKS = [
  { id: "hero", label: "HOME" },
  { id: "work", label: "WORK" },
  { id: "lab", label: "LAB" },
  { id: "about", label: "ABOUT" },
  { id: "contact", label: "CONTACT" },
];

const LANGS = ["EN", "BN", "AR"];

export default function Navbar() {
  const { isDark, toggleTheme, language, setLanguage, cmdOpen, setCmdOpen, aiOpen, setAiOpen } = useApp();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: scrolled ? 56 : 72,
        backgroundColor: scrolled ? "rgba(8, 8, 8, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollToId("hero")}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 18,
            fontWeight: 800,
            color: "var(--text)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          M<span style={{ color: "var(--accent)" }}>/</span>
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToId(link.id)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Cmd Button */}
          <button
            onClick={() => setCmdOpen(!cmdOpen)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.05em",
              padding: "6px 12px",
              borderRadius: 6,
              border: "1px solid var(--border-strong)",
              backgroundColor: cmdOpen ? "var(--accent-glow-s)" : "transparent",
              color: cmdOpen ? "var(--accent)" : "var(--text-muted)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            ⌘K
          </button>

          {/* AI Button */}
          <button
            onClick={() => setAiOpen(!aiOpen)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.05em",
              padding: "6px 12px",
              borderRadius: 6,
              border: "1px solid var(--border-strong)",
              backgroundColor: aiOpen ? "var(--accent-glow-s)" : "transparent",
              color: aiOpen ? "var(--accent)" : "var(--text-muted)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            ◉ AI
          </button>

          {/* Language Selector */}
          <div className="hidden sm:flex items-center gap-1">
            {LANGS.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  padding: "4px 8px",
                  borderRadius: 4,
                  border: "none",
                  backgroundColor: language === lang ? "var(--accent-glow-s)" : "transparent",
                  color: language === lang ? "var(--accent)" : "var(--text-dim)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              width: 32,
              height: 32,
              borderRadius: 6,
              border: "1px solid var(--border-strong)",
              backgroundColor: "transparent",
              color: "var(--text-muted)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              transition: "all 0.2s ease",
            }}
          >
            {isDark ? "☀" : "☾"}
          </button>
        </div>
      </div>
    </nav>
  );
}