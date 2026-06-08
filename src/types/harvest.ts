export type ChapterId = "groves" | "harvesting" | "milling" | "cellar" | "packaging";

export interface ParallaxLayerSpec {
  src: string;
  alt?: string;
  /** translateY rate relative to scroll progress; negative = moves up faster */
  speed: number;
  className?: string;
}

export interface ChapterIntroSpec {
  id: ChapterId;
  title: string;
  /** main full-bleed background photo */
  background: string;
  /** foreground parallax overlays drawn above the background */
  layers?: ParallaxLayerSpec[];
  /** "SEE OUR GROVES" etc. */
  cta: string;
  /** poster shown in the video placeholder modal */
  videoPoster: string;
  /** only the first chapter shows the "Begin Your Journey" arrow */
  beginJourney?: boolean;
}

export interface ChapterContentSpec {
  id: ChapterId;
  /** large Plantin serif lead sentence */
  lead: string;
  /** "SEE OUR X" label */
  cta: string;
  videoPoster: string;
  /** Sofia Pro body paragraphs (right column) */
  body: string[];
}

export interface JourneyStep {
  index: string; // "One"
  word: string; // "GROVES"
  href: string; // "#groves"
}

export interface MillingStep {
  title: string;
  image: string;
  caption: string;
}

export interface PlantingCard {
  title: string;
  frontView: string;
  topView: string;
}

export interface TourChapter {
  id: ChapterId;
  label: string;
  thumb: string;
  href: string;
}
