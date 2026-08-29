"use client";

import { useState } from "react";

const RINGS = [
  { r: 80, nodes: 3, dash: "4 6", dur: "18s", delay: "0s" },
  { r: 140, nodes: 4, dash: "3 8", dur: "24s", delay: "0.5s" },
  { r: 200, nodes: 5, dash: "2 10", dur: "30s", delay: "1s" },
];

export default function DeveloperCore() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 20;
    const y = (e.clientX - rect.left - rect.width / 2) / 20;
    setTilt({ x: -x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "100%",
        maxWidth: 360,
        aspectRatio: "1",
        margin: "0 auto",
        perspective: 900,
      }}
    >
      <svg
        viewBox="0 0 500 500"
        style={{
          width: "100%",
          height: "100%",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <defs>
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent-light)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.4" />
          </radialGradient>
          <filter id="coreBlur">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter id="nodeBlur">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Background glow */}
        <circle cx="250" cy="250" r="200" fill="url(#bgGlow)" />

        {/* Rings */}
        {RINGS.map((ring, ri) => (
          <g key={ri}>
            <circle
              cx="250"
              cy="250"
              r={ring.r}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1"
              strokeDasharray={ring.dash}
              strokeDashoffset="0"
              opacity="0.25"
              style={{
                animation: `dashFlow ${ring.dur} linear infinite`,
                animationDelay: ring.delay,
              }}
            />
            {/* Nodes on ring */}
            {Array.from({ length: ring.nodes }).map((_, ni) => {
              const angle = (ni / ring.nodes) * Math.PI * 2 - Math.PI / 2;
              const nx = 250 + ring.r * Math.cos(angle);
              const ny = 250 + ring.r * Math.sin(angle);
              return (
                <g key={ni}>
                  <line
                    x1="250"
                    y1="250"
                    x2={nx}
                    y2={ny}
                    stroke="var(--accent)"
                    strokeWidth="0.5"
                    opacity="0.1"
                  />
                  <circle
                    cx={nx}
                    cy={ny}
                    r="6"
                    fill="var(--accent)"
                    opacity="0.6"
                    filter="url(#nodeBlur)"
                  />
                  <circle cx={nx} cy={ny} r="3" fill="var(--accent-light)" />
                </g>
              );
            })}
          </g>
        ))}

        {/* Core */}
        <circle
          cx="250"
          cy="250"
          r="40"
          fill="url(#coreGrad)"
          filter="url(#coreBlur)"
          className="anim-core-pulse"
        />
        <circle cx="250" cy="250" r="20" fill="var(--accent)" opacity="0.9" />
        <circle
          cx="243"
          cy="243"
          r="8"
          fill="var(--accent-light)"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}