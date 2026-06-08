"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxLayerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** translate factor; ~0.04-0.2. positive = drifts up as you scroll down */
  speed?: number;
}

/**
 * Translates a layer vertically based on its position in the viewport.
 * Driven by native scroll (Lenis updates native scroll), rAF-throttled.
 */
export function ParallaxLayer({ speed = 0.1, className, style, children, ...rest }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const center = rect.top + rect.height / 2;
      // -1 when far below, 0 centered, +1 when far above
      const progress = (center - vh / 2) / vh;
      const offset = -progress * speed * 220;
      el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)} style={style} {...rest}>
      {children}
    </div>
  );
}
