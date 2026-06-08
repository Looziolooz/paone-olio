export function FlavorLockBox() {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="eyebrow mb-6 text-[clamp(10px,0.9vw,12px)] text-olive-cta">Flavorlock™ Box</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/packaging/illustration_packaging.png"
        alt="FlavorLock bag-in-box packaging"
        className="w-full max-w-[300px]"
      />
      <p className="mt-6 max-w-[280px] font-plantin text-[15px] italic leading-[1.5] text-body-ink">
        As oil is dispensed, the bag collapses, keeping air out and aroma in.
      </p>
    </div>
  );
}
