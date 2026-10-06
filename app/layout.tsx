import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Sahhel — Accessible Products for Seniors",
  description:
    "Curated accessible products for seniors: big buttons, loud sounds, comfortable grips.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={cairo.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}