import type { Metadata } from "next";
import { Inter_Tight, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import CustomCursor from "@/components/custom-cursor";
import SmoothScroll from "@/components/smooth-scroll";
import { pageMetadata } from "@/data/distrokid-data";

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
  title: pageMetadata.title,
  description: pageMetadata.description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read theme cookie on the server to SSR the chosen theme and avoid hydration mismatch
  let themeCookie: string | undefined = undefined;
  try {
    const hdr = await headers();
    if (hdr) {
      // Try headers.get('cookie') if available
      if (typeof (hdr as any).get === "function") {
        const cookieHeader = (hdr as any).get("cookie") || "";
        themeCookie = cookieHeader.split(";").map((s: string) => s.trim()).find((s: string) => s.startsWith("theme="))?.split("=")[1];
      } else if (typeof (hdr as any)[Symbol.iterator] === "function") {
        // Iterate headers entries to find cookie
        let cookieHeader = "";
        for (const entry of hdr as any) {
          const [k, v] = entry as [string, string];
          if (k && k.toLowerCase() === "cookie") {
            cookieHeader = v;
            break;
          }
        }
        themeCookie = cookieHeader.split(";").map((s: string) => s.trim()).find((s: string) => s.startsWith("theme="))?.split("=")[1];
      }
    }
  } catch (e) {
    themeCookie = undefined;
  }
  const themeClass = themeCookie === "dark" ? "dark" : themeCookie === "light" ? "light" : "";
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${spaceGrotesk.variable} h-full antialiased ${themeClass}`}
    >
      <body className="min-h-full bg-bg-dark text-foreground flex flex-col font-sans select-none">
        <script
          // Pre-hydration theme setter to avoid flash-of-incorrect-theme
          dangerouslySetInnerHTML={{
            __html: `;(function(){try{var t=localStorage.getItem('theme');var root=document.documentElement;if(t==='light'||t==='dark'){root.classList.remove('light','dark');root.classList.add(t);}else{var m=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;root.classList.remove('light','dark');root.classList.add(m?'dark':'light');}}catch(e){}})();`,
          }}
        />
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
