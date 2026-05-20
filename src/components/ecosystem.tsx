"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Music, 
  Smartphone, 
  Tv, 
  Disc, 
  Send
} from "lucide-react";
import Magnetic from "./magnetic";

// Fictional custom vector paths or beautiful representations for streaming logos
const platforms = [
  {
    name: "Spotify",
    color: "#1DB954",
    bg: "rgba(29, 185, 84, 0.1)",
    border: "rgba(29, 185, 84, 0.3)",
    angle: 0,
    radius: 200,
    desc: "100M+ Active Listeners"
  },
  {
    name: "Apple Music",
    color: "#FC3C44",
    bg: "rgba(252, 60, 68, 0.1)",
    border: "rgba(252, 60, 68, 0.3)",
    angle: 72,
    radius: 200,
    desc: "Lossless Audio Streaming"
  },
  {
    name: "TikTok",
    color: "#FF0050",
    bg: "rgba(255, 0, 80, 0.1)",
    border: "rgba(255, 0, 80, 0.3)",
    angle: 144,
    radius: 200,
    desc: "Viral Social Discovery"
  },
  {
    name: "YouTube",
    color: "#FF0000",
    bg: "rgba(255, 0, 0, 0.1)",
    border: "rgba(255, 0, 0, 0.3)",
    angle: 216,
    radius: 200,
    desc: "Global Video & Music Player"
  },
  {
    name: "Amazon Music",
    color: "#00A8E1",
    bg: "rgba(0, 168, 225, 0.1)",
    border: "rgba(0, 168, 225, 0.3)",
    angle: 288,
    radius: 200,
    desc: "Prime Integration Channels"
  }
];

