import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { SeeOurButton } from "@/components/SeeOurButton";

interface ChapterContentProps {
  /** full-width node above the two-column grid (e.g. olive-ripeness row) */
  top?: ReactNode;
  left: ReactNode;
  right: ReactNode;
  /** full-width node below the grid (e.g. milling 3-step gallery) */
  bottom?: ReactNode;
  className?: string;
}

/** Ivory two-column content band beneath each chapter hero. */
export function ChapterContent({ top, left, right, bottom, className }: ChapterContentProps) {
  return (
    <div className={cn("relative py-[clamp(64px,9vw,128px)]", className)}>
      <div className="content-wrap">
        {top && <Reveal className="mb-[clamp(48px,7vw,96px)]">{top}</Reveal>}
        <div className="grid items-start gap-x-[clamp(40px,7vw,108px)] gap-y-12 md:grid-cols-[1.06fr_1fr]">
          <Reveal>{left}</Reveal>
          <Reveal delay={140}>{right}</Reveal>
        </div>
        {bottom && <Reveal className="mt-[clamp(48px,7vw,96px)]">{bottom}</Reveal>}
      </div>
    </div>
  );
}

/** Composed text column: large Plantin lead, optional body, optional "SEE OUR X" CTA. */
export function ChapterText({
  lead,
  body,
  cta,
  poster,
}: {
  lead: string;
  body?: string[];
  cta?: string;
  poster?: string;
}) {
  return (
    <div>
      <h2 className="font-plantin text-[clamp(21px,2.1vw,27px)] leading-[1.32] text-olive">{lead}</h2>
      {body && body.length > 0 && <ChapterBody className="mt-8" paragraphs={body} />}
      {cta && (
        <div className="mt-[clamp(28px,3vw,44px)]">
          <SeeOurButton label={cta} poster={poster} title={cta} variant="olive" />
        </div>
      )}
    </div>
  );
}

/** Large Plantin serif lead + optional "SEE OUR X" CTA. */
export function ChapterLead({
  children,
  cta,
  poster,
  className,
}: {
  children: ReactNode;
  cta?: string;
  poster?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="font-plantin text-[clamp(21px,2.1vw,27px)] leading-[1.32] text-olive">{children}</h2>
      {cta && (
        <div className="mt-[clamp(28px,3vw,44px)]">
          <SeeOurButton label={cta} poster={poster} title={cta} variant="olive" />
        </div>
      )}
    </div>
  );
}

/** Sofia Pro Light body paragraphs. */
export function ChapterBody({ paragraphs, className }: { paragraphs: string[]; className?: string }) {
  return (
    <div className={cn("space-y-5", className)}>
      {paragraphs.map((p, i) => (
        <p key={i} className="font-sofia text-[clamp(15px,1.25vw,18px)] font-light leading-[1.62] text-body-ink">
          {p}
        </p>
      ))}
    </div>
  );
}
