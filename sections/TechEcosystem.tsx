"use client";

import { useState } from "react";
import { TECH_NODES, TECH_EDGES, TECH_INFO } from "@/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CX = 350;
const CY = 260;

function TechNetwork({ hovered, setHovered }: { hovered: string | null; setHovered: (v: string | null) => void }) {
  const nodeMap = Object.fromEntries(TECH_NODES.map((n) => [n.id, n]));

  return (
    <svg viewBox="0 0 700 520" style={{ width: "100%", height: "auto" }}>
      <defs>
        <radialGradient id="techGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={CX} cy={CY} r="200" fill="url(#techGlow)" />
      {[100, 170, 240].map((r, i) => (
        <circle key={i} cx={CX} cy={CY} r={r} fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 8" opacity="0.15" style={{ animation: `dashFlow ${12 + i * 1.2}s linear infinite` }} />
      ))}
      {TECH_EDGES.map(([a, b], i) => {
        const na = nodeMap[a]; const nb = nodeMap[b];
        if (!na || !nb) return null;
        return <line key={`e${i}`} x1={na.x} y1={na.y} x2={nb.x} y2={nb.y} stroke="var(--accent)" strokeWidth="1" opacity="0.15" />;
      })}
      {TECH_NODES.map((node) => (
        <line key={`c${node.id}`} x1={CX} y1={CY} x2={node.x} y2={node.y} stroke="var(--accent)" strokeWidth="0.5" opacity="0.08" />
      ))}
      <circle cx={CX} cy={CY} r="36" fill="var(--accent)" opacity="0.15" className="anim-core-pulse" />
      <circle cx={CX} cy={CY} r="18" fill="var(--accent)" opacity="0.7" />
      {TECH_NODES.map((node) => {
        const isHovered = hovered === node.id;
        return (
          <g key={node.id} onMouseEnter={() => setHovered(node.id)} onMouseLeave={() => setHovered(null)} style={{ cursor: "pointer" }}>
            <circle cx={node.x} cy={node.y} r={isHovered ? 22 : 18} fill={isHovered ? "var(--accent)" : "var(--bg-panel)"} stroke="var(--accent)" strokeWidth="1.5" opacity={isHovered ? 0.9 : 0.5} style={{ transition: "all 0.2s ease" }} />
            <text x={node.x} y={node.y + 35} textAnchor="middle" fill={isHovered ? "var(--accent)" : "var(--text-muted)"} fontFamily="var(--font-mono)" fontSize="11" style={{ transition: "fill 0.2s ease" }}>{node.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

function InfoPanel({ hovered }: { hovered: string | null }) {
  const nodeMap = Object.fromEntries(TECH_NODES.map((n) => [n.id, n]));
  return (
    <div className="card" style={{ padding: 32 }}>
      {hovered && TECH_INFO[hovered] ? (
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 12 }}>{nodeMap[hovered]?.label}</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 20 }}>{TECH_INFO[hovered].desc}</div>
          <div className="label-mono" style={{ marginBottom: 8 }}>USES</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {TECH_INFO[hovered].uses.map((u) => (
              <span key={u} style={{ fontFamily: "var(--font-mono)", fontSize: 11, padding: "4px 10px", borderRadius: 4, border: "1px solid var(--border-strong)", color: "var(--text-muted)" }}>{u}</span>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-dim)", textAlign: "center", padding: "40px 0" }}>Hover over a node to inspect</div>
      )}
    </div>
  );
}

export default function TechEcosystem() {
  const [ref, visible] = useScrollReveal();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="tech" ref={ref} style={{ padding: "120px 0", backgroundColor: "var(--bg-subtle)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="label-mono" style={{ marginBottom: 32 }}>02 / TECH ECOSYSTEM</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "center" }}>
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease 0.2s" }}>
            <TechNetwork hovered={hovered} setHovered={setHovered} />
          </div>
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease 0.4s" }}>
            <InfoPanel hovered={hovered} />
          </div>
        </div>
      </div>
    </section>
  );
}