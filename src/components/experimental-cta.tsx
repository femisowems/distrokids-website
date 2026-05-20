"use client";

import { motion } from "framer-motion";
import Magnetic from "./magnetic";
import { ArrowUpRight } from "lucide-react";

export default function ExperimentalCTA() {
  return (
    <section
      className="relative min-h-[90vh] w-full flex flex-col justify-center items-center py-32 bg-bg-dark border-t border-white/5 overflow-hidden"
    >
      {/* Hyper-glowing portal background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full bg-electric-blue/10 glow-blur animate-[pulse_5s_infinite] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-neon-purple/5 glow-blur pointer-events-none z-0" />

      {/* Infinite running text marquee banner (Top ticker) */}
      <div className="absolute top-12 left-0 right-0 w-full overflow-hidden whitespace-nowrap opacity-10 pointer-events-none select-none z-0">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="inline-block font-mono text-[7vw] font-black uppercase tracking-[0.2em] text-white"
        >
          OWN YOUR SOUND // CHOOSE FREEDOM // UPLOAD EVERYWHERE // KEEP 100% // INDEPENDENCE NOW //&nbsp;
        </motion.div>
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="inline-block font-mono text-[7vw] font-black uppercase tracking-[0.2em] text-white"
        >
          OWN YOUR SOUND // CHOOSE FREEDOM // UPLOAD EVERYWHERE // KEEP 100% // INDEPENDENCE NOW //&nbsp;
        </motion.div>
      </div>

      {/* Infinite running text marquee banner (Bottom ticker - opposite direction) */}
      <div className="absolute bottom-12 left-0 right-0 w-full overflow-hidden whitespace-nowrap opacity-10 pointer-events-none select-none z-0">
        <motion.div
          animate={{ x: [-1000, 0] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="inline-block font-mono text-[7vw] font-black uppercase tracking-[0.2em] text-white"
        >
          VOLTA SYNDICATE // DISTROKID CORE // INDEPENDENT ARTIST ENGINE // DIGITAL FREEDOM //&nbsp;
        </motion.div>
        <motion.div
          animate={{ x: [-1000, 0] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="inline-block font-mono text-[7vw] font-black uppercase tracking-[0.2em] text-white"
        >
          VOLTA SYNDICATE // DISTROKID CORE // INDEPENDENT ARTIST ENGINE // DIGITAL FREEDOM //&nbsp;
        </motion.div>
      </div>

      {/* Central Content Portal */}
      <div className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center">
        
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-electric-blue font-mono text-xs uppercase tracking-[0.25em] block mb-6"
        >
          Final Syndicate Gateway
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[10vw] sm:text-[7vw] lg:text-[5vw] font-black leading-[0.9] tracking-tighter uppercase mb-12 select-none"
        >
          The future of <br />
          independent music <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple">starts here.</span>
        </motion.h2>

        {/* Large Magnetic Conversion Button */}
        <Magnetic range={80} pullStrength={0.3}>
          <motion.a
            href="#"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, type: "spring", stiffness: 100, damping: 15 }}
            data-cursor="magnetic"
            className="group relative inline-flex h-28 w-28 md:h-36 md:w-36 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 duration-300 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.15)]"
          >
            {/* Glowing ring borders */}
            <div className="absolute inset-0 rounded-full border border-white/20 group-hover:scale-110 group-hover:border-electric-blue/40 transition-all duration-300" />
            <div className="absolute inset-2 rounded-full border border-black/5 group-hover:scale-105 transition-all duration-300" />
            
            <div className="flex flex-col items-center justify-center">
              <span className="font-mono text-[9px] md:text-[10px] font-black uppercase tracking-wider block mb-1">ENTER</span>
              <span className="font-sans text-xs md:text-sm font-extrabold uppercase tracking-tight block">PLATFORM</span>
              <ArrowUpRight className="w-4 h-4 mt-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
            </div>
          </motion.a>
        </Magnetic>

      </div>
    </section>
  );
}
