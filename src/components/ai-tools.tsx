"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Sparkles, 
  BarChart2, 
  Share2, 
  TrendingUp, 
  Calendar, 
  ArrowRight,
  CheckCircle,
  Activity,
  Globe
} from "lucide-react";
import Magnetic from "./magnetic";

const aiToolsList = [
  {
    id: "audience",
    title: "Audience Live Analytics",
    desc: "Scan real-time user engagement and track playlist placements across platforms.",
    icon: BarChart2,
    badge: "LIVE FEED"
  },
  {
    id: "viral",
    title: "Viral Prediction Engine",
    desc: "Calculate song hook velocity and estimate performance probability before release.",
    icon: TrendingUp,
    badge: "94% ACCURACY"
  },
  {
    id: "promo",
    title: "Automated Promo Kits",
    desc: "Instantly compile studio canvas visuals, custom social assets, and smart-links.",
    icon: Share2,
    badge: "1-CLICK GENERATOR"
  },
  {
    id: "optimizer",
    title: "Smart Release Optimizer",
    desc: "Pinpoint target calendar dates and prime time zones for streaming algorithm sync.",
    icon: Calendar,
    badge: "ALGORITHM BOOSTER"
  }
];

export default function AIGrowthTools() {
  const [selectedTool, setSelectedTool] = useState("audience");

  return (
    <section
      id="ai-tools"
      className="relative min-h-screen w-full flex flex-col justify-center py-28 px-6 md:px-12 lg:px-24 bg-[#050508] border-t border-white/5 overflow-hidden"
    >
      {/* Background Lights */}
      <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] rounded-full bg-electric-blue/5 glow-blur pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-neon-purple/5 glow-blur pointer-events-none z-0" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-electric-blue font-mono text-xs uppercase tracking-[0.2em] block mb-3">
            Autonomous Artist Acceleration
          </span>
          <h2 className="text-[9vw] sm:text-[6vw] lg:text-[4.5vw] font-black leading-[0.9] tracking-tighter uppercase mb-6">
            AI-powered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple">growth tools.</span>
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg">
            Supercharge your indie career with DistroKid&apos;s intelligent utility network. Seamless optimization from composition to viral charts.
          </p>
        </div>

        {/* Interactive Dashboard Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Tool Selectors Panel (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {aiToolsList.map((tool) => {
              const Icon = tool.icon;
              const isActive = selectedTool === tool.id;

              return (
                <button
                  key={tool.id}
                  onClick={() => setSelectedTool(tool.id)}
                  data-cursor="pointer"
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    isActive 
                      ? "bg-white/5 border-electric-blue shadow-[0_0_30px_rgba(0,240,255,0.05)]" 
                      : "bg-transparent border-white/5 hover:border-white/10 hover:bg-white/2"
                  }`}
                >
                  <div className={`p-3 rounded-xl border shrink-0 ${
                    isActive ? "border-electric-blue bg-electric-blue/10 text-electric-blue" : "border-white/10 bg-white/3 text-white/50"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className={`text-base font-bold ${isActive ? "text-white" : "text-white/70"}`}>
                        {tool.title}
                      </h3>
                      <span className={`font-mono text-[8px] px-2 py-0.5 rounded border ${
                        isActive ? "border-electric-blue/30 bg-electric-blue/5 text-electric-blue" : "border-white/5 bg-white/2 text-white/30"
                      }`}>
                        {tool.badge}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                      {tool.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Mockup Workspace Screen (Right) */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-full min-h-[420px] rounded-2xl glass-panel glass-panel-glow border-white/10 p-6 md:p-8 flex flex-col justify-between shadow-2xl overflow-hidden">
              {/* Screen grid pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-0" />
              
              {/* Workspace Header */}
              <div className="relative z-10 flex justify-between items-center border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="font-mono text-[10px] text-white/40 ml-2">WORKSPACE // DISTRO_ENGINE.AI</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[9px] text-electric-blue bg-electric-blue/5 border border-electric-blue/20 px-2 py-0.5 rounded">
                  <Sparkles className="w-3 h-3" />
                  <span>ONLINE COMPILING</span>
                </div>
              </div>

              {/* Dynamic Content Switching */}
              <div className="relative z-10 my-8 flex-1 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {selectedTool === "audience" && (
                    <motion.div
                      key="audience"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      {/* Metric Card 1 */}
                      <div className="bg-white/3 border border-white/5 p-5 rounded-xl flex flex-col justify-between">
                        <div className="flex justify-between items-start text-white/40">
                          <span className="text-[10px] font-mono uppercase tracking-wider">ACTIVE STREAMS</span>
                          <Activity className="w-4 h-4 text-electric-blue animate-pulse" />
                        </div>
                        <div className="my-3">
                          <span className="text-3xl font-black text-white font-mono">148,931</span>
                          <span className="text-green-500 font-mono text-xs ml-2">+12.4%</span>
                        </div>
                        <div className="flex gap-2">
                          <div className="h-6 w-full bg-white/2 rounded relative overflow-hidden flex items-end">
                            <div className="w-[30%] h-[40%] bg-electric-blue/30 rounded-t" />
                            <div className="w-[30%] h-[70%] bg-electric-blue/50 rounded-t" />
                            <div className="w-[40%] h-[90%] bg-electric-blue rounded-t" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Metric Card 2 */}
                      <div className="bg-white/3 border border-white/5 p-5 rounded-xl flex flex-col justify-between">
                        <div className="flex justify-between items-start text-white/40">
                          <span className="text-[10px] font-mono uppercase tracking-wider">GLOBAL COVERAGE</span>
                          <Globe className="w-4 h-4 text-neon-purple" />
                        </div>
                        <div className="my-3">
                          <span className="text-3xl font-black text-white font-mono">112 STORES</span>
                          <span className="text-white/40 font-mono text-[9px] block mt-1">SYNDICATION STABLE</span>
                        </div>
                        <span className="text-[9px] text-white/40 font-mono">PRIMARY: NORTH AMERICA / EU</span>
                      </div>
                    </motion.div>
                  )}

                  {selectedTool === "viral" && (
                    <motion.div
                      key="viral"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="w-full flex flex-col items-center text-center max-w-sm"
                    >
                      {/* Interactive Neon Virality Circle Gauge */}
                      <div className="relative w-36 h-36 rounded-full border border-white/5 flex items-center justify-center mb-6">
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-electric-blue/40 animate-[spin_25s_linear_infinite]" />
                        <div className="absolute inset-2 rounded-full border border-electric-blue/20 bg-electric-blue/5 flex flex-col justify-center items-center">
                          <span className="text-3xl font-black text-white font-mono">89%</span>
                          <span className="text-[9px] text-electric-blue font-mono tracking-widest uppercase mt-1">VIRALITY RATE</span>
                        </div>
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">Algorithm Velocity High</h4>
                      <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                        Track hook elements are mapping highly with active sound triggers on TikTok and Instagram Reels. Priority push recommended.
                      </p>
                    </motion.div>
                  )}

                  {selectedTool === "promo" && (
                    <motion.div
                      key="promo"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full flex flex-col gap-4 text-left"
                    >
                      <div className="bg-white/3 border border-white/5 p-4 rounded-xl flex items-center gap-4">
                        <div className="w-14 h-14 rounded-lg bg-electric-blue/10 border border-electric-blue/30 flex items-center justify-center shrink-0">
                          <Share2 className="w-6 h-6 text-electric-blue" />
                        </div>
                        <div>
                          <span className="text-[10px] text-white/40 font-mono block">CANVAS VISUALIZER GENERATED</span>
                          <strong className="text-white text-sm">cyberphoria_visualizer_v1.mp4</strong>
                          <span className="text-[9px] text-green-400 block mt-0.5">Ready for Spotify Canvas</span>
                        </div>
                      </div>

                      <div className="bg-white/3 border border-white/5 p-4 rounded-xl">
                        <span className="text-[10px] text-white/40 font-mono block mb-2">AUTO CAPTION RECOMMENDATION</span>
                        <p className="text-xs text-white/70 italic font-mono bg-black/30 p-3 rounded border border-white/5">
                          &quot;Finally releasing my new track #Cyberphoria on all platforms tonight! ⚡ Keep it 100% independent. Link in bio!&quot;
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {selectedTool === "optimizer" && (
                    <motion.div
                      key="optimizer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
                    >
                      {/* Priority dates */}
                      <div className="bg-white/3 border border-white/5 p-5 rounded-xl flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] text-white/40 font-mono uppercase block tracking-wider mb-1">OPTIMIZED RELEASE DATE</span>
                          <h4 className="text-xl font-bold text-white font-mono">FRIDAY, OCT 23</h4>
                          <span className="text-[10px] text-green-400 font-mono block mt-1">HIGH ALGORITHM DENSITY</span>
                        </div>
                        <p className="text-[10px] text-white/40 mt-4 leading-relaxed">
                          Releasing on Friday synchronizes perfectly with official platform playlist updates.
                        </p>
                      </div>

                      {/* Store Sync */}
                      <div className="bg-white/3 border border-white/5 p-5 rounded-xl flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] text-white/40 font-mono uppercase block tracking-wider mb-2">PRIORITY STORE CHECK</span>
                          <div className="flex flex-col gap-2 font-mono text-[9px] text-white/70">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-electric-blue" />
                              <span>SPOTIFY: INSTANT PRE-SAVE</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-electric-blue" />
                              <span>APPLE MUSIC: PRE-ADD ALIGN</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-electric-blue" />
                              <span>TIKTOK: SOUND SNIPPET SECURED</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Workspace Footer */}
              <div className="relative z-10 flex justify-between items-center border-t border-white/5 pt-4 text-white/40 text-[9px] font-mono">
                <span>COMPILED SECURELY VIA DK-AI PRO v4.2</span>
                <Magnetic range={30} pullStrength={0.2}>
                  <button className="flex items-center gap-1.5 text-electric-blue hover:text-white transition-colors">
                    <span>Export Analytics</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </Magnetic>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
