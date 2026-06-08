"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** stagger delay in ms */
  delay?: number;
  /** intersection threshold (0-1) */
  threshold?: number;
}

export function Reveal({ delay = 0, threshold = 0.15, className, style, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("is-inview");
            io.unobserve(el);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const mergedStyle = { ...style, "--reveal-delay": `${delay}ms` } as React.CSSProperties;

  return (
    <div ref={ref} data-reveal className={cn(className)} style={mergedStyle} {...rest}>
      {children}
    </div>
  );
}
