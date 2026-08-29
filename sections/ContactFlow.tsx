"use client";

"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import ContactForm from "./contact/ContactForm";

const LANGUAGES = ["EN", "BN", "AR"];

function ContactInfo({ language, setLanguage }: { language: string; setLanguage: (l: string) => void }) {
  return (
    <div className="card" style={{ padding: 32 }}>
      <div className="label-mono" style={{ marginBottom: 16 }}>LANGUAGE</div>
      <div style={{ display: "flex", gap: 6, marginBottom: 32 }}>
        {LANGUAGES.map((lang) => (
          <button key={lang} onClick={() => setLanguage(lang)} style={{ fontFamily: "var(--font-mono)", fontSize: 11, padding: "6px 12px", borderRadius: 4, border: "1px solid var(--border-strong)", backgroundColor: language === lang ? "var(--accent-glow-s)" : "transparent", color: language === lang ? "var(--accent)" : "var(--text-muted)", cursor: "pointer" }}>{lang}</button>
        ))}
      </div>
      <div className="label-mono" style={{ marginBottom: 16 }}>EMAIL</div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--accent)", marginBottom: 24 }}>hello@minhaj.dev</div>
      <div className="label-mono" style={{ marginBottom: 16 }}>LOCATION</div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)" }}>Bangladesh (UTC+6)</div>
    </div>
  );
}

export default function ContactFlow() {
  const [ref, visible] = useScrollReveal();
  const [language, setLanguage] = useState("EN");

  return (
    <section id="contact" ref={ref} style={{ padding: "120px 0", backgroundColor: "var(--bg)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="label-mono" style={{ marginBottom: 48 }}>08 / CONTACT</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64 }}>
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease" }}>
            <ContactForm />
          </div>
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease 0.2s" }}>
            <ContactInfo language={language} setLanguage={setLanguage} />
          </div>
        </div>
      </div>
    </section>
  );
}