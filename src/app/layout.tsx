import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";

import { siteMeta } from "@/content/site";

import "./globals.css";

const editorialSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-editorial",
});

const interfaceSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-interface",
  weight: ["400", "500", "600"],
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
      <body className={`${editorialSerif.variable} ${interfaceSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
