import { cn } from "@/lib/utils";
import { ParallaxLayer } from "@/components/Parallax";
import { ArrowDown } from "@/components/icons";
import type { ChapterIntroSpec } from "@/types/harvest";

/**
 * Full-bleed parallax chapter hero: background photo — or a muted looping
 * video with the photo as reduced-motion fallback — (+ optional overlays)
 * and a giant Quart title.
 */
export function ChapterIntro({
  id,
  title,
  background,
  backgroundVideo,
  layers,
  beginJourney,
}: ChapterIntroSpec) {
  return (
    <section id={id} className="grain relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden">
      {/* background photo / looping video */}
      <ParallaxLayer speed={0.07} className="absolute inset-x-0 -top-[10%] -bottom-[10%] z-0">
        {backgroundVideo ? (
          <>
            <video
              className="h-full w-full object-cover motion-reduce:hidden"
              src={backgroundVideo}
              poster={background}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={background}
              alt={`${title} at Aliva, Maida — Calabria`}
              className="hidden h-full w-full object-cover motion-reduce:block"
            />
          </>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={background} alt={`${title} at Aliva, Maida — Calabria`} className="h-full w-full object-cover" />
        )}
      </ParallaxLayer>

      {/* cinematic scrim for title legibility */}
      <div aria-hidden className="hero-scrim pointer-events-none absolute inset-0 z-[2]" />

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
          <div className="mb-[14vh] flex flex-col items-center gap-3 text-white/90 drop-shadow-[0_1px_10px_rgba(10,14,6,0.45)]">
            <span className="font-plantin text-[18px] italic">Begin Your Journey</span>
            <ArrowDown className="h-9 w-4 animate-bounce [animation-duration:2.4s]" />
          </div>
        )}
        <h2 className="giant-title drop-shadow-[0_2px_28px_rgba(10,14,6,0.35)]">{title}</h2>
      </div>
    </section>
  );
}
