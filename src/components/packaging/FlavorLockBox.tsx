export function FlavorLockBox() {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="eyebrow mb-6 text-[clamp(10px,0.9vw,12px)] text-olive-cta">Aliva · Olio Extra Vergine d&rsquo;Oliva</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/cellar/aliva_storage.jpg"
        alt="Aliva tins, filled in small batches and ready to travel"
        className="photo-frame aspect-[4/5] w-full max-w-[300px] object-cover"
      />
      <p className="mt-6 max-w-[300px] font-plantin text-[15px] italic leading-[1.5] text-body-ink">
        Bottled every two months, in small batches, only as orders come in — never left waiting.
      </p>
    </div>
  );
}
