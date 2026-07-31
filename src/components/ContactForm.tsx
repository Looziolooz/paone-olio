"use client";

import { useState } from "react";
import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

/** Single drop of oil — fills gold, the brand's quietest signature. */
function OilDrop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 26" fill="currentColor" aria-hidden {...props}>
      <path d="M10 .8C14.6 7 17.5 11.6 17.5 15.4a7.5 7.5 0 1 1-15 0C2.5 11.6 5.4 7 10 .8Z" />
    </svg>
  );
}

const TASTING_NOTES = ["Fresh grass", "Chicory", "A touch of tomato", "Almond"];

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="eyebrow text-[10px] tracking-[0.24em] text-olive-cta">
        {label}
      </label>
      {children}
    </div>
  );
}

const fieldClass =
  "w-full border-b border-olive/25 bg-transparent py-2.5 font-plantin text-[17px] text-ink placeholder:italic placeholder:text-ink/35 transition-colors duration-300 focus:border-b-2 focus:border-gold focus:outline-none";

/**
 * Premium contact band: an ivory paper panel floating on the green outro.
 * No backend — submitting composes a prefilled email to info@alivaextra.it.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const valid =
    name.trim().length > 1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && message.trim().length > 3;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    const subject = `Aliva — message from ${name.trim()}`;
    const body = `${message.trim()}\n\n— ${name.trim()}\n${email.trim()}`;
    window.location.href = `mailto:info@alivaextra.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div id="contact" className="content-wrap pb-[clamp(72px,10vw,140px)]">
      <div className="grid items-start gap-x-[clamp(40px,7vw,96px)] gap-y-12 md:grid-cols-[1fr_1.1fr]">
        {/* invitation */}
        <div className="text-left">
          <p className="eyebrow mb-5 text-[11px] tracking-[0.3em] text-white/75">Get in touch</p>
          <h3 className="font-plantin text-[clamp(24px,2.8vw,34px)] italic leading-[1.3]">
            Tell us where to send the harvest.
          </h3>
          <p className="mt-5 max-w-[400px] font-sofia text-[15px] font-light leading-[1.7] text-white/85">
            Information, orders, stockists — every message reaches the family directly, and the
            family answers personally.
          </p>

          <p className="eyebrow mt-9 mb-3 text-[10px] tracking-[0.24em] text-white/60">Tasting notes</p>
          <ul className="flex flex-wrap gap-2.5">
            {TASTING_NOTES.map((note) => (
              <li
                key={note}
                className="border border-white/30 px-3.5 py-1.5 font-plantin text-[14px] italic text-white/90"
              >
                {note}
              </li>
            ))}
          </ul>

          <div className="mt-9 space-y-1.5 font-sofia text-[14px] font-light text-white/85">
            <p>
              <a href="mailto:info@alivaextra.it" className="link-sweep hover:text-white">
                info@alivaextra.it
              </a>
            </p>
            <p>Azienda Agricola Gregorio Paone</p>
            <p>c/da Frass&agrave; · 88025 Maida (CZ) · Calabria</p>
          </div>
        </div>

        {/* paper panel */}
        <form
          onSubmit={submit}
          noValidate
          className="grain photo-frame relative bg-ivory p-[clamp(26px,3.4vw,46px)] text-left"
        >
          <div className="relative z-[3] flex flex-col gap-7">
            <Field id="cf-name" label="Your name">
              <input
                id="cf-name"
                type="text"
                autoComplete="name"
                placeholder="Chi scrive?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={fieldClass}
                required
              />
            </Field>
            <Field id="cf-email" label="Your email">
              <input
                id="cf-email"
                type="email"
                autoComplete="email"
                placeholder="Where we can answer"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={fieldClass}
                required
              />
            </Field>
            <Field id="cf-message" label="Your message">
              <textarea
                id="cf-message"
                rows={4}
                placeholder="Orders, questions, a story to share…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={cn(fieldClass, "resize-none")}
                required
              />
            </Field>

            <div>
              <button
                type="submit"
                disabled={!valid}
                className="group inline-flex items-center gap-3.5 bg-olive px-8 py-4 text-ivory transition-colors duration-300 hover:bg-ink disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span className="eyebrow text-[11px] tracking-[0.24em]">Send your message</span>
                <OilDrop className="h-[15px] w-auto text-gold transition-transform duration-500 ease-out group-hover:translate-y-[3px]" />
              </button>
              <p
                aria-live="polite"
                className={cn(
                  "mt-4 font-plantin text-[14px] italic text-body-ink/80 transition-opacity duration-500",
                  sent ? "opacity-100" : "opacity-0",
                )}
              >
                Your email app is opening — or write directly to info@alivaextra.it
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
