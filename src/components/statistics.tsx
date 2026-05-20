"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function ImmersiveStatistics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-15%" });
  
  // Real-time ticking royalty counter representing continuous global streaming payouts
  const [royaltyCount, setRoyaltyCount] = useState(1248931042);

  useEffect(() => {
    // Tick the royalty counter upward by random amounts every second
    const interval = setInterval(() => {
      setRoyaltyCount((prev) => prev + Math.floor(Math.random() * 4) + 1);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // Format large number with commas
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

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] w-full flex items-center py-32 px-6 md:px-12 lg:px-24 bg-bg-dark border-t border-white/5 overflow-hidden"
    >
      {/* Decorative Parallax Mesh Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Typographic Hook Statement (Left) */}
        <div className="lg:col-span-5 text-left">
          <span className="text-electric-blue font-mono text-xs uppercase tracking-[0.2em] block mb-3">
            Ecosystem Metrics
          </span>
          <h2 className="text-[9vw] sm:text-[6vw] lg:text-[4vw] font-black leading-[0.9] tracking-tighter uppercase mb-6">
            THE SCALE OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">INDEPENDENCE.</span>
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed">
            DistroKid acts as the central global hub for over two million artists. Our automated high-frequency pipes process more releases daily than any corporate label in history.
          </p>
        </div>

        {/* Dynamic Massive Counters (Right) */}
        <motion.div 
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="lg:col-span-7 flex flex-col gap-12"
        >
          {/* Stat Item 1: Artist count */}
          <motion.div variants={itemVariants} className="border-b border-white/5 pb-8">
            <span className="text-[10px] text-white/40 font-mono tracking-widest block mb-2 uppercase">CREATOR HIGHWAY</span>
            <div className="flex items-baseline gap-2">
              <span className="text-[12vw] sm:text-[8vw] lg:text-[6vw] font-black leading-none tracking-tighter text-white font-mono">
                2,000,000+
              </span>
            </div>
            <p className="text-xs text-gray-400 font-light mt-2 uppercase tracking-wide">
              Active artists uploading master records
            </p>
          </motion.div>

          {/* Stat Item 2: Partner outlets */}
          <motion.div variants={itemVariants} className="border-b border-white/5 pb-8">
            <span className="text-[10px] text-white/40 font-mono tracking-widest block mb-2 uppercase">SYNDICATED NETWORKS</span>
            <div className="flex items-baseline gap-2">
              <span className="text-[12vw] sm:text-[8vw] lg:text-[6vw] font-black leading-none tracking-tighter text-white font-mono">
                100+
              </span>
            </div>
            <p className="text-xs text-gray-400 font-light mt-2 uppercase tracking-wide">
              Global streaming platforms & social networks mapped
            </p>
          </motion.div>

          {/* Stat Item 3: Live ticking royalty accumulator */}
          <motion.div variants={itemVariants} className="pb-4">
            <span className="text-[10px] text-electric-blue font-mono tracking-widest block mb-2 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-ping" />
              LIVE ROYALTY DISPENSATION (USD)
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-[9vw] sm:text-[7vw] lg:text-[4.5vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-[#00a2ff] to-neon-purple font-mono select-none">
                ${formatNumber(royaltyCount)}
              </span>
            </div>
            <p className="text-xs text-gray-400 font-light mt-2 uppercase tracking-wide">
              Cumulative independent earnings processed and distributed
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
