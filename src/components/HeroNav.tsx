"use client";

import { journeySteps } from "@/data/chapters";
import { scrollToId } from "@/lib/lenis";
import { MapPin } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

export function HeroNav() {
  return (
    <section className="relative py-[clamp(72px,12vw,150px)]">
      <div className="site-wrap">
        {/* cultivated organically · Calabria · in Maida */}
        <Reveal className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-ink">
          <span className="font-plantin text-[clamp(12px,1.15vw,15.6px)] uppercase tracking-[0.09em]">
            Cultivated organically
          </span>
          <span className="relative inline-block h-[56px] w-[31px]">
            <span
              aria-hidden
              className="absolute inset-0 bg-olive-accent/55"
              style={{
                WebkitMaskImage: "url(/images/ui/calabria.svg)",
                maskImage: "url(/images/ui/calabria.svg)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            />
            {/* pin tip lands on Maida (isthmus of Catanzaro) */}
            <MapPin
              className="absolute h-[13px] w-[13px] text-olive"
              style={{ left: "46.4%", top: "57.8%", transform: "translate(-50%, -100%)" }}
            />
          </span>
          <span className="font-plantin text-[clamp(12px,1.15vw,15.6px)] uppercase tracking-[0.09em]">
            In Maida, Calabria
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
              <span className="font-plantin text-[18px] italic leading-none text-olive transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
                {s.index}
              </span>
              <span className="link-sweep font-quart text-[clamp(19px,2vw,26px)] uppercase tracking-[0.015em] leading-none text-olive transition-colors duration-300 group-hover:text-olive-cta">
                {s.word}
              </span>
            </button>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
