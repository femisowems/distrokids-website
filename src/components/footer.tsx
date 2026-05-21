"use client";

import { motion } from "framer-motion";
import Magnetic from "./magnetic";
import { ArrowUp } from "lucide-react";
import { footerLinks } from "@/data/distrokid-data";

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
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-24">
          
          {/* Brand statement */}
          <div className="lg:col-span-5 text-left flex flex-col items-start gap-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
              Independent Music Distribution
            </span>
            <p className="text-sm text-gray-400 font-light max-w-sm leading-relaxed">
              DistroKid is the fastest, easiest way for independent musicians to distribute their music to every major streaming platform worldwide.
            </p>
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

          {/* Product links */}
          <div className="lg:col-span-2 text-left flex flex-col gap-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 block mb-2">Product</span>
            {footerLinks.product.map((link) => (
              <a key={link.title} href={link.href} className="text-xs text-white/60 hover:text-electric-blue transition-colors w-max font-light">
                {link.title}
              </a>
            ))}
          </div>

          {/* Company links */}
          <div className="lg:col-span-2 text-left flex flex-col gap-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 block mb-2">Company</span>
            {footerLinks.company.map((link) => (
              <a key={link.title} href={link.href} className="text-xs text-white/60 hover:text-electric-blue transition-colors w-max font-light">
                {link.title}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="lg:col-span-2 text-left flex flex-col gap-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 block mb-2">Social</span>
            {footerLinks.social.map((link) => (
              <a key={link.title} href={link.href} target="_blank" rel="noopener noreferrer" className="text-xs text-white/60 hover:text-electric-blue transition-colors w-max font-light">
                {link.title}
              </a>
            ))}
          </div>

          {/* Back to top */}
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

        {/* Giant wordmark */}
        <div className="relative w-full select-none pointer-events-none mb-12">
          <h2 className="text-[17vw] font-black leading-none tracking-tighter uppercase text-white/[0.2] text-center font-mono">
            DISTROKID
          </h2>
        </div>

        {/* Legal bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-[9px] text-white/40">
          <span>&copy; {new Date().getFullYear()} DISTROKID INC. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS</a>
            <a href="#" className="hover:text-white transition-colors">SECURITY</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
