"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { millingSteps } from "@/data/chapters";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * The three extraction steps enter in sequence along a dashed process line
 * that draws itself across; the machines then keep a slow breathing float.
 * GSAP-driven, scroll-triggered once; static for no-JS / reduced motion.
 */
export function MillingGallery() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const float = gsap.to("[data-mill-image]", {
        y: -5,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.5, yoyo: true },
        paused: true,
      });

      gsap
        .timeline({
          scrollTrigger: { trigger: ref.current, start: "top 70%", once: true },
        })
        .from("[data-mill-line]", { scaleX: 0, transformOrigin: "0% 50%", duration: 1.5, ease: "power2.inOut" })
        .from(
          "[data-mill-step]",
          { autoAlpha: 0, y: 30, duration: 0.8, ease: "power3.out", stagger: 0.22 },
          "-=1.2",
        )
        .add(() => float.play());
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="relative">
      {/* process line drawn behind the machines */}
      <div
        data-mill-line
        aria-hidden
        className="absolute top-[clamp(60px,7vw,85px)] right-[12%] left-[12%] hidden border-t border-dashed border-olive/30 sm:block"
      />
      <div className="relative grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-3">
        {millingSteps.map((step, i) => (
          <div key={step.title} data-mill-step className="flex flex-col items-center text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              data-mill-image
              src={step.image}
              alt={step.title}
              className="h-[clamp(120px,14vw,170px)] w-auto object-contain"
            />
            <p className="eyebrow mt-6 text-[10px] tracking-[0.3em] text-olive/50">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="eyebrow mt-1.5 text-olive-cta">{step.title}</p>
            <p className="mt-3 max-w-[240px] font-sofia text-[clamp(13px,1vw,14px)] font-light leading-[1.6] text-body-ink">
              {step.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
