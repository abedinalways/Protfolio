"use client";

import { useState, useEffect, useRef } from "react";
import { useApp } from "@/lib/providers";

interface Message {
  role: "user" | "ai";
  text: string;
}

const RESPONSES: Record<string, string> = {
  skills: "I specialize in React, Next.js, TypeScript, and modern CSS. I also work with Node.js, GraphQL, and databases like PostgreSQL.",
  projects: "Check out the Work section! I have built e-commerce platforms, AI dashboards, and design systems.",
  contact: "You can reach me at hello@minhaj.dev or use the contact form on this page.",
  experience: "I have 5+ years of experience building modern web applications with React and Next.js.",
  hello: "Hey! I'm Minhaj, a frontend developer. Ask me anything about my work or skills!",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, value] of Object.entries(RESPONSES)) {
    if (lower.includes(key)) return value;
  }
  return "Thanks for your message! I specialize in React, Next.js, and TypeScript. Feel free to ask about my skills, projects, or experience.";
}

function ChatPanel({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([{ role: "ai", text: "Hi! I'm Minhaj's AI assistant. Ask me anything about skills, projects, or experience." }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { role: "ai", text: getResponse(text) }]);
    }, 900 + Math.random() * 600);
  };

  return (
    <div style={{ position: "fixed", bottom: 80, right: 24, zIndex: 150, width: 360, maxWidth: "calc(100vw - 48px)", backgroundColor: "var(--bg-panel)", border: "1px solid var(--border-strong)", borderRadius: 12, boxShadow: "0 32px 64px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "column", maxHeight: "70vh" }}>
      <div style={{ padding: "14px 18px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text)", display: "flex", alignItems: "center", gap: 8 }}>
          <span className="status-dot" style={{ backgroundColor: "var(--green)" }} />
          ASK MY AI
        </div>
        <button onClick={onClose} style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: 16 }}>×</button>
      </div>

      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "16px 18px", display: "flex", flexDirection: "column", gap: 12 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ alignSelf: msg.role === "user" ? "flex-end" : "flex-start", maxWidth: "85%", padding: "10px 14px", borderRadius: 10, backgroundColor: msg.role === "user" ? "var(--accent)" : "var(--bg-subtle)", color: msg.role === "user" ? "#fff" : "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 1.6 }}>
            {msg.text}
          </div>
        ))}
        {typing && (
          <div style={{ alignSelf: "flex-start", padding: "10px 14px", borderRadius: 10, backgroundColor: "var(--bg-subtle)", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--accent)" }}>
            typing<span className="anim-blink">▋</span>
          </div>
        )}
      </div>

      <div style={{ padding: "12px 18px", borderTop: "1px solid var(--border)" }}>
        <div style={{ display: "flex", gap: 8 }}>
          <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") sendMessage(input); }} placeholder="Ask something..." style={{ flex: 1, padding: "8px 12px", backgroundColor: "var(--bg-subtle)", border: "1px solid var(--border)", borderRadius: 6, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text)", outline: "none" }} />
          <button onClick={() => sendMessage(input)} style={{ padding: "8px 14px", backgroundColor: "var(--accent)", color: "#fff", border: "none", borderRadius: 6, fontFamily: "var(--font-mono)", fontSize: 11, cursor: "pointer" }}>SEND</button>
        </div>
      </div>
    </div>
  );
}

export default function AIChat() {
  const { aiOpen, setAiOpen } = useApp();

  return (
    <>
      {aiOpen && <ChatPanel onClose={() => setAiOpen(false)} />}
      <button onClick={() => setAiOpen(!aiOpen)} style={{ position: "fixed", bottom: 24, right: 24, zIndex: 140, padding: "12px 20px", backgroundColor: "var(--accent)", color: "#fff", border: "none", borderRadius: 8, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.05em", cursor: "pointer", boxShadow: `0 8px 32px var(--accent-glow)`, transition: "all 0.2s ease" }}>
        ◉ ASK MY AI
      </button>
    </>
  );
}