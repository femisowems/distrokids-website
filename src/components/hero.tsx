"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Magnetic from "./magnetic";
import TextReveal from "./text-reveal";
import { Play, ArrowUpRight } from "lucide-react";
import { heroContent } from "@/data/distrokid-data";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax transitions for custom depth
  const yText = useTransform(scrollY, [0, 600], [0, 100]);
  const yAlbum = useTransform(scrollY, [0, 800], [0, -80]);
  const rotateAlbum = useTransform(scrollY, [0, 800], [8, -4]);
  const scaleAlbum = useTransform(scrollY, [0, 800], [1, 1.04]);
  const opacityGlow = useTransform(scrollY, [0, 600], [0.6, 0.2]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-24 px-6 md:px-12 lg:px-24 bg-bg-dark"
    >
      {/* Dynamic Ambient Glow Backdrops */}
      <motion.div 
        style={{ opacity: opacityGlow }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute top-[20%] left-[10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-electric-blue/15 glow-blur animate-[pulse_6s_infinite] mix-blend-screen" />
        <div className="absolute bottom-[15%] right-[5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-neon-purple/10 glow-blur animate-[pulse_8s_infinite_1s] mix-blend-screen" />
      </motion.div>

      {/* Grid Canvas Mesh */}
      <div className="absolute inset-0 grid-mesh pointer-events-none z-0" />

      {/* Main Content Wrap */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Typographic Hero Text Column */}
        <motion.div 
          style={{ y: yText }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Release status indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-electric-blue/20 bg-electric-blue/5 text-electric-blue text-xs font-mono uppercase tracking-[0.15em] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-ping" />
            <span>{heroContent.eyebrow}</span>
          </motion.div>

          {/* Kinetic Huge Headings */}
          <h1 className="text-[11vw] sm:text-[8vw] lg:text-[5.5vw] font-black leading-[0.85] tracking-tighter uppercase select-none mb-6">
            <span className="block text-foreground">Own your</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-electric-blue to-neon-purple">Sound.</span>
          </h1>

          <div className="max-w-xl mb-12">
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed font-sans">
              <TextReveal 
                text={heroContent.subtitle}
                delay={0.15}
              />
            </p>
          </div>

          {/* Magnetic CTAs */}
          <div className="flex flex-wrap gap-6 items-center">
            <Magnetic range={50} pullStrength={0.25}>
              <a 
                href="#ecosystem"
                data-cursor="magnetic"
                className="group relative inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-black font-semibold text-sm tracking-wide transition-transform hover:scale-105 duration-350 active:scale-95"
              >
                <span>{heroContent.ctaPrimary}</span>
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
              </a>
            </Magnetic>

            <Magnetic range={50} pullStrength={0.25}>
              <button 
                data-cursor="pointer"
                className="inline-flex h-14 items-center gap-3 px-6 rounded-full border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 bg-black/[0.03] dark:bg-white/5 hover:bg-black/[0.06] dark:hover:bg-white/10 text-foreground font-medium text-sm transition-all duration-300"
              >
                <Play className="w-4 h-4 fill-current text-current" />
                <span>{heroContent.ctaSecondary}</span>
              </button>
            </Magnetic>
          </div>
        </motion.div>

        {/* Cinematic Album Art column */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative h-[450px] md:h-[550px] w-full">
          {/* Animated 3D/Parallax Container */}
          <motion.div 
            style={{ y: yAlbum, rotate: rotateAlbum, scale: scaleAlbum }}
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 8 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            data-cursor="view"
            data-cursor-text="PLAY"
            className="relative w-[280px] sm:w-[350px] md:w-[400px] aspect-square rounded-2xl overflow-hidden glass-panel glass-panel-glow border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.8)] group"
          >
            {/* Visual Album Artwork */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/album_art_hero.png"
                alt="Cyberphoria Album"
                fill
                priority
                sizes="(max-width: 768px) 350px, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Glare Glass Frame overlay */}
            <div className="absolute inset-0 overlay-glare pointer-events-none z-10" />

            {/* Fictional Release Stamp Details */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end text-white font-mono">
              <div>
                <span className="text-[10px] text-electric-blue uppercase tracking-widest block mb-1">DK EXCLUSIVE</span>
                <span className="text-sm font-bold tracking-tight block">CHRONOS ARC</span>
                <span className="text-[10px] text-white/50">CYBERPHORIA LP</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-white/50 block">RELEASE NO.</span>
                <span className="text-sm font-semibold text-white/90">DK-9941</span>
              </div>
            </div>

            {/* Neon Border Glow Lines */}
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-70" />
          </motion.div>

          {/* Floating UI Widget - Live Tracking stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="absolute bottom-4 left-4 sm:left-12 glass-panel p-4 rounded-xl border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.5)] z-30 flex items-center gap-4 max-w-[240px]"
          >
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shrink-0" />
            <div className="font-mono text-left">
              <span className="text-[9px] text-white/50 uppercase block tracking-wider font-extrabold">{heroContent.stats[0].value} {heroContent.stats[0].label.toUpperCase()}</span>
              <span className="text-xs font-bold text-white block">98k streams/sec</span>
              <span className="text-[9px] text-electric-blue block">Live distribution active</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Soundwave Interactive Simulation at the bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 h-16 w-full flex items-end justify-between px-4 opacity-15 pointer-events-none z-0">
        {Array.from({ length: 48 }).map((_, i) => {
          const delay = i * 0.08;
          return (
            <div 
              key={i}
              style={{
                height: `${Math.sin(i * 0.3) * 35 + 45}%`,
                animationDelay: `${delay}s`,
              }}
              className="w-[2px] bg-electric-blue rounded-t animate-[pulse_2s_infinite]"
            />
          );
        })}
      </div>
    </section>
  );
}
