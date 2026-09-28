"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PROFILE, ACHIEVEMENTS } from "@/data/profile";
import { scrollToId } from "@/lib/scroll";
import { useMagnetic, useFloat } from "@/hooks/useGsapReveal";
import {
  OrganizationIcon,
  LocationIcon,
  MailIcon,
  ClockIcon,
  LinkIcon,
  DownloadIcon,
} from "./icons";

function useDhakaTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Dhaka",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const DETAIL_ROWS = [
  {
    icon: <OrganizationIcon size={16} />,
    content: (
      <>
        <span className="font-semibold">{PROFILE.company}</span>
        <span className="text-text-muted"> · Jr. Frontend Engineer</span>
      </>
    ),
  },
  { icon: <LocationIcon size={16} />, content: PROFILE.location },
  {
    icon: <MailIcon size={16} />,
    content: (
      <a href={`mailto:${PROFILE.email}`} className="link-muted">
        {PROFILE.email}
      </a>
    ),
  },
  {
    icon: <LinkIcon size={16} />,
    content: (
      <a
        href={PROFILE.website}
        target="_blank"
        rel="noreferrer"
        className="link-muted"
      >
        {PROFILE.website.replace("https://", "")}
      </a>
    ),
  },
  {
    icon: <span className="text-[14px] font-bold text-text-muted">in</span>,
    content: (
      <a
        href={PROFILE.linkedin}
        target="_blank"
        rel="noreferrer"
        className="link-muted"
      >
        sheikh-minhajul-abedin
      </a>
    ),
  },
  {
    icon: <span className="text-[14px] font-bold text-text-muted">f</span>,
    content: (
      <a
        href={PROFILE.facebook}
        target="_blank"
        rel="noreferrer"
        className="link-muted"
      >
        Abedin.always
      </a>
    ),
  },
];

export default function ProfileSidebar() {
  const time = useDhakaTime();
  const avatarRef = useMagnetic(0.15);
  const floatRef = useFloat(4);
  const editBtnRef = useMagnetic<HTMLButtonElement>(0.2);

  return (
    <aside className="text-center md:text-left" data-reveal data-reveal-type="fade-left">
      {/* avatar */}
      <div className="relative mx-auto w-fit md:mx-0" ref={avatarRef}>
        <Image
          src={PROFILE.avatar}
          alt={PROFILE.fullName}
          width={296}
          height={296}
          priority
          className="mx-auto w-full max-w-[200px] rounded-full border-2 border-border transition-all duration-300 hover:border-accent sm:max-w-[260px] md:max-w-none"
        />
        <span
          className="absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-full border-4 glow-effect"
          style={{
            background: "var(--green)",
            borderColor: "var(--bg)",
          }}
          title="Available for work"
          ref={floatRef}
        >
          <span className="status-dot" style={{ background: "#0d1117" }} />
        </span>
      </div>

      {/* name / username / bio */}
      <div className="mt-5 space-y-1">
        <h1 className="text-[20px] font-semibold leading-tight tracking-tight text-text sm:text-[24px]">
          {PROFILE.fullName}
        </h1>
        <p className="text-[18px] font-semibold text-text sm:text-[20px]">{PROFILE.username}</p>
        <p className="pt-1 text-[13px] leading-5 text-text-muted sm:text-[14px]">
          {PROFILE.title} @ {PROFILE.company}
          <br />
          Crafting scalable web apps with React, Next.js &amp; TypeScript.
        </p>
      </div>

      {/* actions */}
      <div className="mt-4 flex gap-2">
        <button
          className="gh-btn gh-btn-block magnetic-btn"
          onClick={() => scrollToId("readme")}
          ref={editBtnRef}
        >
          Edit profile
        </button>
        <a
          href={PROFILE.resume}
          className="gh-btn tip px-3 magnetic-btn"
          data-tip="Download résumé"
          aria-label="Download résumé"
        >
          <DownloadIcon size={16} />
        </a>
      </div>

      {/* followers */}
      <p className="mt-4 text-[13px] text-text sm:text-[14px]">
        <span className="font-semibold">{PROFILE.followers}</span>
        <span className="text-text-muted"> followers · </span>
        <span className="font-semibold">{PROFILE.following}</span>
        <span className="text-text-muted"> following</span>
      </p>

      {/* details */}
      <div className="mt-4 flex flex-col gap-2 text-[14px]">
        {time && (
          <div className="detail-row">
            <ClockIcon size={16} />
            <span>
              {time} <span className="text-text-muted">(UTC +06:00)</span>
            </span>
          </div>
        )}
        {DETAIL_ROWS.map((row, i) => (
          <div className="detail-row" key={i}>
            {row.icon}
            <span className="min-w-0 break-words">{row.content}</span>
          </div>
        ))}
        <div className="detail-row">
          <DownloadIcon size={16} />
          <a href={PROFILE.resume} target="_blank" rel="noreferrer" className="link-muted">
            résumé.pdf
          </a>
        </div>
      </div>

      {/* achievements */}
      <div className="mt-6 border-t border-border pt-4">
        <div className="mb-3 flex items-center gap-2">
          <h2 className="text-[16px] font-semibold">Achievements</h2>
          <span className="gh-counter">x{PROFILE.achievements}</span>
        </div>
        <div className="flex justify-center gap-3 md:justify-start">
          {ACHIEVEMENTS.map((a, i) => (
            <span
              key={a.title}
              className="achievement tip float-animation"
              data-tip={a.title}
              role="img"
              aria-label={a.title}
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {a.emoji}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}