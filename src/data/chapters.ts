import type {
  ChapterIntroSpec,
  ChapterContentSpec,
  JourneyStep,
  MillingStep,
  PlantingCard,
  TourChapter,
} from "@/types/harvest";

export const journeySteps: JourneyStep[] = [
  { index: "One", word: "GROVES", href: "groves" },
  { index: "Two", word: "HARVESTING", href: "harvesting" },
  { index: "Three", word: "MILLING", href: "milling" },
  { index: "Four", word: "CELLAR", href: "cellar" },
  { index: "Five", word: "PACKAGING", href: "packaging" },
];

export const intros: Record<string, ChapterIntroSpec> = {
  groves: {
    id: "groves",
    title: "Groves",
    background: "/images/groves/groves_main.png",
    cta: "see our groves",
    videoPoster: "/images/thumbs/groves.jpg",
    beginJourney: true,
  },
  harvesting: {
    id: "harvesting",
    title: "Harvesting",
    background: "/images/harvest/harvest_main.png",
    cta: "see our harvesting",
    videoPoster: "/images/thumbs/harvesting.jpg",
  },
  milling: {
    id: "milling",
    title: "Milling",
    background: "/images/milling/milling_main.png",
    cta: "see our milling process",
    videoPoster: "/images/thumbs/milling.jpg",
  },
  cellar: {
    id: "cellar",
    title: "Cellar",
    background: "/images/cellar/cellar_main.jpg",
    cta: "see our cellar",
    videoPoster: "/images/thumbs/cellar.jpg",
  },
  packaging: {
    id: "packaging",
    title: "Packaging",
    background: "/images/packaging/package_main.webp",
    cta: "see our packaging",
    videoPoster: "/images/thumbs/packaging.jpg",
  },
};

export const content: Record<string, ChapterContentSpec> = {
  groves: {
    id: "groves",
    lead: "Olives are a fruit and olive oil is essentially fruit juice — so, freshness is everything. We’re pioneering a new way of planting olive trees that allows us to pick them mechanically at peak freshness.",
    cta: "see our groves",
    videoPoster: "/images/thumbs/groves.jpg",
    body: [
      "Most olive oil producers wait until the Winter to harvest — when the olives are black on the tree and can be shaken to the ground due to cost reasons. Thanks to our unique vineyard style planting, we can harvest our olives in the Fall when they turn from green to violet — at their height of flavor and aroma.",
    ],
  },
  harvesting: {
    id: "harvesting",
    lead: "Our innovative process enables us to produce Extra Virgin Olive Oil from grove to cellar in just a few hours — ensuring that our oil is some of the freshest in the world.",
    cta: "see our harvesting",
    videoPoster: "/images/thumbs/harvesting.jpg",
    body: [
      "This process starts in our groves with our specially-designed, over-the-row harvesters that gently pick olives off the branches with long rotating fingers. Very similar to how wine grapes are picked, this approach allows us to harvest at scale in a way that’s never been done before. During our short season (usually 4-6 weeks) we operate 24-7 to ensure we harvest only the freshest olives.",
    ],
  },
  milling: {
    id: "milling",
    lead: "We took years to develop our proprietary process. Operating at full speed, it is something to behold.",
    cta: "see our milling process",
    videoPoster: "/images/thumbs/milling.jpg",
    body: [
      "Much like winemaking, olive milling is a blend of science and art. When olives come in off the trucks, our Master Miller and team work quickly to understand the fruit. Within hours, using our state-of-the-art technology and milling equipment, we create the freshest and most flavorful Extra Virgin Olive Oil possible.",
      "Thanks to inventive solutions and innovative parts, our mill is the only one of its kind in the world.",
    ],
  },
  cellar: {
    id: "cellar",
    lead: "Climate-controlled, nitrogen-blanketed, stainless steel casks, stored in cold temperature — that’s how our oils like to rest in our cellar.",
    cta: "see our cellar",
    videoPoster: "/images/thumbs/cellar.jpg",
    body: [
      "The real enemies of fresh tasting oil are heat, light and air. For this very reason we protect our freshly extracted oil in a climate-controlled cellar. Furthermore, because we understand the importance of consistency to restaurateurs, we take the time to taste every individual batch, and then blend them together in a way that ensures a uniform flavor profile and absolute deliciousness.",
    ],
  },
  packaging: {
    id: "packaging",
    lead: "From our unique harvesting methods, to our one-of-a-kind packaging, we’re always looking to make our process as efficient and forward thinking as possible.",
    cta: "see our packaging",
    videoPoster: "/images/thumbs/packaging.jpg",
    body: [
      "We take the utmost care to ensure fresh flavor is delivered directly from our grove to you. Our proprietary oxygen-free bag-in-box system with a one-way pour spout (we call it FlavorLock Box) protects our precious oil from damaging light, heat, and air, from the time it is filled until the very last drop. Even then, we only fill these boxes when orders come in to provide our customers with only the absolute freshest oil.",
    ],
  },
};

export const millingSteps: MillingStep[] = [
  { title: "crushing", image: "/images/milling/mill_crushing.png", caption: "Grinds the olives into a paste" },
  { title: "malaxing", image: "/images/milling/mill_malaxing.png", caption: "Olive paste mixed to allow oil droplets to be released" },
  { title: "separating", image: "/images/milling/mill_separating.png", caption: "Centrifuge taking the olive paste and separating newly extracted oil from fruit" },
];

export const plantingCards: PlantingCard[] = [
  {
    title: "Old World Style Planting",
    frontView: "/images/groves/illustration_groves_1.png",
    topView: "/images/groves/illustration_groves_3.png",
  },
  {
    title: "Corto’s Vineyard Style Planting",
    frontView: "/images/groves/illustration_groves_2.png",
    topView: "/images/groves/illustration_groves_4.png",
  },
];

export const tourChapters: TourChapter[] = [
  { id: "groves", label: "Groves", thumb: "/images/thumbs/groves.jpg", href: "groves" },
  { id: "harvesting", label: "Harvesting", thumb: "/images/thumbs/harvesting.jpg", href: "harvesting" },
  { id: "milling", label: "Milling", thumb: "/images/thumbs/milling.jpg", href: "milling" },
  { id: "cellar", label: "Cellar", thumb: "/images/thumbs/cellar.jpg", href: "cellar" },
  { id: "packaging", label: "Packaging", thumb: "/images/thumbs/packaging.jpg", href: "packaging" },
];
