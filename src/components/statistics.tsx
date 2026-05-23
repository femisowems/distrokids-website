"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { statistics } from "@/data/distrokid-data";

export default function ImmersiveStatistics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-15%" });
  
  // Real-time ticking royalty counter
  const [royaltyCount, setRoyaltyCount] = useState(1248931042);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoyaltyCount((prev) => prev + Math.floor(Math.random() * 4) + 1);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        mass: 0.5
      }
    }
  } as const;

  // Use the full stats from the dataset (Independent artists, Streaming platforms, Paid to artists, etc.), plus our live royalty ticker
  const displayStats = statistics.slice(0, 4);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[76vh] w-full flex items-center py-24 px-6 md:px-12 lg:px-24 bg-bg-dark border-t border-black/10 dark:border-white/5 overflow-hidden"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.35fr_0.85fr] gap-12 items-center">
        
        {/* Left headline */}
        <div className="text-left lg:pr-6">
          <span className="text-electric-blue font-mono text-xs uppercase tracking-[0.2em] block mb-3">
            Ecosystem Metrics
          </span>
          <h2 className="text-[9vw] sm:text-[6vw] lg:text-[4vw] font-black leading-[0.86] tracking-tighter uppercase mb-4 max-w-[12ch]">
            The Future Of<br />
            <span className="block">Independent Music</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple">Starts Here.</span>
          </h2>
          <p className="max-w-[28rem] text-gray-500 dark:text-gray-400 font-light text-sm md:text-base leading-relaxed">
            DistroKid powers millions of artists globally, moving releases quickly with a distribution system built for modern music.
          </p>
        </div>

        {/* Right counters */}
        <motion.div 
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-10"
        >
          {/* Dynamic stats from dataset */}
          {displayStats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants} className="border-b border-black/10 dark:border-white/5 pb-8">
              <span className="text-[10px] text-black/45 dark:text-white/40 font-mono tracking-widest block mb-2 uppercase">
                {stat.label.toUpperCase()}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-[10vw] sm:text-[6.5vw] lg:text-[4.25vw] font-black leading-none tracking-tighter text-foreground dark:text-white font-mono">
                  {stat.value}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Live ticking royalty accumulator */}
          <motion.div variants={itemVariants} className="pb-4">
            <span className="text-[10px] text-electric-blue font-mono tracking-widest block mb-2 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-ping" />
              LIVE ROYALTY DISPENSATION (USD)
            </span>
            <div className="flex items-baseline gap-2">
                <span className="text-[8vw] sm:text-[5.75vw] lg:text-[3.8vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-electric-blue to-neon-purple font-mono select-none">
                ${formatNumber(royaltyCount)}
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-light mt-2 uppercase tracking-wide">
              Cumulative independent earnings processed and distributed
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
