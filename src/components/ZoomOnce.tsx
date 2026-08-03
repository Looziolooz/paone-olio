"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * One-shot slow zoom: when the element scrolls into view the inner image
 * eases from scale(1) to a gentle close-up over ~9s, then rests there.
 * No loop — the observer disconnects after firing once.
 */
export function ZoomOnce({ className, children, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("zoom-live");
            io.disconnect();
          }
        }
      },
      // fire only when the element reaches the middle band of the viewport,
      // i.e. the visitor has actually scrolled into the chapter
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-zoom className={cn("overflow-hidden", className)} {...rest}>
      {children}
    </div>
  );
}
