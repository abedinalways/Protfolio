"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROFILE, STATS, ABOUT_BULLETS } from "@/data/profile";
import { PencilIcon, MailIcon, FileIcon } from "./icons";
import { useParallax } from "@/hooks/useGsapReveal";

gsap.registerPlugin(ScrollTrigger);

const GREETING = "Hello 👋";

function useTyping(text: string) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let i = 0;
    const id = setInterval(() => {
      i = reduced ? text.length : i + 1;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, reduced ? 10 : 110);
    return () => clearInterval(id);
  }, [text]);
  return shown;
}

export default function ReadmeCard({ children }: { children?: React.ReactNode }) {
  const hello = useTyping(GREETING);
  const statsRef = useRef<HTMLDivElement>(null);
  const bannerRef = useParallax(0.3);

  /* Count-up animation for the stat cards when they scroll into view. */
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const numbers = gsap.utils.toArray<HTMLElement>("[data-count]", el);
      numbers.forEach((node) => {
        const target = Number(node.dataset.count ?? 0);
        const counter = { v: 0 };
        gsap.to(counter, {
          v: target,
          duration: 2.0,
          ease: "power2.out",
          scrollTrigger: { trigger: node, start: "top 90%", once: true },
          onUpdate: () => {
            node.textContent = Math.round(counter.v).toLocaleString("en-US");
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="readme" className="gh-box overflow-hidden" data-reveal data-reveal-type="scale">
      {/* file header */}
      <div className="gh-box-header border-b border-border bg-bg-raised">
        <span className="flex items-center gap-2 text-[14px] text-text-muted">
          <span className="font-semibold text-text">{PROFILE.username}</span>
          <span>/</span>
          <FileIcon size={16} />
          <span className="font-semibold text-text">README</span>
          <span className="font-semibold">.md</span>
        </span>
        <button className="gh-btn-icon magnetic-btn" aria-label="Edit README">
          <PencilIcon size={16} />
        </button>
      </div>

      {/* banner */}
      <div className="readme-banner px-6 py-10 text-center md:py-14" ref={bannerRef}>
        <h1
          className="relative z-10 text-[clamp(22px,5vw,42px)] font-extrabold uppercase tracking-[0.12em] text-white"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
        >
          Sheikh Minhajul Abedin
        </h1>
        <p className="relative z-10 mt-2 text-[clamp(11px,2vw,15px)] font-medium uppercase tracking-[0.35em] text-[#79c0ff]">
          Full-Stack Web Developer
        </p>
        <div className="relative z-10 mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-[#c9d1d9]">
          <a
            href={`mailto:${PROFILE.email}`}
            className="flex items-center gap-2 transition hover:text-white"
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full"
              style={{ background: "#1f6feb" }}
            >
              <MailIcon size={12} />
            </span>
            {PROFILE.email}
          </a>
          <a
            href={`tel:${PROFILE.phone.replace(/[^+\d]/g, "")}`}
            className="flex items-center gap-2 transition hover:text-white"
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold"
              style={{ background: "#238636" }}
            >
              ☎
            </span>
            {PROFILE.phone}
          </a>
        </div>
      </div>

      {/* body */}
      <div className="px-4 py-6 md:px-8 md:py-8" ref={statsRef}>
        {/* typing greeting + visitors */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="caret text-[clamp(24px,4vw,32px)] font-bold text-accent">
            {hello}
          </p>
          <span
            className="inline-flex overflow-hidden rounded-[3px] text-[11px] font-medium"
            aria-label={`visitors ${STATS.visitors}`}
          >
            <span className="bg-[#555] px-2 py-1 text-white">visitors</span>
            <span className="bg-[#1f6feb] px-2 py-1 text-white">
              {STATS.visitors}
            </span>
          </span>
        </div>

        <p className="mb-6 text-[clamp(18px,3vw,24px)] font-semibold text-text">
          💻 A passionate Full Stack Web Developer from Bangladesh
        </p>

        <hr className="border-border" />

        {/* About me */}
        <h2 className="mb-4 mt-6 text-[24px] font-semibold">🧑‍💼 About Me</h2>
        <ul className="mb-2 flex flex-col gap-2 text-[14px] leading-6 text-text">
          {ABOUT_BULLETS.map((b) => (
            <li key={b} className="flex gap-2" data-reveal>
              <span className="text-accent">•</span>
              <span>
                <strong className="font-semibold">{b.slice(0, b.indexOf(" ") + 1)}</strong>
                {b.slice(b.indexOf(" ") + 1)}
              </span>
            </li>
          ))}
        </ul>

        {children}
      </div>
    </section>
  );
}