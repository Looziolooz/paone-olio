"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

/**
 * Giant chapter title with an editorial masked reveal: each character
 * rises out of its own overflow-clipped mask when the hero scrolls in.
 * Static for no-JS and reduced-motion visitors.
 */
export function GiantTitle({ children, className }: { children: string; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const el = ref.current;
      if (!el) return;
      const split = SplitText.create(el, { type: "chars", mask: "chars", smartWrap: true });
      gsap.from(split.chars, {
        yPercent: 115,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.04,
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      });
    },
    { scope: ref },
  );

  return (
    <h2 ref={ref} className={className}>
      {children}
    </h2>
  );
}
