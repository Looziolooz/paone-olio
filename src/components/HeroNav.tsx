"use client";

import { journeySteps } from "@/data/chapters";
import { scrollToId } from "@/lib/lenis";
import { MapPin } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

export function HeroNav() {
  return (
    <section className="relative py-[clamp(72px,12vw,150px)]">
      <div className="site-wrap">
        {/* crafted with care · California · in Lodi */}
        <Reveal className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-ink">
          <span className="font-plantin text-[clamp(12px,1.15vw,15.6px)] uppercase tracking-[0.09em]">
            Crafted with care
          </span>
          <span className="relative inline-flex h-[46px] w-[40px] items-center justify-center">
            <span
              aria-hidden
              className="absolute inset-0 bg-olive-accent/55"
              style={{
                WebkitMaskImage: "url(/images/ui/california.svg)",
                maskImage: "url(/images/ui/california.svg)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            />
            <MapPin className="relative h-[14px] w-[14px] text-olive" />
          </span>
          <span className="font-plantin text-[clamp(12px,1.15vw,15.6px)] uppercase tracking-[0.09em]">
            In Lodi, California
          </span>
        </Reveal>

        {/* five-step journey */}
        <Reveal
          delay={150}
          className="mt-[clamp(44px,8vw,120px)] grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5"
        >
          {journeySteps.map((s) => (
            <button
              key={s.href}
              type="button"
              onClick={() => scrollToId(s.href)}
              className="group flex flex-col items-center gap-2 text-center"
            >
              <span className="font-plantin text-[18px] italic leading-none text-olive">{s.index}</span>
              <span className="font-quart text-[clamp(19px,2vw,26px)] uppercase tracking-[0.015em] leading-none text-olive transition-opacity duration-300 group-hover:opacity-65">
                {s.word}
              </span>
            </button>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
