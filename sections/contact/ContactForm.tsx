"use client";

import { useState } from "react";
import StepIndicator from "./StepIndicator";
import TypeSelector from "./TypeSelector";
import MessageInput from "./MessageInput";

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [projectType, setProjectType] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleType = (type: string) => {
    setProjectType((prev) => prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 800, color: "var(--green)", marginBottom: 12 }}>◉ MESSAGE SENT.</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)" }}>Thanks for reaching out.</div>
      </div>
    );
  }

  return (
    <>
      <StepIndicator step={step} />
      {step === 0 && (
        <div>
          <TypeSelector selected={projectType} onToggle={toggleType} />
          <button className="btn-primary" onClick={() => setStep(1)} disabled={projectType.length === 0}>CONTINUE →</button>
        </div>
      )}
      {step === 1 && (
        <div>
          <MessageInput value={message} onChange={setMessage} />
          <div style={{ display: "flex", gap: 12 }}>
            <button className="btn-ghost" onClick={() => setStep(0)}>← BACK</button>
            <button className="btn-primary" onClick={() => setStep(2)} disabled={!message.trim()}>CONTINUE →</button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div>
          <div className="label-mono" style={{ marginBottom: 16 }}>03 / DETAILS</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)", lineHeight: 2, marginBottom: 24 }}>
            <div>Types: {projectType.join(", ")}</div>
            <div>Msg: {message.slice(0, 60)}...</div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button className="btn-ghost" onClick={() => setStep(1)}>← BACK</button>
            <button className="btn-primary" onClick={() => setSubmitted(true)}>SEND MESSAGE →</button>
          </div>
        </div>
      )}
    </>
  );
}