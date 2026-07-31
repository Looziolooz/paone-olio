"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { plantingCards } from "@/data/chapters";
import type { PlantingCard } from "@/types/harvest";

function ViewToggle({ active, onSelect }: { active: "front" | "top"; onSelect: (v: "front" | "top") => void }) {
  return (
    <div className="mt-4 flex items-center justify-center gap-5">
      {(["front", "top"] as const).map((v) => (
        <button
          key={v}
          type="button"
          onClick={() => onSelect(v)}
          className={cn(
            "font-plantin text-[14px] italic transition-colors duration-300",
            active === v ? "text-olive" : "text-olive/40 hover:text-olive/70",
          )}
        >
          {v === "front" ? "The Trees" : "The Fruit"}
        </button>
      ))}
    </div>
  );
}

function Card({ card }: { card: PlantingCard }) {
  const [view, setView] = useState<"front" | "top">("front");
  return (
    <div className="flex flex-col items-center text-center">
      <p className="eyebrow mb-4 text-[clamp(10px,0.85vw,12px)] text-olive-cta">{card.title}</p>
      <div className="photo-frame relative aspect-[4/3] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={card.frontView}
          alt={`${card.title} — the trees`}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out",
            view === "front" ? "scale-100 opacity-100" : "scale-[1.03] opacity-0",
          )}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={card.topView}
          alt={`${card.title} — the fruit`}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out",
            view === "top" ? "scale-100 opacity-100" : "scale-[1.03] opacity-0",
          )}
        />
      </div>
      <ViewToggle active={view} onSelect={setView} />
    </div>
  );
}

export function PlantingComparison() {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
      {plantingCards.map((c) => (
        <Card key={c.title} card={c} />
      ))}
    </div>
  );
}
