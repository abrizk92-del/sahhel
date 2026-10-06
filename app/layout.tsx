import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: {
    default: "Sahhel — Accessible Products for Seniors",
    template: "%s | Sahhel",
  },
  description:
    "Curated accessible products for seniors: big buttons, loud sounds, comfortable grips.",
  metadataBase: new URL("https://sahhel.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={cairo.variable} suppressHydrationWarning>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-R9C8HBLZFF" />
    </html>
  );
}