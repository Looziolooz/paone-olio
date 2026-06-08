import { IntroGate } from "@/components/IntroGate";
import { HeroNav } from "@/components/HeroNav";
import { ChapterIntro } from "@/components/ChapterIntro";
import { ChapterContent, ChapterText, ChapterBody } from "@/components/ChapterContent";
import { OliveProgress } from "@/components/groves/OliveProgress";
import { PlantingComparison } from "@/components/groves/PlantingComparison";
import { HarvesterIllustration } from "@/components/harvest/HarvesterIllustration";
import { MillingGallery } from "@/components/milling/MillingGallery";
import { FlavorLockBox } from "@/components/packaging/FlavorLockBox";
import { ContinueTour } from "@/components/ContinueTour";
import { ReserveOutro } from "@/components/ReserveOutro";
import { intros, content } from "@/data/chapters";

export default function Home() {
  return (
    <>
      <IntroGate />
      <main className="relative">
        <HeroNav />

        {/* ── Groves ── */}
        <ChapterIntro {...intros.groves} />
        <ChapterContent
          top={<OliveProgress />}
          left={<ChapterText lead={content.groves.lead} body={content.groves.body} cta={content.groves.cta} poster={content.groves.videoPoster} />}
          right={<PlantingComparison />}
        />

        {/* ── Harvesting ── */}
        <ChapterIntro {...intros.harvesting} />
        <ChapterContent
          left={<HarvesterIllustration />}
          right={<ChapterText lead={content.harvesting.lead} body={content.harvesting.body} cta={content.harvesting.cta} poster={content.harvesting.videoPoster} />}
        />

        {/* ── Milling ── */}
        <ChapterIntro {...intros.milling} />
        <ChapterContent
          left={<ChapterText lead={content.milling.lead} cta={content.milling.cta} poster={content.milling.videoPoster} />}
          right={<ChapterBody paragraphs={content.milling.body} />}
          bottom={<MillingGallery />}
        />

        {/* ── Cellar ── */}
        <ChapterIntro {...intros.cellar} />
        <ChapterContent
          left={<ChapterText lead={content.cellar.lead} cta={content.cellar.cta} poster={content.cellar.videoPoster} />}
          right={<ChapterBody paragraphs={content.cellar.body} />}
        />

        {/* ── Packaging ── */}
        <ChapterIntro {...intros.packaging} />
        <ChapterContent
          left={<ChapterText lead={content.packaging.lead} body={content.packaging.body} cta={content.packaging.cta} poster={content.packaging.videoPoster} />}
          right={<FlavorLockBox />}
        />

        {/* ── Continue tour + reserve ── */}
        <ContinueTour />
        <ReserveOutro />
      </main>
    </>
  );
}
