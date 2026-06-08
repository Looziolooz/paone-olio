// Downloads every asset from harvest.corto-olive.com into public/.
// Run: node scripts/download-assets.mjs
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ORIGIN = "https://harvest.corto-olive.com";
const THEME = "/wp-content/themes/affinity-custom-webpack";
const UPLOADS = "/wp-content/uploads/2020/10";
const FONTS = `${THEME}/fonts`;
const CF = "https://d3glfubnwx9i1m.cloudfront.net/harvest/corto-harvest-hls-vids";

// [remoteUrl, localPath]
const assets = [
  // ---- Fonts (exact self-hosted woff2) ----
  ...[
    "SofiaPro-Light", "SofiaProRegular", "SofiaPro-Medium", "SofiaPro-Bold", "SofiaPro-Black",
    "PlantinMTPro-Light", "PlantinMTPro-Regular", "PlantinMTPro-Italic",
    "Quart-Regular",
  ].map((f) => [`${ORIGIN}${FONTS}/${f}.woff2`, `public/fonts/${f}.woff2`]),

  // ---- Page backgrounds ----
  [`${ORIGIN}${UPLOADS}/ivory_bg_lg-scaled.jpg`, "public/images/bg/ivory_bg.jpg"],
  [`${ORIGIN}${UPLOADS}/green_bg.jpg`, "public/images/bg/green_bg.jpg"],

  // ---- Groves layers ----
  [`${ORIGIN}${UPLOADS}/groves_main.png`, "public/images/groves/groves_main.png"],
  [`${ORIGIN}${UPLOADS}/groves_branch-1.png`, "public/images/groves/groves_branch-1.png"],
  [`${ORIGIN}${UPLOADS}/groves_branch-2.png`, "public/images/groves/groves_branch-2.png"],
  [`${ORIGIN}${UPLOADS}/olive-progress-v5.png`, "public/images/groves/olive-progress-v5.png"],
  [`${ORIGIN}${UPLOADS}/illustration_groves_1-1.png`, "public/images/groves/illustration_groves_1.png"],
  [`${ORIGIN}${UPLOADS}/illustration_groves-_3_v2.png`, "public/images/groves/illustration_groves_3.png"],
  [`${ORIGIN}${UPLOADS}/illustration-_groves_2.png`, "public/images/groves/illustration_groves_2.png"],
  [`${ORIGIN}${UPLOADS}/illustration_groves_4-1.png`, "public/images/groves/illustration_groves_4.png"],

  // ---- Harvesting layers ----
  [`${ORIGIN}${UPLOADS}/harvest_main.png`, "public/images/harvest/harvest_main.png"],
  [`${ORIGIN}${UPLOADS}/harvest_clouds.png`, "public/images/harvest/harvest_clouds.png"],
  [`${ORIGIN}${UPLOADS}/harvest_tractor_v2.png`, "public/images/harvest/harvest_tractor.png"],
  [`${ORIGIN}${UPLOADS}/illustration_harvest.png`, "public/images/harvest/illustration_harvest.png"],

  // ---- Milling layers ----
  [`${ORIGIN}${UPLOADS}/milling_main_v2.png`, "public/images/milling/milling_main.png"],
  [`${ORIGIN}${UPLOADS}/milling_olives.png`, "public/images/milling/milling_olives.png"],
  [`${ORIGIN}${UPLOADS}/illustration_mill_crushing.png`, "public/images/milling/mill_crushing.png"],
  [`${ORIGIN}${UPLOADS}/illustration_mill_malaxing-1.png`, "public/images/milling/mill_malaxing.png"],
  [`${ORIGIN}${UPLOADS}/illustration_mill_separating_v2.png`, "public/images/milling/mill_separating.png"],

  // ---- Cellar ----
  [`${ORIGIN}${UPLOADS}/cellar_main.jpg`, "public/images/cellar/cellar_main.jpg"],
  [`${ORIGIN}${UPLOADS}/cellar_main.png`, "public/images/cellar/cellar_main.png"],

  // ---- Packaging ----
  [`${ORIGIN}${THEME}/images/package_main_2026.webp`, "public/images/packaging/package_main.webp"],
  [`${ORIGIN}${UPLOADS}/illustration_packaging-2.png`, "public/images/packaging/illustration_packaging.png"],

  // ---- Tasting / outro ----
  [`${ORIGIN}${UPLOADS}/illustration_virtual_tasting.png`, "public/images/tasting/illustration_virtual_tasting.png"],
  [`${ORIGIN}${UPLOADS}/guide_test.png`, "public/images/tasting/tour_guide.png"],

  // ---- Continue-tour chapter thumbnails ----
  [`${ORIGIN}${UPLOADS}/tool-tip_groves.jpg`, "public/images/thumbs/groves.jpg"],
  [`${ORIGIN}${UPLOADS}/tool-tip_harvesting.jpg`, "public/images/thumbs/harvesting.jpg"],
  [`${ORIGIN}${UPLOADS}/tool-tip_milling.jpg`, "public/images/thumbs/milling.jpg"],
  [`${ORIGIN}${UPLOADS}/tool-tip_cellar.jpg`, "public/images/thumbs/cellar.jpg"],
  [`${ORIGIN}${UPLOADS}/tool-tip_package.jpg`, "public/images/thumbs/packaging.jpg"],

  // ---- UI icons ----
  [`${ORIGIN}${THEME}/images/play_v1.svg`, "public/images/ui/play.svg"],
  [`${ORIGIN}${THEME}/images/mute_v1.svg`, "public/images/ui/mute.svg"],
  [`${ORIGIN}${THEME}/images/x-circle.svg`, "public/images/ui/x-circle.svg"],
  [`${ORIGIN}${THEME}/images/california.svg`, "public/images/ui/california.svg"],

  // ---- SEO ----
  [`${ORIGIN}${THEME}/images/corto-favicon.ico`, "public/seo/favicon.ico"],
  [`${ORIGIN}${UPLOADS}/fb-share-hero.jpg`, "public/seo/og-image.jpg"],

  // ---- Video posters (for placeholders) ----
  [`${CF}/intro_video/intro-thumb.jpg`, "public/videos/posters/hero-poster.jpg"],
];

const ROOT = process.cwd();
let ok = 0, fail = 0;
const failures = [];

async function dl([url, rel]) {
  const out = join(ROOT, rel);
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (clone-asset-fetch)" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, buf);
    ok++;
    console.log(`  ok  ${rel}  (${(buf.length / 1024).toFixed(1)} KB)`);
  } catch (e) {
    fail++;
    failures.push(`${rel} <- ${url} : ${e.message}`);
    console.log(`  FAIL ${rel} : ${e.message}`);
  }
}

async function run() {
  const POOL = 4;
  for (let i = 0; i < assets.length; i += POOL) {
    await Promise.all(assets.slice(i, i + POOL).map(dl));
  }
  console.log(`\nDone. ${ok} ok, ${fail} failed of ${assets.length}.`);
  if (failures.length) console.log("Failures:\n" + failures.join("\n"));
}
run();
