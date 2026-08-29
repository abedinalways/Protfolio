"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useApp } from "@/lib/providers";
import { scrollToId } from "@/lib/utils";

const COMMANDS = [
  { id: "home", label: "Go Home", action: () => scrollToId("hero") },
  { id: "work", label: "View Work", action: () => scrollToId("work") },
  { id: "lab", label: "Open Lab", action: () => scrollToId("lab") },
  { id: "about", label: "About Me", action: () => scrollToId("about") },
  { id: "contact", label: "Contact", action: () => scrollToId("contact") },
];

export default function CommandPalette() {
  const { cmdOpen, setCmdOpen } = useApp();
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const prevOpen = useRef(false);

  const filtered = useMemo(
    () => COMMANDS.filter((c) => c.label.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  useEffect(() => {
    if (cmdOpen && !prevOpen.current) {
      setQuery("");
      setActiveIdx(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
    prevOpen.current = cmdOpen;
  }, [cmdOpen]);

  useEffect(() => {
    if (!cmdOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") { e.preventDefault(); setActiveIdx((i) => Math.min(i + 1, filtered.length - 1)); }
      if (e.key === "ArrowUp") { e.preventDefault(); setActiveIdx((i) => Math.max(i - 1, 0)); }
      if (e.key === "Enter" && filtered[activeIdx]) { filtered[activeIdx].action(); setCmdOpen(false); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [cmdOpen, filtered, activeIdx, setCmdOpen]);

  if (!cmdOpen) return null;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "20vh", backgroundColor: "rgba(0, 0, 0, 0.7)", backdropFilter: "blur(8px)" }}>
      <div style={{ width: "100%", maxWidth: 520, backgroundColor: "var(--bg-panel)", border: "1px solid var(--border-strong)", borderRadius: 12, overflow: "hidden", boxShadow: "0 32px 64px rgba(0, 0, 0, 0.5)" }}>
        <input ref={inputRef} value={query} onChange={(e) => { setQuery(e.target.value); setActiveIdx(0); }} placeholder="Type a command..." style={{ width: "100%", padding: "16px 20px", backgroundColor: "transparent", border: "none", borderBottom: "1px solid var(--border)", fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--text)", outline: "none" }} />
        <div style={{ maxHeight: 320, overflowY: "auto" }}>
          {filtered.length === 0 ? (
            <div style={{ padding: "24px 20px", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-dim)", textAlign: "center" }}>No commands found</div>
          ) : (
            filtered.map((cmd, i) => (
              <button key={cmd.id} onClick={() => { cmd.action(); setCmdOpen(false); }} style={{ width: "100%", padding: "14px 20px", display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", borderLeft: i === activeIdx ? "2px solid var(--accent)" : "2px solid transparent", backgroundColor: i === activeIdx ? "var(--accent-glow-s)" : "transparent", cursor: "pointer", textAlign: "left", transition: "all 0.15s ease" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: i === activeIdx ? "var(--accent)" : "var(--text-muted)" }}>{cmd.label}</span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}