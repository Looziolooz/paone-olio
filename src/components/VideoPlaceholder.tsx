import { cn } from "@/lib/utils";

interface VideoPlaceholderProps {
  poster?: string;
  label?: string;
  className?: string;
  /** width / height. Original players were 1920x1012 ≈ 1.897 */
  ratio?: number;
}

/**
 * "Living photo" — replaces video playback with a slow Ken Burns drift
 * over the chapter photograph, framed by grain and a soft scrim.
 */
export function VideoPlaceholder({ poster, label, className, ratio = 1920 / 1012 }: VideoPlaceholderProps) {
  return (
    <div
      className={cn("grain relative w-full overflow-hidden bg-[#20241a]", className)}
      style={{ aspectRatio: String(ratio) }}
    >
      {poster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={poster} alt="" className="kenburns absolute inset-0 h-full w-full object-cover" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15" />
      {label && (
        <div className="absolute inset-x-0 bottom-5 flex justify-center">
          <span className="eyebrow text-[11px] tracking-[0.25em] text-white/85">{label}</span>
        </div>
      )}
    </div>
  );
}
