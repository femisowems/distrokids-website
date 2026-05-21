"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { testimonials } from "@/data/distrokid-data";

export default function ArtistSuccess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xSlide = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      id="success-stories"
      ref={containerRef}
      className="relative w-full py-32 bg-bg-dark border-t border-white/5 overflow-hidden"
    >
      {/* Section Header */}
      <div className="px-6 md:px-12 lg:px-24 mb-16 max-w-7xl mx-auto">
        <span className="text-electric-blue font-mono text-xs uppercase tracking-[0.2em] block mb-3">
          Artist Roster // Independent Syndicate
        </span>
        <h2 className="text-[9vw] sm:text-[6vw] lg:text-[4vw] font-black leading-[0.9] tracking-tighter uppercase">
          BUILT BY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            INDEPENDENT ARTISTS.
          </span>
        </h2>
      </div>

      {/* Horizontal drag slider */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ left: -(testimonials.length * 380 - 1200), right: 0 }}
          dragElastic={0.05}
          data-cursor="drag"
          data-cursor-text="DRAG"
          style={{ x: 0 }}
          className="flex gap-6 px-6 md:px-12 lg:px-24 cursor-grab active:cursor-grabbing select-none"
        >
          {testimonials.map((artist, i) => (
            <motion.div
              key={artist.artist}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="relative shrink-0 w-[300px] sm:w-[340px] h-[460px] rounded-2xl overflow-hidden border border-white/8 group"
            >
              {/* Artist Portrait */}
              <div className="absolute inset-0">
                <Image
                  src={artist.image}
                  alt={artist.artist}
                  fill
                  sizes="340px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

              {/* Magazine header stamp */}
              <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-start px-5 pt-5 font-mono text-[9px] text-white/50 uppercase tracking-widest">
                <span>{artist.magazine}</span>
                <span>{artist.issue}</span>
              </div>

              {/* Artist Info bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                <span className="text-[9px] font-mono text-electric-blue uppercase tracking-widest block mb-1">
                  {artist.tagline}
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-0.5">
                  {artist.artist}
                </h3>
                <p className="text-xs text-white/50 font-light mb-3">{artist.genre}</p>
                <div className="text-[9px] font-mono text-white/40 border-t border-white/10 pt-3">
                  {artist.stats}
                </div>
              </div>

              {/* Hover quote reveal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-30 flex items-center justify-center p-8 bg-black/80 backdrop-blur-sm"
              >
                <blockquote className="text-center">
                  <p className="text-white font-light text-sm leading-relaxed mb-4 italic">
                    &ldquo;{artist.quote}&rdquo;
                  </p>
                  <cite className="text-electric-blue font-mono text-xs uppercase tracking-widest not-italic">
                    — {artist.artist}
                  </cite>
                </blockquote>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Drag hint */}
      <div className="px-6 md:px-12 lg:px-24 mt-8 max-w-7xl mx-auto">
        <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">
          ← Drag to explore artist stories
        </span>
      </div>
    </section>
  );
}
