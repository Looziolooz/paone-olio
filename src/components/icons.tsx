import type { SVGProps } from "react";

/** Filled play triangle (from theme play_v1.svg). */
export function PlayTriangle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="currentColor" aria-hidden {...props}>
      <path d="M185.24,100.35,15,6.7V194Z" />
    </svg>
  );
}

/** Outlined circle with a centered play triangle — the "SEE OUR X" button glyph. */
export function PlayCircle({ ringWidth = 1.5, ...props }: SVGProps<SVGSVGElement> & { ringWidth?: number }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden {...props}>
      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth={ringWidth} />
      <path d="M20 17.5 31 24 20 30.5Z" fill="currentColor" />
    </svg>
  );
}

/** Thin down arrow for "Begin Your Journey". */
export function ArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 40" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden {...props}>
      <line x1="8" y1="0" x2="8" y2="36" />
      <path d="M3 31 8 37 13 31" />
    </svg>
  );
}

/** Map location pin (teardrop + dot). */
export function MapPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2a7 7 0 0 0-7 7c0 4.7 7 13 7 13s7-8.3 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

/** Mute / sound icon (from theme mute_v1.svg). */
export function MuteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="currentColor" aria-hidden {...props}>
      <polygon points="183 63.8 173.48 53.86 143.67 83.25 143.67 103.12 173.48 132.51 183 122.58 153.61 93.19 183 63.8" />
      <path d="M104.35,122.58l29.39-29.39-29.39-29.4,9.93-9.93,29.39,29.39V9.56c0-3.31-3.72-5.38-6.21-3.31L71.64,51a3.12,3.12,0,0,1-2.07.83h-48a3.92,3.92,0,0,0-4.14,4.14v74.51a3.91,3.91,0,0,0,4.14,4.14h48a6,6,0,0,1,2.49.83l65.4,44.71a4.14,4.14,0,0,0,6.63-3.31V103.12l-29.4,29.39Z" />
    </svg>
  );
}

/** Close (X) inside a thin circle (from theme x-circle.svg). */
export function CloseCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 141 140" fill="none" aria-hidden {...props}>
      <circle cx="70.5" cy="70" r="68.5" stroke="currentColor" strokeWidth="3" />
      <line x1="46" y1="45.5" x2="95" y2="94.5" stroke="currentColor" strokeWidth="4" />
      <line x1="95" y1="45.5" x2="46" y2="94.5" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 21v-8h2.6l.4-3h-3V8.1c0-.86.24-1.45 1.5-1.45H17V4.05A21 21 0 0 0 14.7 3.9c-2.3 0-3.9 1.4-3.9 4v2.1H8.2v3h2.6v8Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M22 5.9c-.7.32-1.5.54-2.3.64a4 4 0 0 0 1.76-2.2 8 8 0 0 1-2.54.97 4 4 0 0 0-6.8 3.65A11.3 11.3 0 0 1 3.7 4.8a4 4 0 0 0 1.24 5.33A4 4 0 0 1 3.1 9.6v.05a4 4 0 0 0 3.2 3.92 4 4 0 0 1-1.8.07 4 4 0 0 0 3.73 2.78A8 8 0 0 1 2 18.1a11.3 11.3 0 0 0 6.1 1.8c7.34 0 11.35-6.08 11.35-11.35l-.01-.52A8 8 0 0 0 22 5.9Z" />
    </svg>
  );
}

/** CORTO wordmark — text-based fallback for the footer logo. */
export function CortoWordmark(props: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...props}
      style={{
        fontFamily: "var(--font-sofia)",
        fontWeight: 700,
        letterSpacing: "0.42em",
        ...props.style,
      }}
    >
      CORTO
    </span>
  );
}
