"use client";

import { useMemo } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import DeveloperCore from "@/components/DeveloperCore";
import { scrollToId } from "@/lib/utils";

const META_ITEMS = [
  { label: "LOCATION", value: "Bangladesh" },
  { label: "STATUS", value: "Available" },
  { label: "FOCUS", value: "Frontend" },
];

function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        opacity: 0.1 + Math.random() * 0.3,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        dur: `${4 + Math.random() * 4}s`,
        delay: `${Math.random() * 3}s`,
      })),
    []
  );

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="anim-float"
          style={{
            position: "absolute",
            width: 2,
            height: 2,
            borderRadius: "50%",
            backgroundColor: "var(--accent)",
            opacity: p.opacity,
            top: p.top,
            left: p.left,
            animationDuration: p.dur,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [ref, visible] = useScrollReveal();

  const reveal = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `all 0.6s ease ${delay}s`,
  });

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 72,
      }}
    >
      <ParticleField />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 70% 50%, var(--accent-glow-s) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ ...reveal(0), fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", color: "var(--accent)", marginBottom: 24 }}>
              ◉ FRONTEND DEVELOPER
            </div>

            <h1 style={{ ...reveal(0.1), fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 1.1, color: "var(--text)", marginBottom: 24 }}>
              BUILDING<br />DIGITAL<br /><span style={{ color: "var(--accent)" }}>EXPERIENCES.</span>
            </h1>

            <p style={{ ...reveal(0.2), fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 480, marginBottom: 40 }}>
              I craft modern, performant web applications with React, Next.js, and TypeScript — turning complex problems into elegant interfaces.
            </p>

            <div style={{ ...reveal(0.35), display: "flex", gap: 16, marginBottom: 56 }}>
              <button className="btn-primary" onClick={() => scrollToId("work")}>VIEW WORK →</button>
              <button className="btn-ghost" onClick={() => scrollToId("contact")}>GET IN TOUCH</button>
            </div>

            <div style={{ ...reveal(0.5), display: "flex", gap: 32 }}>
              {META_ITEMS.map((item) => (
                <div key={item.label}>
                  <div className="label-mono" style={{ marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text)" }}>
                    <span className="status-dot" style={{ marginRight: 6 }} />
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ ...reveal(0.3), transitionDuration: "0.8s" }}>
            <DeveloperCore />
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <span className="label-mono" style={{ fontSize: 9 }}>SCROLL</span>
        <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, var(--accent), transparent)" }} />
      </div>
    </section>
  );
}