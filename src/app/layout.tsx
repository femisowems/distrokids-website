import type { Metadata } from "next";
import { Inter_Tight, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/custom-cursor";
import SmoothScroll from "@/components/smooth-scroll";

// Load premium editorial typography fonts from Google Fonts
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DistroKid — Own Your Sound. Independent Music Distribution.",
  description: "Distribute your music globally to Spotify, Apple Music, TikTok, Amazon Music and more. Retain 100% royalties, splits, and master rights. Reimagined as an immersive digital music experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-bg-dark text-foreground flex flex-col font-sans select-none">
        <SmoothScroll>
          {/* Global Cinematic Elements */}
          <div className="grain-overlay animate-noise" />
          <CustomCursor />
          
          <main className="flex-1 flex flex-col">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
