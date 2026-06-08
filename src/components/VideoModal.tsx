"use client";

import { useEffect } from "react";
import { CloseCircle } from "@/components/icons";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  poster?: string;
  title?: string;
}

export function VideoModal({ open, onClose, poster, title }: VideoModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 px-5 animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title ?? "Video"}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-6 top-6 h-10 w-10 text-white/80 transition hover:text-white"
      >
        <CloseCircle className="h-full w-full" />
      </button>
      <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        {title && (
          <p className="eyebrow mb-3 text-center text-white/70">{title}</p>
        )}
        <VideoPlaceholder poster={poster} className="rounded-sm shadow-2xl" />
      </div>
    </div>
  );
}
