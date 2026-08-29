"use client";

import { scrollToId } from "@/lib/utils";

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "work", label: "Work" },
  { id: "lab", label: "Lab" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-subtle)",
        borderTop: "1px solid var(--border)",
        padding: "80px 0 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Top Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 48,
            marginBottom: 64,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                fontWeight: 800,
                color: "var(--text)",
                marginBottom: 12,
              }}
            >
              M<span style={{ color: "var(--accent)" }}>/</span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--text-muted)",
                lineHeight: 1.8,
              }}
            >
              Building digital experiences
              <br />
              with modern web technologies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="label-mono" style={{ marginBottom: 16 }}>
              NAVIGATION
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToId(link.id)}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--text-muted)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: 0,
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div className="label-mono" style={{ marginBottom: 16 }}>
              CONNECT
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--text-dim)",
                marginTop: 16,
              }}
            >
              hello@minhaj.dev
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--text-dim)",
            }}
          >
            © {new Date().getFullYear()} Minhaj. Built with curiosity.
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--text-dim)",
            }}
          >
            React · Next.js · TypeScript
          </span>
        </div>
      </div>
    </footer>
  );
}