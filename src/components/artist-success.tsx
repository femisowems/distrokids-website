"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowLeftRight, Heart, Star } from "lucide-react";

const stories = [
  {
    name: "Luna Sterling",
    genre: "Synth-Pop Pioneer",
    magazine: "VOLTA // THE ELECTRIC ISSUE",
    tagline: "THE NEW SOUND OF SYNTH-POP",
    issue: "ISSUE 09",
    image: "/images/artist_success_one.png",
    quote: "DistroKid changed how I release. From my bedroom straight into Spotify editorial playlists, with zero middlemen and absolute ownership of my master files.",
    stats: "45M+ STREAMS"
  },
  {
    name: "Elias Khain",
    genre: "Electronic Producer",
    magazine: "HARMONY // FUTURE SOUNDS",
    tagline: "SYNTHWAVE LEGACY SERIES",
    issue: "ISSUE 48",
    image: "/images/artist_success_two.png",
    quote: "Splits are processed instantly to my session musicians directly inside DistroKid. It keeps our independent collaborations completely frictionless.",
    stats: "12M+ STREAMS"
  },
  {
    name: "Aiden Vance",
    genre: "Indie-Rock Vocalist",
    magazine: "SONIC CURRENTS // VOICE",
    tagline: "RAW. REAL. REBELLIOUS.",
    issue: "ISSUE 12",
    image: "/images/artist_success_three.png",
    quote: "I don't need a corporate label telling me when to drop tracks. I upload instantly, track statistics, and keep 100% of my royalties.",
    stats: "28M+ STREAMS"
  }
];

export default function ArtistSuccess() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  return (
    <section
      id="success-stories"
      className="relative min-h-screen w-full flex flex-col justify-center py-32 bg-bg-dark border-t border-white/5 overflow-hidden"
    >
      {/* Background Neon Elements */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-electric-blue/5 glow-blur pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-neon-purple/5 glow-blur pointer-events-none z-0" />

      {/* Header Info */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-electric-blue font-mono text-xs uppercase tracking-[0.2em] block mb-3">
            Creative Features
          </span>
          <h2 className="text-[9vw] sm:text-[6vw] lg:text-[4vw] font-black leading-[0.9] tracking-tighter uppercase">
            Artist success <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Stories.</span>
          </h2>
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px] text-white/40 uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded-full shrink-0">
          <ArrowLeftRight className="w-3.5 h-3.5 text-electric-blue animate-pulse" />
          <span>Drag horizontally to explore</span>
        </div>
      </div>

      {/* Magazine Editorial Draggable Slider */}
      <div className="relative z-10 w-full overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing">
        <motion.div
          drag="x"
          dragConstraints={{ left: -600, right: 0 }}
          dragElastic={0.2}
          data-cursor="drag"
          data-cursor-text="DRAG"
          className="flex gap-8 md:gap-12 px-6 md:px-12 lg:px-24 py-4 w-max"
        >
          {stories.map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="relative w-[320px] sm:w-[400px] md:w-[450px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-white/10 group flex flex-col justify-between p-8"
            >
              {/* Cover Art Image Background */}
              <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  sizes="(max-width: 768px) 400px, 450px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Shading Film overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none z-10" />

              {/* Magazine Head details */}
              <div className="relative z-20 flex justify-between items-start text-white font-mono text-[10px] uppercase tracking-wider">
                <div>
                  <span className="block text-electric-blue font-extrabold">{story.magazine}</span>
                  <span className="text-white/40 block mt-0.5">{story.issue}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/40 border border-white/10 px-2 py-1 rounded-full backdrop-blur-md">
                  <Star className="w-3.5 h-3.5 fill-electric-blue text-electric-blue" />
                  <span className="font-bold text-[9px]">{story.stats}</span>
                </div>
              </div>

              {/* Central Dynamic Hidden Hover Quote Container */}
              <div className="relative z-20 my-auto pointer-events-none">
                <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out glass-panel p-5 rounded-xl border border-white/10 shadow-2xl backdrop-blur-lg">
                  <span className="text-[24px] text-electric-blue block leading-none font-serif mb-2">“</span>
                  <p className="text-white text-xs md:text-sm font-sans font-light leading-relaxed">
                    {story.quote}
                  </p>
                </div>
              </div>

              {/* Magazine Footer details */}
              <div className="relative z-20 flex justify-between items-end text-white">
                <div>
                  <span className="text-[9px] font-mono text-white/50 block mb-1 uppercase tracking-widest">
                    {story.genre}
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight font-sans leading-none">
                    {story.name}
                  </h3>
                </div>
                <div className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
                  <Heart className="w-4 h-4 text-white/60 hover:text-red-500 transition-colors" />
                </div>
              </div>

              {/* Neon accent glow bottom */}
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative vertical lines */}
      <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-white/3 pointer-events-none" />
      <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-white/3 pointer-events-none" />
    </section>
  );
}
