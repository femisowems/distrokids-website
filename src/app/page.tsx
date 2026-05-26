"use client";

import { motion } from "framer-motion";
import Hero from "@/components/hero";
import MusicEcosystem from "@/components/ecosystem";
import ArtistSuccess from "@/components/artist-success";
import AIGrowthTools from "@/components/ai-tools";
import ImmersiveStatistics from "@/components/statistics";
import CreatorFirstFeatures from "@/components/features";
import FAQSection from "@/components/faq";
import ExperimentalCTA from "@/components/experimental-cta";
import Footer from "@/components/footer";
import Magnetic from "@/components/magnetic";
import ThemeToggle from "@/components/theme-toggle";
import InterviewCompanion from "@/components/interview-companion";
import { Disc, ArrowRight } from "lucide-react";
import { navigationLinks } from "@/data/distrokid-data";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-bg-dark">
      
      {/* Floating Glassmorphic Header Navbar */}
      <header className="fixed top-6 left-0 right-0 z-50 w-full max-w-7xl mx-auto px-6 pointer-events-none">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto w-full glass-panel glass-panel-glow border-white/5 py-4 px-6 md:px-8 rounded-full flex justify-between items-center shadow-lg"
        >
          {/* Logo Brand Mark */}
          <div className="flex items-center gap-2.5">
            <Magnetic range={30} pullStrength={0.25}>
              <a href="#" className="flex items-center gap-2 select-none group font-mono" data-cursor="pointer">
                <Disc strokeWidth={1.8} className="w-5 h-5 text-electric-blue light:text-black stroke-current fill-none animate-[spin_6s_linear_infinite] group-hover:text-neon-purple transition-colors" />
                <span className="text-foreground text-xs font-black tracking-widest uppercase">DISTROKID</span>
                <span className="text-foreground/60 text-[9px] font-bold tracking-widest uppercase hidden sm:inline-block border-l border-white/10 pl-2">VOLTA</span>
              </a>
            </Magnetic>
          </div>

          {/* Nav Links - Mapped Dynamically from Rebrand Dataset */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest text-white/50">
            {navigationLinks.map((link) => (
              <Magnetic key={link.title} range={25} pullStrength={0.2}>
                <a href={link.href} className="hover:text-white transition-colors" data-cursor="pointer">
                  {link.title}
                </a>
              </Magnetic>
            ))}
          </nav>

          {/* CTA Header Action */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <a
              href="/signin"
              data-cursor="pointer"
              className="hidden sm:inline-block text-white/60 hover:text-white transition-colors font-mono text-[10px] uppercase tracking-widest"
            >
              Sign In
            </a>

            <Magnetic range={35} pullStrength={0.25}>
              <a
                href="/signup"
                data-cursor="magnetic"
                className="group relative inline-flex h-9 items-center justify-center rounded-full bg-white px-5 text-black font-semibold text-[10px] font-mono tracking-widest uppercase transition-transform duration-300 hover:scale-105"
              >
                <span>Sign Up</span>
                <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </header>

      {/* Structured Redesigned Sections */}
      <Hero />
      <MusicEcosystem />
      <ArtistSuccess />
      <AIGrowthTools />
      <ImmersiveStatistics />
      <CreatorFirstFeatures />
      <FAQSection />
      <ExperimentalCTA />
      <Footer />
      <InterviewCompanion />

    </div>
  );
}
