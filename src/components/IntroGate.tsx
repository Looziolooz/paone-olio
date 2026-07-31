"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function IntroGate() {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  const dismiss = () => setLeaving(true);

  useEffect(() => {
    if (gone) return;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    const onIntent = () => dismiss();
    window.addEventListener("wheel", onIntent, { passive: true });
    window.addEventListener("touchmove", onIntent, { passive: true });
    return () => {
      window.removeEventListener("wheel", onIntent);
      window.removeEventListener("touchmove", onIntent);
    };
  }, [gone]);

  useEffect(() => {
    if (!leaving) return;
    const t = setTimeout(() => {
      setGone(true);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }, 700);
    return () => clearTimeout(t);
  }, [leaving]);

  if (gone) return null;

  return (
    <div
      className={cn(
        "grain fixed inset-0 z-[90] flex flex-col items-center justify-center overflow-hidden bg-[#181d10] text-white transition-opacity duration-700",
        leaving ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/videos/posters/hero-poster.jpg" alt="" className="absolute inset-0 h-full w-full scale-105 object-cover opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60" />

      <button
        type="button"
        onClick={dismiss}
        className="eyebrow absolute right-6 top-6 z-10 text-white/75 transition hover:text-white"
      >
        Skip
      </button>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="eyebrow mb-7 text-[11px] tracking-[0.3em] text-white/70">Aliva · Azienda Agricola Paone</p>
        <h1 className="font-plantin text-[clamp(38px,6.6vw,84px)] leading-[1.02]">
          Passion for <span className="italic">olive oil</span>
        </h1>
        <p className="mt-6 max-w-lg font-sofia text-[clamp(12px,1.4vw,16px)] font-light uppercase tracking-[0.22em] text-white/85">
          wealth of our earth — Extra Virgin Olive Oil from Maida, Calabria
        </p>
      </div>

      <button
        type="button"
        onClick={dismiss}
        className="absolute bottom-[clamp(40px,7vh,80px)] z-10 flex flex-col items-center gap-3 text-white/85 transition hover:text-white"
      >
        <span className="relative flex h-14 w-14 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full border border-white/50" />
          <span className="absolute inset-0 rounded-full border border-white/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-white" />
        </span>
        <span className="eyebrow text-[11px] tracking-[0.3em]">slide to explore</span>
      </button>
    </div>
  );
}
