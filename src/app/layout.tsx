import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://harvest.corto-olive.com"),
  title: "Fall Harvest - Corto Olive Oil",
  description:
    "Experience Corto Olive's Fall Harvest — the journey of ultra-fresh Extra Virgin Olive Oil from grove to cellar, crafted with care in Lodi, California.",
  icons: { icon: "/seo/favicon.ico", shortcut: "/seo/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Fall Harvest",
    title: "Corto Olive Oil Fall Harvest",
    description: "Experience Corto Olive's Fall Harvest.",
    url: "https://harvest.corto-olive.com/",
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
