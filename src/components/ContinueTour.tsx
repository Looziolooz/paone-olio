"use client";

import { tourChapters } from "@/data/chapters";
import { scrollToId } from "@/lib/lenis";
import { Reveal } from "@/components/Reveal";

export function ContinueTour() {
  return (
    <section className="relative py-[clamp(64px,9vw,120px)]">
      <div className="site-wrap">
        <Reveal className="text-center">
          <p className="font-plantin text-[clamp(22px,2.6vw,32px)] italic text-olive">Continue the Tour</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {tourChapters.map((c, i) => (
            <Reveal key={c.id} delay={i * 90}>
              <button
                type="button"
                onClick={() => scrollToId(c.href)}
                className="group relative block aspect-[4/5] w-full overflow-hidden"
                aria-label={`Explore ${c.label}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.thumb}
                  alt={c.label}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/10 transition-opacity duration-500 group-hover:opacity-90" />
                <span className="absolute inset-x-0 bottom-5 flex flex-col items-center gap-1.5 text-white">
                  <span className="font-quart text-[clamp(15px,1.6vw,20px)] uppercase tracking-[0.03em] transition-transform duration-500 ease-out group-hover:-translate-y-1">
                    {c.label}
                  </span>
                  <span className="eyebrow text-[10px] tracking-[0.3em] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 translate-y-1">
                    Explore
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160} className="mt-16 flex items-center justify-center gap-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/tasting/aliva_gregorio.jpg"
            alt="Gregorio Paone"
            className="h-16 w-16 rounded-full object-cover ring-1 ring-olive/25"
          />
          <div className="text-left">
            <p className="eyebrow text-[11px] text-olive-cta">Your Host</p>
            <p className="font-plantin text-[clamp(16px,1.8vw,22px)] leading-tight text-olive">Gregorio Paone</p>
            <p className="font-sofia text-[13px] font-light text-body-ink">Founder, Aliva</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
