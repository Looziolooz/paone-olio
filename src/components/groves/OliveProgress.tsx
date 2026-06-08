export function OliveProgress() {
  return (
    <div className="mx-auto flex w-full max-w-[820px] flex-col items-center">
      <div className="flex w-full items-end justify-between px-[6%]">
        <span className="eyebrow text-[clamp(10px,0.9vw,12px)] text-olive-cta">When we harvest olives</span>
        <span className="eyebrow text-[clamp(10px,0.9vw,12px)] text-olive-cta">When others harvest olives</span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/groves/olive-progress-v5.png"
        alt="Olives ripening from green to violet to black across the harvest window"
        className="mt-4 w-full"
      />
    </div>
  );
}
