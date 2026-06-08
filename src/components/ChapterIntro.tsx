import { cn } from "@/lib/utils";
import { ParallaxLayer } from "@/components/Parallax";
import { SeeOurButton } from "@/components/SeeOurButton";
import { ArrowDown } from "@/components/icons";
import type { ChapterIntroSpec } from "@/types/harvest";

/**
 * Full-bleed parallax chapter hero: background photo (+ optional overlays),
 * giant Quart title, and a "SEE OUR X" video-placeholder button.
 */
export function ChapterIntro({ id, title, background, layers, cta, videoPoster, beginJourney }: ChapterIntroSpec) {
  return (
    <section id={id} className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden">
      {/* background photo */}
      <ParallaxLayer speed={0.07} className="absolute inset-x-0 -top-[10%] -bottom-[10%] z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={background} alt={`${title} at Corto Olive`} className="h-full w-full object-cover" />
      </ParallaxLayer>

      {/* optional foreground overlays */}
      {layers?.map((layer, i) => (
        <ParallaxLayer
          key={i}
          speed={layer.speed}
          className={cn("pointer-events-none absolute inset-0 z-[1]", layer.className)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={layer.src} alt={layer.alt ?? ""} className="h-full w-full object-cover" />
        </ParallaxLayer>
      ))}

      {/* content */}
      <div className="relative z-10 flex w-full flex-col items-center px-6 py-24 text-center">
        {beginJourney && (
          <div className="mb-[14vh] flex flex-col items-center gap-3 text-olive">
            <span className="font-plantin text-[18px] italic">Begin Your Journey</span>
            <ArrowDown className="h-9 w-4 animate-bounce [animation-duration:2.4s]" />
          </div>
        )}
        <h2 className="giant-title drop-shadow-[0_2px_24px_rgba(0,0,0,0.18)]">{title}</h2>
        <div className="mt-8">
          <SeeOurButton label={cta} poster={videoPoster} title={cta} variant="white" />
        </div>
      </div>
    </section>
  );
}
