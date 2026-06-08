export function HarvesterIllustration() {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="eyebrow text-[clamp(10px,0.9vw,12px)] leading-[1.6] text-olive-cta">
        Harvester
        <br />
        Top View
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/harvest/illustration_harvest.png"
        alt="Over-the-row harvester, top view"
        className="mt-5 w-full max-w-[380px]"
      />
    </div>
  );
}
