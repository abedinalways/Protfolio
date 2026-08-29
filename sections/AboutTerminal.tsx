"use client";

import { useState, useEffect, useRef } from "react";
import { TERMINAL_LINES } from "@/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutTerminal() {
  const [ref, visible] = useScrollReveal(0.25);
  const [visibleLines, setVisibleLines] = useState(0);
  const [typing, setTyping] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible) return;
    let lineIdx = 0;
    let charIdx = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const typeNext = () => {
      if (lineIdx >= TERMINAL_LINES.length) {
        setTyping(false);
        return;
      }
      const line = TERMINAL_LINES[lineIdx];
      if (line.type === "blank") {
        setVisibleLines((v) => v + 1);
        lineIdx++;
        charIdx = 0;
        timeout = setTimeout(typeNext, 150);
        return;
      }
      const speed = line.type === "cmd" ? 55 : 22;
      if (charIdx === 0) {
        setVisibleLines((v) => v + 1);
        setCurrentText("");
        setTyping(true);
      }
      if (charIdx < line.text.length) {
        setCurrentText(line.text.slice(0, charIdx + 1));
        charIdx++;
        timeout = setTimeout(typeNext, speed);
      } else {
        lineIdx++;
        charIdx = 0;
        timeout = setTimeout(typeNext, line.type === "cmd" ? 550 : 300);
      }
    };

    timeout = setTimeout(typeNext, 400);
    return () => clearTimeout(timeout);
  }, [visible]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines, currentText]);

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "120px 0", backgroundColor: "var(--bg)" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <div className="label-mono" style={{ marginBottom: 32 }}>
            01 / ABOUT
          </div>

          <div className="terminal-window">
            <div className="terminal-titlebar">
              <span className="terminal-dot red" />
              <span className="terminal-dot yellow" />
              <span className="terminal-dot green" />
              <span>minhaj — bash</span>
            </div>

            <div
              ref={containerRef}
              style={{
                padding: 24,
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                lineHeight: 2,
                maxHeight: 320,
                overflowY: "auto",
              }}
            >
              {TERMINAL_LINES.map((line, i) => {
                if (i >= visibleLines) return null;
                const isCurrentLine = i === visibleLines - 1 && typing;
                if (line.type === "blank") return <div key={i} />;
                return (
                  <div
                    key={i}
                    style={{
                      color:
                        line.type === "cmd" ? "var(--accent)" : "var(--text-muted)",
                    }}
                  >
                    {line.type === "cmd" ? "$ " : ""}
                    {isCurrentLine ? currentText : line.text}
                    {isCurrentLine && (
                      <span className="anim-blink" style={{ color: "var(--accent)" }}>
                        ▋
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}