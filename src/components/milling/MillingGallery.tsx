import { millingSteps } from "@/data/chapters";
import { Reveal } from "@/components/Reveal";

export function MillingGallery() {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-3">
      {millingSteps.map((step, i) => (
        <Reveal key={step.title} delay={i * 130} className="flex flex-col items-center text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={step.image} alt={step.title} className="h-[clamp(120px,14vw,170px)] w-auto object-contain" />
          <p className="eyebrow mt-6 text-olive-cta">{step.title}</p>
          <p className="mt-3 max-w-[240px] font-sofia text-[clamp(13px,1vw,14px)] font-light leading-[1.6] text-body-ink">
            {step.caption}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
