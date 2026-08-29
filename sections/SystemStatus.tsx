"use client";

import { STATUS_ITEMS } from "@/data";

export default function SystemStatus() {
  return (
    <section
      id="status"
      style={{
        padding: "24px 0",
        backgroundColor: "var(--bg-subtle)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="scan-line" />
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexWrap: "wrap",
          gap: 32,
          alignItems: "center",
        }}
      >
        {STATUS_ITEMS.map((item, i) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              animation: `fadeIn 0.4s ease ${i * 0.1}s both`,
            }}
          >
            <span
              className="status-dot"
              style={{ backgroundColor: item.color }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.1em",
                color: "var(--text-dim)",
              }}
            >
              {item.label}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: item.color,
              }}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}