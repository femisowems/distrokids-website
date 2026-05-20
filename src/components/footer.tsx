"use client";

import { motion } from "framer-motion";
import Magnetic from "./magnetic";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const localTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short"
  });

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative w-full bg-bg-dark border-t border-white/5 py-24 px-6 md:px-12 lg:px-24 overflow-hidden z-10"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-between">
        
        {/* Main Grid: links and details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-24">
          
          {/* Brand/System statement (Left) */}
          <div className="lg:col-span-5 text-left flex flex-col items-start gap-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
              Syndicated Distribution Protocol
            </span>
            <p className="text-sm text-gray-400 font-light max-w-sm leading-relaxed">
              DistroKid is the fastest, easiest way for independent musicians to distribute their recordings to global platforms. Designed for creators. Managed by engineers.
            </p>
            {/* Live Systems Dashboard widget */}
            <div className="flex flex-wrap gap-4 mt-4 font-mono text-[9px] text-white/50">
              <div className="flex items-center gap-1.5 bg-white/3 border border-white/5 px-2.5 py-1 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span>ALL STORES OPERATIONAL</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/3 border border-white/5 px-2.5 py-1 rounded">
                <span>TIME // {localTime}</span>
              </div>
            </div>
          </div>

          {/* Links Column 1: platform */}
          <div className="lg:col-span-2 text-left flex flex-col gap-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 block mb-2">Platform</span>
            <a href="#" className="text-xs text-white/60 hover:text-electric-blue transition-colors w-max font-light">Distribution</a>
            <a href="#" className="text-xs text-white/60 hover:text-electric-blue transition-colors w-max font-light">AI Promo Kits</a>
            <a href="#" className="text-xs text-white/60 hover:text-electric-blue transition-colors w-max font-light">Analytics Portal</a>
            <a href="#" className="text-xs text-white/60 hover:text-electric-blue transition-colors w-max font-light">Pricing Tier</a>
          </div>

          {/* Links Column 2: company */}
          <div className="lg:col-span-2 text-left flex flex-col gap-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 block mb-2">Company</span>
            <a href="#" className="text-xs text-white/60 hover:text-electric-blue transition-colors w-max font-light">About Us</a>
            <a href="#" className="text-xs text-white/60 hover:text-electric-blue transition-colors w-max font-light">Press Kit</a>
            <a href="#" className="text-xs text-white/60 hover:text-electric-blue transition-colors w-max font-light">Career Hub</a>
            <a href="#" className="text-xs text-white/60 hover:text-electric-blue transition-colors w-max font-light">Contact Node</a>
          </div>

          {/* Links Column 3: socials */}
          <div className="lg:col-span-2 text-left flex flex-col gap-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 block mb-2">Socials</span>
            <a href="#" className="text-xs text-white/60 hover:text-electric-blue transition-colors w-max font-light">Instagram</a>
            <a href="#" className="text-xs text-white/60 hover:text-electric-blue transition-colors w-max font-light">Spotify Playlists</a>
            <a href="#" className="text-xs text-white/60 hover:text-electric-blue transition-colors w-max font-light">YouTube Outlet</a>
            <a href="#" className="text-xs text-white/60 hover:text-electric-blue transition-colors w-max font-light">TikTok Feed</a>
          </div>

          {/* Back to top magnetic trigger */}
          <div className="lg:col-span-1 flex justify-start lg:justify-end">
            <Magnetic range={40} pullStrength={0.25}>
              <a
                href="#"
                onClick={scrollToTop}
                data-cursor="magnetic"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-electric-blue/30 bg-white/3 hover:bg-electric-blue/5 flex items-center justify-center text-white/60 hover:text-electric-blue transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4" />
              </a>
            </Magnetic>
          </div>

        </div>

        {/* Massive Typographic Branding Wordmark */}
        <div className="relative w-full select-none pointer-events-none mb-12">
          <h2 className="text-[17vw] font-black leading-none tracking-tighter uppercase text-white/[0.2] text-center font-mono">
            DISTROKID
          </h2>
        </div>

        {/* Legal/Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-[9px] text-white/40">
          <span>&copy; {new Date().getFullYear()} DISTROKID INC. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">PRIVACY CODE</a>
            <a href="#" className="hover:text-white transition-colors">STORE SYSTEM AGREEMENTS</a>
            <a href="#" className="hover:text-white transition-colors">SECURITY PIPES</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
