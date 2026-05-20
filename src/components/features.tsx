"use client";

import { motion } from "framer-motion";
import { 
  Coins, 
  Zap, 
  Users, 
  Infinity as InfinityIcon, 
  CheckSquare, 
  BarChart 
} from "lucide-react";
import Magnetic from "./magnetic";

const features = [
  {
    icon: Coins,
    title: "100% Royalty Ownership",
    desc: "We process payouts straight from digital platforms. You keep every single dollar of your master royalties, streaming revenues, and publishing cuts.",
    glow: "rgba(0, 240, 255, 0.05)"
  },
  {
    icon: Zap,
    title: "High-Velocity Distribution",
    desc: "Bypass standard corporate distribution loops. Send your music to partner stores in less than 24 hours with immediate ingestion pipes.",
    glow: "rgba(157, 78, 221, 0.05)"
  },
  {
    icon: Users,
    title: "Automated Instant Splits",
    desc: "Coordinate collaborator shares inside the portal. DistroKid splits royalties automatically, paying producers or bandmates directly each month.",
    glow: "rgba(0, 240, 255, 0.05)"
  },
  {
    icon: InfinityIcon,
    title: "Unlimited Album Uploads",
    desc: "Release unlimited tracks, singles, and multi-disc albums. Pay one flat subscription without any high-frequency release limits.",
    glow: "rgba(157, 78, 221, 0.05)"
  },
  {
    icon: CheckSquare,
    title: "Instant Verification Profiles",
    desc: "Gain immediate access to Spotify for Artists and Apple Music dashboards. Secure the verified artist blue checkmark automatically.",
    glow: "rgba(0, 240, 255, 0.05)"
  },
  {
    icon: BarChart,
    title: "Granular Analytics Portal",
    desc: "Track daily platform sales and streaming demographics. Filter charts by geographic region, target stores, and active campaigns.",
    glow: "rgba(157, 78, 221, 0.05)"
  }
];

export default function CreatorFirstFeatures() {
  return (
    <section
      id="features"
      className="relative min-h-screen w-full py-32 px-6 md:px-12 lg:px-24 bg-[#050507] border-t border-white/5 overflow-hidden"
    >
      {/* Aesthetic Drifting Spotlights */}
      <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] rounded-full bg-electric-blue/5 glow-blur pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-15%] w-[500px] h-[500px] rounded-full bg-neon-purple/5 glow-blur pointer-events-none z-0" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-24 text-left">
          <span className="text-electric-blue font-mono text-xs uppercase tracking-[0.2em] block mb-3">
            Core Architecture Specs
          </span>
          <h2 className="text-[9vw] sm:text-[6vw] lg:text-[4vw] font-black leading-[0.9] tracking-tighter uppercase mb-6">
            ENGINEERED FOR THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">INDEPENDENT CREATOR.</span>
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg">
            Forget archaic label agreements. DistroKid provides the high-performance technical infrastructure to distribute, manage, and monetize your records on your own terms.
          </p>
        </div>

        {/* Asymmetrical Broken Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            
            // Calculate broken grid asymmetrical pixel offset tags for that designer look
            const offsetStyle = 
              i % 3 === 1 
                ? "md:translate-y-6" 
                : i % 3 === 2 
                  ? "md:-translate-y-6" 
                  : "";

            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                style={{
                  boxShadow: `0 0 40px ${feat.glow}`,
                }}
                className={`relative p-8 rounded-2xl border border-white/5 bg-bg-card/50 backdrop-blur-xl flex flex-col justify-between group transition-all duration-300 ${offsetStyle}`}
              >
                {/* Floating Glow dot */}
                <div className="absolute top-6 right-6 w-1.5 h-1.5 rounded-full bg-electric-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/3 flex items-center justify-center text-white/60 group-hover:text-electric-blue group-hover:border-electric-blue/30 group-hover:bg-electric-blue/5 transition-all duration-300 mb-8">
                    <Icon className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12" />
                  </div>

                  {/* Text Details */}
                  <h3 className="text-lg font-bold text-white mb-3 uppercase font-mono tracking-tight">
                    {feat.title}
                  </h3>
                  
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                {/* Micro Action link line at bottom */}
                <div className="mt-8 border-t border-white/5 pt-4 flex items-center justify-between text-white/30 group-hover:text-white/60 transition-colors">
                  <span className="font-mono text-[9px] uppercase tracking-wider">Specs Active</span>
                  <div className="w-4 h-[1px] bg-white/20 group-hover:bg-electric-blue group-hover:w-8 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
