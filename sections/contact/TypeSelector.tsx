"use client";

const PROJECT_TYPES = ["Website", "Web App", "Frontend Dev", "Full Stack", "Experimental"];

export default function TypeSelector({ selected, onToggle }: { selected: string[]; onToggle: (t: string) => void }) {
  return (
    <div>
      <div className="label-mono" style={{ marginBottom: 16 }}>01 / PROJECT TYPE</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
        {PROJECT_TYPES.map((type) => (
          <button key={type} onClick={() => onToggle(type)} style={{ fontFamily: "var(--font-mono)", fontSize: 11, padding: "8px 16px", borderRadius: 6, border: "1px solid var(--border-strong)", backgroundColor: selected.includes(type) ? "var(--accent-glow-s)" : "transparent", color: selected.includes(type) ? "var(--accent)" : "var(--text-muted)", cursor: "pointer", transition: "all 0.2s ease" }}>{type}</button>
        ))}
      </div>
    </div>
  );
}