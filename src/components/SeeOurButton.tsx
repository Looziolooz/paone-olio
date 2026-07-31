"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PlayCircle } from "@/components/icons";
import { VideoModal } from "@/components/VideoModal";

interface SeeOurButtonProps {
  label: string;
  poster?: string;
  /** real video file for the modal; without it the animated photo shows */
  video?: string;
  title?: string;
  /** olive on light bg, or white over photos / green bg */
  variant?: "olive" | "white";
  className?: string;
  size?: number;
}

export function SeeOurButton({ label, poster, video, title, variant = "olive", className, size = 46 }: SeeOurButtonProps) {
  const [open, setOpen] = useState(false);
  const color = variant === "white" ? "text-white" : "text-olive-cta";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn("group inline-flex items-center gap-4", color, className)}
      >
        <span
          className="relative flex shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-out group-hover:scale-110"
          style={{ width: size, height: size }}
        >
          <PlayCircle className="h-full w-full transition-opacity duration-300 group-hover:opacity-85" />
        </span>
        <span className="link-sweep eyebrow whitespace-nowrap transition-colors duration-300 group-hover:opacity-90">
          {label}
        </span>
      </button>
      <VideoModal open={open} onClose={() => setOpen(false)} poster={poster} videoSrc={video} title={title ?? label} />
    </>
  );
}
