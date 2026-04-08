import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Cormorant_Garamond,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
} from "next/font/google";

import { siteMeta } from "@/content/site";

import "./globals.css";

const editorialSerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-editorial",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const interfaceSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-interface",
  weight: ["400", "500", "600"],
});

const dataMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-data",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${editorialSerif.variable} ${interfaceSans.variable} ${dataMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
