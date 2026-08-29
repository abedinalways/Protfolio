"use client";

import { useState, useEffect, useRef } from "react";
import { METRICS } from "@/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(target: number, active: boolean, delay: number): number {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now() + delay;
    const duration = 1600;

    const tick = (now: number) => {
      const elapsed = now - start;
      if (elapsed < 0) {
        frameRef.current = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, active, delay]);

  return value;
}

function MetricCard({ metric, active, index }: { metric: typeof METRICS[number]; active: boolean; index: number }) {
  const value = useCountUp(metric.value, active, index * 150);

  return (
    <div style={{ textAlign: "center", padding: "32px 16px" }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.1, background: "linear-gradient(135deg, var(--text), var(--accent))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 8 }}>
        {value}{metric.suffix}
      </div>
      <div className="label-mono" style={{ fontSize: 10 }}>{metric.label.toUpperCase()}</div>
    </div>
  );
}

export default function Metrics() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="metrics" ref={ref} style={{ padding: "100px 0", backgroundColor: "var(--bg-subtle)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 0 }}>
          {METRICS.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} active={visible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}