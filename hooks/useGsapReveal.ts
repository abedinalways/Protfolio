"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Enhanced reveal animation with multiple animation types
 * Reveals every `[data-reveal]` descendant with sophisticated animations
 */
export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(stagger = 0.08) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]", el);
      targets.forEach((target, i) => {
        const revealType = target.dataset.revealType || "fade-up";
        
        let fromProps: any = { autoAlpha: 0 };
        let toProps: any = { autoAlpha: 1, duration: 0.8, ease: "power3.out" };

        switch (revealType) {
          case "fade-up":
            fromProps.y = 40;
            toProps.y = 0;
            break;
          case "fade-down":
            fromProps.y = -40;
            toProps.y = 0;
            break;
          case "fade-left":
            fromProps.x = -40;
            toProps.x = 0;
            break;
          case "fade-right":
            fromProps.x = 40;
            toProps.x = 0;
            break;
          case "scale":
            fromProps.scale = 0.8;
            toProps.scale = 1;
            break;
          case "rotate":
            fromProps.rotation = -5;
            fromProps.scale = 0.9;
            toProps.rotation = 0;
            toProps.scale = 1;
            break;
          default:
            fromProps.y = 30;
            toProps.y = 0;
        }

        gsap.fromTo(target, fromProps, {
          ...toProps,
          delay: (i % 8) * stagger,
          scrollTrigger: {
            trigger: target,
            start: "top 90%",
            once: true,
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, [stagger]);

  return ref;
}

/**
 * Parallax effect for background elements
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(speed = 0.5) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: () => window.innerHeight * speed,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [speed]);

  return ref;
}

/**
 * Magnetic button effect - elements follow cursor slightly
 */
export function useMagnetic<T extends HTMLElement = HTMLDivElement>(strength = 0.3) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return ref;
}

/**
 * Floating animation for decorative elements
 */
export function useFloat<T extends HTMLElement = HTMLDivElement>(duration = 3) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: -15,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, el);

    return () => ctx.revert();
  }, [duration]);

  return ref;
}

/**
 * Text scramble effect for headings
 */
export function useTextScramble(text: string, trigger = true) {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    if (!trigger || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text, trigger]);

  return displayText;
}
