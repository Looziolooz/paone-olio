import { cn } from "@/lib/utils";
import { PlayTriangle } from "@/components/icons";

interface VideoPlaceholderProps {
  poster?: string;
  label?: string;
  className?: string;
  /** width / height. Source HLS videos are 1920x1012 ≈ 1.897 */
  ratio?: number;
}

/**
 * Stand-in for the site's HLS video.js players (per clone spec: video placeholders).
 * Real source aspect ratio is preserved; shows poster + play glyph.
 */
export function VideoPlaceholder({ poster, label = "Video placeholder", className, ratio = 1920 / 1012 }: VideoPlaceholderProps) {
  return (
    <div
      className={cn("relative w-full overflow-hidden bg-[#2b2b2b]", className)}
      style={{ aspectRatio: String(ratio) }}
    >
      {poster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
      )}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
        <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/90 backdrop-blur-sm">
          <PlayTriangle className="ml-1 h-6 w-6" />
        </span>
        <span className="eyebrow text-[11px] tracking-[0.25em] text-white/80">{label}</span>
      </div>
    </div>
  );
}
