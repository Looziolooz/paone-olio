export function HarvesterIllustration() {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="eyebrow text-[clamp(10px,0.9vw,12px)] leading-[1.6] text-olive-cta">
        Shaken from the branches
        <br />
        Gathered by tractor
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/groves/aliva_olive_harvest.jpg"
        alt="Freshly shaken olives gathered in a mound, ready to be carried to the mill by tractor"
        className="photo-frame mt-5 aspect-[4/3] w-full max-w-[460px] object-cover"
      />
      <p className="mt-5 max-w-[340px] font-plantin text-[15px] italic leading-[1.5] text-body-ink">
        A vibrating shaker frees each tree of its fruit; the family tractor carries it to the mill
        the same day. Small parcels, gentle hands — never intensive.
      </p>
    </div>
  );
}
