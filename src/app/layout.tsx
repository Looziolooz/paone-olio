import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alivaextra.it"),
  title: "Aliva — Extra Virgin Olive Oil from Maida, Calabria",
  description:
    "Passion for olive oil, wealth of our earth. Follow the journey of Aliva Extra Virgin Olive Oil — from 4,500 organically cultivated olive trees in Maida, Calabria, through harvest, milling and cellar, to your table.",
  icons: { icon: "/seo/favicon.png", shortcut: "/seo/favicon.png" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Aliva — Olio Extra Vergine d'Oliva",
    title: "Aliva — Passion for Olive Oil, Wealth of Our Earth",
    description:
      "The journey of Aliva Extra Virgin Olive Oil — from grove to bottle in Maida, Calabria.",
    url: "https://www.alivaextra.it/",
    images: [{ url: "/seo/og-image.jpg", width: 1200, height: 630, type: "image/jpeg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
