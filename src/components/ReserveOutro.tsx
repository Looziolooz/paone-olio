import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { AlivaWordmark, InstagramIcon } from "@/components/icons";

export function ReserveOutro() {
  return (
    <section className="grain relative overflow-hidden text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/bg/green_bg.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-harvest-green/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

      <div className="relative z-10">
        <div className="content-wrap flex flex-col items-center py-[clamp(72px,10vw,120px)] text-center">
          <Reveal className="flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/tasting/aliva_heritage.jpg"
              alt="Peppino Paone, who began the family trade in Maida in the early 1900s"
              className="mb-10 w-[clamp(170px,22vw,290px)] -rotate-1 border-4 border-white/90 shadow-[0_18px_44px_-14px_rgba(0,0,0,0.5)]"
            />
            <p className="eyebrow mb-6 text-[11px] tracking-[0.3em] text-white/75">Four generations · Since the early 1900s</p>
            <h2 className="max-w-[640px] font-plantin text-[clamp(20px,2.4vw,27px)] italic leading-[1.45]">
              Passion for olive oil, wealth of our earth. From our family land in Maida to your table —
              through a short chain and a direct relation with the people who enjoy it.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>

        <footer className="border-t border-white/20">
          <div className="site-wrap flex flex-col items-center justify-between gap-5 py-7 sm:flex-row">
            <AlivaWordmark className="text-[clamp(18px,2vw,24px)] text-white" />
            <div className="flex items-center gap-5">
              <span className="eyebrow text-white/85">follow us</span>
              <a
                href="https://www.instagram.com/alivaextra"
                aria-label="Follow Aliva on Instagram"
                className="transition hover:opacity-70"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
