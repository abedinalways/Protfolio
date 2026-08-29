export default function StepIndicator({ step }: { step: number }) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 32 }}>
      {[0, 1, 2].map((s) => (
        <div key={s} style={{ flex: 1, height: 2, borderRadius: 1, backgroundColor: s <= step ? "var(--accent)" : "var(--border)", transition: "background-color 0.3s ease" }} />
      ))}
    </div>
  );
}