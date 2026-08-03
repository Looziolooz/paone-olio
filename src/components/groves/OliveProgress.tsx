"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const STEPS = [1, 2, 3, 4, 5, 6, 7];

/**
 * Veraison timeline: the seven olives pop in one by one — green to black —
 * then keep a slow organic sway, like fruit in a breeze. GSAP-driven,
 * scroll-triggered once; static for no-JS and reduced-motion visitors.
 */
export function OliveProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // idle sway, armed after the pops finish
      const sway = gsap.to("[data-olive]", {
        y: -4,
        duration: 2.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.4, yoyo: true },
        paused: true,
      });

      gsap
        .timeline({
          defaults: { ease: "back.out(1.7)" },
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
        })
        .from("[data-olive-label]", { autoAlpha: 0, y: 14, duration: 0.6, ease: "power2.out", stagger: 0.12 })
        .from(
          "[data-olive]",
          {
            autoAlpha: 0,
            y: 24,
            scale: 0.5,
            transformOrigin: "50% 85%",
            duration: 0.7,
            stagger: 0.13,
          },
          "-=0.25",
        )
        .add(() => sway.play());
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="mx-auto flex w-full max-w-[820px] flex-col items-center">
      <div className="flex w-full items-end justify-between px-[6%]">
        <span data-olive-label className="eyebrow text-[clamp(10px,0.9vw,12px)] text-olive-cta">
          When we harvest — veraison begins
        </span>
        <span data-olive-label className="eyebrow text-[clamp(10px,0.9vw,12px)] text-olive-cta">
          When olives fully ripen
        </span>
      </div>
      <div
        role="img"
        aria-label="Olives ripening from green to violet to black — Aliva harvests early, when biophenols are at their peak"
        className="mt-4 flex w-full"
      >
        {STEPS.map((n) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={n}
            data-olive
            src={`/images/groves/olive-step-${n}.png`}
            alt=""
            aria-hidden
            className="block h-auto w-[14.2857%]"
          />
        ))}
      </div>
    </div>
  );
}
