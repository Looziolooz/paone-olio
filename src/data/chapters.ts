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
    background: "/images/groves/aliva_panorama.jpg",
    zoomOnScroll: true,
    cta: "see our groves",
    videoPoster: "/images/groves/aliva_olives_branch.jpg",
    videoSrc: "/videos/groves.mp4",
    beginJourney: true,
  },
  harvesting: {
    id: "harvesting",
    title: "Harvesting",
    background: "/images/harvest/aliva_raccolta.jpg",
    backgroundVideo: "/videos/harvesting.mp4",
    cta: "see our harvest",
    videoPoster: "/images/harvest/aliva_raccolta.jpg",
    videoSrc: "/videos/harvesting.mp4",
  },
  milling: {
    id: "milling",
    title: "Milling",
    background: "/images/milling/aliva_extraction.jpg",
    backgroundVideo: "/videos/milling.mp4",
    cta: "see the extraction",
    videoPoster: "/images/milling/aliva_oil_pour.jpg",
    videoSrc: "/videos/milling.mp4",
  },
  cellar: {
    id: "cellar",
    title: "Cellar",
    background: "/images/cellar/aliva_storage.jpg",
    cta: "see our cellar",
    videoPoster: "/images/cellar/aliva_storage.jpg",
  },
  packaging: {
    id: "packaging",
    title: "Packaging",
    background: "/images/packaging/aliva_bottle.jpg",
    cta: "see our packaging",
    videoPoster: "/images/packaging/aliva_bottle.jpg",
  },
};

export const content: Record<string, ChapterContentSpec> = {
  groves: {
    id: "groves",
    lead: "We grow around 4,500 olive trees over 18 hectares in Maida, Calabria — cultivated organically, with one tree in five a secular giant shaped by centuries of wind and sun.",
    cta: "see our groves",
    videoPoster: "/images/groves/aliva_olives_branch.jpg",
    videoSrc: "/videos/groves.mp4",
    body: [
      "Our secular trees are the most majestic: an irregular planting line helped them grow considerable, sculptured shapes with imposing trunks. We mainly cultivate Carolea — a variety typical of Calabria, resistant to drought and high winds — together with Frantoio, and our farming is certified organic by Bioagricert under European regulation CE 834/2007.",
      "Contrary to what is usually believed, the wild grasses between our rows give a positive impact to the soil: they increase its organic matter, prevent erosion, mine minerals from far beneath the surface, and keep the whole ecosystem healthy through biodiversity.",
    ],
  },
  harvesting: {
    id: "harvesting",
    lead: "Our olives are collected between October and the end of November, right after veraison begins — when their colour turns from green to yellow and natural antioxidants are at their peak.",
    cta: "see our harvest",
    videoPoster: "/images/harvest/aliva_raccolta.jpg",
    videoSrc: "/videos/harvesting.mp4",
    body: [
      "The exact harvesting moment depends on the maturation of the fruit: in this phase the biophenols — precious natural antioxidants — are present in great quantity, so we pick when the olive is at its very best. A vibrating trunk-shaker gently frees the olives from the branches, and our tractor gathers them and carries them straight to the mill.",
      "Ours is a family harvest, not an intensive one. Vincenzo looks after the work in the fields, Gregorio follows the oil from press to bottle — the same hands, every season, on the same eighteen hectares.",
    ],
  },
  milling: {
    id: "milling",
    lead: "As soon as they are collected, our olives travel just five kilometres to a mill active since 1931 — devoted exclusively to high-quality extra virgin olive oil, certified DOP Lametia.",
    cta: "see the extraction",
    videoPoster: "/images/milling/aliva_oil_pour.jpg",
    videoSrc: "/videos/milling.mp4",
    body: [
      "The first step of extraction is cleaning the olives. Then comes crushing: the flesh cells are torn to facilitate the release of the oil they hold. Finally the oil is separated from the rest of the fruit by centrifugation.",
      "Every drop of our extra virgin is obtained by mechanical means only — nothing else ever touches it.",
    ],
  },
  cellar: {
    id: "cellar",
    lead: "After extraction the oil rests in stainless steel tanks in our warehouse, where time and stillness let every last residual settle slowly to the bottom.",
    cta: "see our cellar",
    videoPoster: "/images/cellar/aliva_storage.jpg",
    body: [
      "Patience is the quietest ingredient of a great oil. Every two months the clarified oil is bottled and packaged, then distributed within three to six months — so what reaches your table is always close to the harvest. Aliva keeps growing by its founding principles: love for olive oil, a short supply chain, and a direct relation with the people who enjoy it.",
    ],
  },
  packaging: {
    id: "packaging",
    lead: "Gold yellow with light green shades, an aroma of fresh grass, chicory and a touch of tomato — lightly fruity and sweet, in harmony with a balanced bitter-pungent sensation.",
    cta: "see our packaging",
    videoPoster: "/images/packaging/aliva_bottle.jpg",
    body: [
      "From the blend of our two cultivars comes an extra virgin olive oil with peculiar organoleptic properties. We recommend it raw — on salads, vegetables, fish and white meats — where its fragrance speaks loudest; it also gives a richer taste to lightly fried foods. Bottled in small batches as orders come in, it travels from our family land directly to your table.",
    ],
  },
};

export const millingSteps: MillingStep[] = [
  { title: "crushing", image: "/images/milling/mill_crushing.png", caption: "The flesh cells of the olives are torn to facilitate the release of the oil" },
  { title: "malaxing", image: "/images/milling/mill_malaxing.png", caption: "The paste is slowly mixed so the droplets of oil gather together" },
  { title: "separating", image: "/images/milling/mill_separating.png", caption: "A centrifuge separates the newly extracted oil — by mechanical means only" },
];

export const plantingCards: PlantingCard[] = [
  {
    title: "Secular Groves — one tree in five",
    frontView: "/images/groves/aliva_secular_tree.jpg",
    topView: "/images/groves/aliva_olives_branch.jpg",
  },
  {
    title: "New Plantings — 4,000 trees since 1999",
    frontView: "/images/groves/aliva_grove_rows.jpg",
    topView: "/images/harvest/aliva_inspection.jpg",
  },
];

export const tourChapters: TourChapter[] = [
  { id: "groves", label: "Groves", thumb: "/images/groves/aliva_panorama.jpg", href: "groves" },
  { id: "harvesting", label: "Harvesting", thumb: "/images/harvest/aliva_raccolta.jpg", href: "harvesting" },
  { id: "milling", label: "Milling", thumb: "/images/milling/aliva_extraction.jpg", href: "milling" },
  { id: "cellar", label: "Cellar", thumb: "/images/cellar/aliva_storage.jpg", href: "cellar" },
  { id: "packaging", label: "Packaging", thumb: "/images/packaging/aliva_bottle.jpg", href: "packaging" },
];
