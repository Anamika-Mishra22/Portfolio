import type { Metadata } from "next";
import { Instrument_Serif, Hanken_Grotesk, Caveat } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Anamika Mishra | Software Developer",
  description:
    "Software developer with full-stack skills in React, Next.js, TypeScript, Node.js and MongoDB. Open to full-time roles and freelance projects.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${hanken.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}