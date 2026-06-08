"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PlayCircle } from "@/components/icons";
import { VideoModal } from "@/components/VideoModal";

interface SeeOurButtonProps {
  label: string;
  poster?: string;
  title?: string;
  /** olive on light bg, or white over photos / green bg */
  variant?: "olive" | "white";
  className?: string;
  size?: number;
}

export function SeeOurButton({ label, poster, title, variant = "olive", className, size = 46 }: SeeOurButtonProps) {
  const [open, setOpen] = useState(false);
  const color = variant === "white" ? "text-white" : "text-olive-cta";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group inline-flex items-center gap-4 transition-opacity hover:opacity-80",
          color,
          className,
        )}
      >
        <span
          className="relative flex shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105"
          style={{ width: size, height: size }}
        >
          <PlayCircle className="h-full w-full" />
        </span>
        <span className="eyebrow whitespace-nowrap">{label}</span>
      </button>
      <VideoModal open={open} onClose={() => setOpen(false)} poster={poster} title={title ?? label} />
    </>
  );
}
