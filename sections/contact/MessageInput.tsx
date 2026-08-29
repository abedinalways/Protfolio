"use client";

export default function MessageInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <div className="label-mono" style={{ marginBottom: 16 }}>02 / MESSAGE</div>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder="Tell me about your project..." style={{ width: "100%", minHeight: 140, backgroundColor: "var(--bg-panel)", border: "1px solid var(--border-strong)", borderRadius: 8, padding: 16, fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text)", resize: "vertical", marginBottom: 24, outline: "none" }} />
    </div>
  );
}