export default function MusicEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePlatform, setActivePlatform] = useState<string | null>(null);
  const [draggedNode, setDraggedNode] = useState<string | null>(null);

  // Scroll bindings to rotate the orbit layout slightly
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const orbitRotation = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scaleCenter = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section
      id="ecosystem"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-28 px-6 md:px-12 bg-[#050507] overflow-hidden"
    >
      {/* Background Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric-blue/5 glow-blur pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-neon-purple/5 glow-blur pointer-events-none z-0" />

      {/* Headings */}
      <div className="relative z-10 text-center max-w-3xl mb-24">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-electric-blue font-mono text-xs uppercase tracking-[0.2em] block mb-3"
        >
          Dynamic Syndication Engine
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[8vw] sm:text-[5vw] lg:text-[3.5vw] font-black leading-tight tracking-tight uppercase"
        >
          GLOBAL REACH. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple">NO BOUNDARIES.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 font-light mt-4 text-base md:text-lg"
        >
          Push your master records to 100+ stores instantly. Hover and drag platforms to test their routing capabilities.
        </motion.p>
      </div>

      {/* Orbit & Interactive Canvas */}
      <div className="relative z-10 flex items-center justify-center w-full h-[550px] md:h-[600px] max-w-4xl">
        
        {/* Core Orbit Ring */}
        <motion.div 
          style={{ rotate: orbitRotation }}
          className="absolute w-[350px] md:w-[480px] h-[350px] md:h-[480px] rounded-full border border-white/5 pointer-events-none flex items-center justify-center"
        >
          <div className="w-[85%] h-[85%] rounded-full border border-white/3 pointer-events-none border-dashed animate-[spin_50s_linear_infinite]" />
        </motion.div>

        {/* Orbit Platform Nodes */}
        {platforms.map((plat) => {
          // Translate polar coordinates (angle, radius) to Cartesian coordinates (X, Y)
          const rad = (plat.angle * Math.PI) / 180;
          const xPos = Math.cos(rad) * 190;
          const yPos = Math.sin(rad) * 190;

          return (
            <div
              key={plat.name}
              style={{
                position: "absolute",
                transform: `translate(${xPos}px, ${yPos}px)`,
              }}
              className="z-20"
            >
              <motion.div
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.4}
                onDragStart={() => setDraggedNode(plat.name)}
                onDragEnd={() => setDraggedNode(null)}
                whileHover={{ scale: 1.15 }}
                onHoverStart={() => setActivePlatform(plat.name)}
                onHoverEnd={() => setActivePlatform(null)}
                data-cursor="drag"
                data-cursor-text="PULL"
                style={{
                  backgroundColor: plat.bg,
                  borderColor: plat.border,
                  boxShadow: activePlatform === plat.name ? `0 0 25px ${plat.color}40` : "none",
                }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border flex flex-col items-center justify-center cursor-grab active:cursor-grabbing transition-shadow duration-300"
              >
                {/* Platform Icon representations */}
                {plat.name === "Spotify" && (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill={plat.color}>
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.982-.336.075-.668-.135-.744-.47-.077-.337.135-.668.47-.745 3.856-.88 7.15-.506 9.82 1.13.294.178.387.563.207.86zm1.225-2.72c-.227.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.076-1.183-.413.125-.85-.107-.975-.52-.125-.413.107-.85.52-.975 3.66-1.11 8.223-.573 11.343 1.347.37.227.49.707.26 1.073zm.107-2.836C14.492 8.76 8.7 8.567 5.353 9.58c-.512.156-1.054-.137-1.21-.65-.156-.513.136-1.054.65-1.21 3.845-1.167 10.233-.94 14.195 1.413.46.273.61.87.337 1.33-.273.46-.87.61-1.33.337z"/>
                  </svg>
                )}
                {plat.name === "Apple Music" && <Smartphone style={{ color: plat.color }} className="w-6 h-6 md:w-7 md:h-7" />}
                {plat.name === "TikTok" && <Music style={{ color: plat.color }} className="w-6 h-6 md:w-7 md:h-7" />}
                {plat.name === "YouTube" && <Tv style={{ color: plat.color }} className="w-6 h-6 md:w-7 md:h-7" />}
                {plat.name === "Amazon Music" && <Disc style={{ color: plat.color }} className="w-6 h-6 md:w-7 md:h-7" />}

                {/* Subtitle floating label inside node */}
                <span className="text-[7px] text-white/40 uppercase font-mono tracking-widest mt-1 hidden md:block">
                  {plat.name.split(" ")[0]}
                </span>
              </motion.div>
            </div>
          );
        })}

        {/* Central Master Artist Card */}
        <motion.div
          style={{ scale: scaleCenter }}
          className="relative z-10 w-[240px] md:w-[280px] h-[340px] md:h-[380px] rounded-2xl glass-panel glass-panel-glow border-white/10 p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
        >
          {/* Neon vertical alignment accent */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-electric-blue via-neon-purple to-electric-blue" />
          
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
              <Disc className="w-5 h-5 text-electric-blue animate-[spin_10s_linear_infinite]" />
            </div>
            <div className="px-2 py-0.5 rounded border border-green-500/20 bg-green-500/5 text-green-400 font-mono text-[9px] uppercase tracking-wider">
              ONLINE
            </div>
          </div>

          <div className="my-6">
            <span className="text-[10px] text-white/40 font-mono uppercase tracking-widest block mb-1">DK DISTRIBUTION</span>
            <h3 className="text-xl font-bold tracking-tight text-white uppercase font-mono">VOLTA MASTER CORE</h3>
            <p className="text-xs text-white/50 font-sans mt-2">
              Routing node status active. Releasing globally in 24 hours.
            </p>
          </div>

          <div className="border-t border-white/5 pt-4 flex flex-col gap-2.5 font-mono text-[10px] text-white/60">
            <div className="flex justify-between">
              <span>STATUS:</span>
              <span className="text-white font-semibold">100% SYNCED</span>
            </div>
            <div className="flex justify-between">
              <span>ACTIVE PIPES:</span>
              <span className="text-electric-blue font-bold">140 STORES</span>
            </div>
            <div className="flex justify-between">
              <span>INTEGRATION:</span>
              <span className="text-neon-purple font-bold">AI ENHANCED</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-white/40">
            <span className="text-[9px] font-mono">NODE DK-5509</span>
            <Send className="w-3.5 h-3.5 text-electric-blue" />
          </div>
        </motion.div>

        {/* Ambient Orbit Details card overlay */}
        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 z-30">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: activePlatform ? 1 : 0.4,
              y: activePlatform ? 0 : 5
            }}
            className="glass-panel px-6 py-3 rounded-full border border-white/10 text-center font-mono text-[11px] shadow-lg max-w-[280px]"
          >
            {activePlatform ? (
              <span>
                ROUTE: <strong className="text-electric-blue">{activePlatform.toUpperCase()}</strong>
                <br />
                <span className="text-white/50 text-[9px]">
                  {platforms.find(p => p.name === activePlatform)?.desc}
                </span>
              </span>
            ) : draggedNode ? (
              <span className="text-neon-purple font-semibold animate-pulse">TESTING NODE ROUTE FEEDBACK...</span>
            ) : (
              <span className="text-white/40">HOVER NODES TO MAP DATA PIPES</span>
            )}
          </motion.div>
        </div>

      </div>

    </section>
  );
}
