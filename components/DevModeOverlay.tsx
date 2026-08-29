"use client";

import { useState, useEffect } from "react";
import { useApp } from "@/lib/providers";

export default function DevModeOverlay() {
  const { devMode } = useApp();
  const [fps, setFps] = useState(60);

  useEffect(() => {
    if (!devMode) return;
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const loop = (now: number) => {
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [devMode]);

  if (!devMode) return null;

  return (
    <div style={{ position: "fixed", top: 80, left: 16, zIndex: 100, backgroundColor: "rgba(8, 8, 8, 0.9)", border: "1px solid var(--border-strong)", borderRadius: 8, padding: "12px 16px", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)", pointerEvents: "none" }}>
      <div style={{ color: "var(--accent)", marginBottom: 6 }}>◉ DEV MODE</div>
      <div>FPS: <span style={{ color: fps > 50 ? "var(--green)" : "var(--yellow)" }}>{fps}</span></div>
      <div>Theme: <span style={{ color: "var(--text)" }}>dark</span></div>
      <div>Lang: <span style={{ color: "var(--text)" }}>EN</span></div>
    </div>
  );
}