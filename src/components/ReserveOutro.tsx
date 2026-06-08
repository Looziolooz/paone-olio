import { Reveal } from "@/components/Reveal";
import { PlayCircle, CortoWordmark, FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/icons";

function social(label: string) {
  return "Share Corto Harvest on " + label;
}

export function ReserveOutro() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/bg/green_bg.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-harvest-green/10" />

      <div className="relative z-10">
        <div className="content-wrap flex flex-col items-center py-[clamp(72px,10vw,140px)] text-center">
          <Reveal className="flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/tasting/illustration_virtual_tasting.png"
              alt="Reserve a tasting"
              className="mb-10 w-[clamp(170px,22vw,290px)]"
            />
            <h2 className="max-w-[640px] font-plantin text-[clamp(20px,2.4vw,27px)] italic leading-[1.45]">
              We say tasting is believing. If you are interested in trying our products, please reserve a
              complimentary tasting in your place of business.
            </h2>
            <a
              href="mailto:info@corto-olive.com?subject=Schedule a tasting"
              className="group mt-10 inline-flex items-center gap-4 text-white transition-opacity hover:opacity-85"
            >
              <span className="flex h-[46px] w-[46px] items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <PlayCircle className="h-full w-full" />
              </span>
              <span className="eyebrow">schedule a tasting</span>
            </a>
            <p className="mt-6 font-plantin text-[clamp(14px,1.4vw,18px)] italic text-white/85">
              Tastings are for restaurants only.
            </p>
          </Reveal>
        </div>

        <footer className="border-t border-white/20">
          <div className="site-wrap flex flex-col items-center justify-between gap-5 py-7 sm:flex-row">
            <CortoWordmark className="text-[clamp(16px,1.8vw,22px)] text-white" />
            <div className="flex items-center gap-5">
              <span className="eyebrow text-white/85">share</span>
              <a href="https://www.facebook.com/cortoolive" aria-label={social("Facebook")} className="transition hover:opacity-70" target="_blank" rel="noreferrer">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/cortoolive" aria-label={social("Instagram")} className="transition hover:opacity-70" target="_blank" rel="noreferrer">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/cortoolive" aria-label={social("Twitter")} className="transition hover:opacity-70" target="_blank" rel="noreferrer">
                <TwitterIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
