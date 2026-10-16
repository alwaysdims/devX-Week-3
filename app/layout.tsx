import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ScreenShot UNNES — Multimedia & Journalistic of Computer Science",
  description:
    "Wadah mahasiswa Ilmu Komputer UNNES fokus di bidang multimedia — fotografi, sinematografi, desain grafis, dan jurnalistik. Write, Camera, Action, Semangat Berkarya!!",
  keywords: [
    "ScreenShot UNNES",
    "HIMA ILKOM UNNES",
    "Multimedia",
    "Jurnalistik",
    "Fotografi",
    "Sinematografi",
    "DKV",
  ],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-[#EDEBDD] text-[#1C1C14] selection:bg-[#930000] selection:text-white">
        {children}
      </body>
    </html>
  );
}
