"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Sparkles, Brain, Calendar, MessageSquare } from "lucide-react";
import { aiTools } from "@/data/distrokid-data";

// Map each tool ID to an icon component
const iconMap: Record<string, React.ElementType> = {
  caption: MessageSquare,
  optimizer: Calendar,
  audience: Brain,
  viral: Sparkles,
};

export default function AIGrowthTools() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTool = aiTools[activeIndex];

  return (
    <section
      id="ai-tools"
      className="relative min-h-screen w-full py-32 px-6 md:px-12 lg:px-24 bg-bg-dark border-t border-white/5 overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-neon-purple/5 glow-blur pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-electric-blue/5 glow-blur pointer-events-none z-0" />
      <div className="absolute inset-0 grid-mesh pointer-events-none z-[-1]" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-neon-purple font-mono text-xs uppercase tracking-[0.2em] block mb-3">
            AI-Powered Creator Engine
          </span>
          <h2 className="text-[9vw] sm:text-[6vw] lg:text-[4vw] font-black leading-[0.9] tracking-tighter uppercase mb-6">
            YOUR INTELLIGENT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-electric-blue">
              GROWTH STUDIO.
            </span>
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg">
            Leverage machine learning to optimize release strategies, generate captions, predict virality, and understand your audience at scale.
          </p>
        </div>

        {/* Two-Column Layout: Tool Selector + Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Tool Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {aiTools.map((tool, i) => {
              const Icon = iconMap[tool.id] || Sparkles;
              const isActive = i === activeIndex;

              return (
                <motion.button
                  key={tool.id}
                  onClick={() => setActiveIndex(i)}
                  whileHover={{ x: 4 }}
                  className={`relative text-left p-5 rounded-xl border transition-all duration-300 group ${
                    isActive
                      ? "bg-white/5 border-neon-purple/30 shadow-[0_0_30px_rgba(157,78,221,0.08)]"
                      : "bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? "border-neon-purple/40 bg-neon-purple/10 text-neon-purple"
                          : "border-white/10 bg-white/3 text-white/40 group-hover:text-white/60"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3
                        className={`text-sm font-bold uppercase font-mono tracking-tight mb-1 transition-colors ${
                          isActive ? "text-white" : "text-white/60"
                        }`}
                      >
                        {tool.title}
                      </h3>
                      <p className="text-xs text-white/40 font-light leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </div>

                  {/* Active indicator bar */}
                  {isActive && (
                    <motion.div
                      layoutId="ai-tool-indicator"
                      className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-neon-purple"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right: Dynamic Interactive Preview */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTool.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel glass-panel-glow border-white/10 rounded-2xl p-8 min-h-[420px] flex flex-col justify-between"
              >
                {/* Preview Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
                    <span className="font-mono text-[10px] text-neon-purple uppercase tracking-widest">
                      {activeTool.badge}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-white/30 uppercase">
                    DK-AI-MODULE v3.2
                  </span>
                </div>

                {/* Dynamic Mockup Content Based on Active Tool */}
                <div className="flex-1 flex flex-col justify-center">
                  {activeTool.id === "caption" && <CaptionPreview />}
                  {activeTool.id === "optimizer" && <OptimizerPreview />}
                  {activeTool.id === "audience" && <AudiencePreview />}
                  {activeTool.id === "viral" && <ViralPreview />}
                </div>

                {/* Footer status bar */}
                <div className="border-t border-white/5 pt-4 mt-8 flex items-center justify-between font-mono text-[9px] text-white/30">
                  <span>AI ENGINE: ACTIVE</span>
                  <span>LATENCY: 12ms</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Sub-Preview Components ===== */

function CaptionPreview() {
  const captions = [
    { platform: "TikTok", text: "This one hits different 🎵 New drop out now — link in bio", confidence: 94 },
    { platform: "Instagram", text: "Late nights in the studio paid off. Stream everywhere now 🔥", confidence: 88 },
    { platform: "YouTube", text: "Official audio out now. Subscribe for more heat 🎧", confidence: 91 },
  ];

  return (
    <div className="flex flex-col gap-4">
      {captions.map((c) => (
        <div key={c.platform} className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] text-electric-blue uppercase tracking-wider font-bold">{c.platform}</span>
            <span className="font-mono text-[10px] text-green-400">{c.confidence}% match</span>
          </div>
          <p className="text-sm text-white/70 font-light">{c.text}</p>
        </div>
      ))}
    </div>
  );
}

function OptimizerPreview() {
  const schedule = [
    { day: "Monday", time: "6:00 PM", score: 92 },
    { day: "Wednesday", time: "12:00 PM", score: 87 },
    { day: "Friday", time: "9:00 AM", score: 95 },
    { day: "Sunday", time: "3:00 PM", score: 78 },
  ];

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-white/40 font-mono uppercase tracking-wider mb-2">Optimal Release Windows</p>
      {schedule.map((s) => (
        <div key={s.day} className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-electric-blue" />
            </div>
            <div>
              <span className="text-sm text-white font-medium block">{s.day}</span>
              <span className="text-[10px] text-white/40 font-mono">{s.time}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-16 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${s.score}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full rounded-full bg-gradient-to-r from-electric-blue to-neon-purple"
              />
            </div>
            <span className="font-mono text-[10px] text-white/60 w-8 text-right">{s.score}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function AudiencePreview() {
  const regions = [
    { region: "United States", pct: 38, color: "bg-electric-blue" },
    { region: "United Kingdom", pct: 22, color: "bg-neon-purple" },
    { region: "Germany", pct: 15, color: "bg-electric-blue" },
    { region: "Brazil", pct: 13, color: "bg-neon-purple" },
    { region: "Japan", pct: 12, color: "bg-electric-blue" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-white/40 font-mono uppercase tracking-wider mb-1">Listener Geography</p>
      {regions.map((r) => (
        <div key={r.region} className="flex items-center gap-4">
          <span className="text-xs text-white/60 w-28 shrink-0">{r.region}</span>
          <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${r.pct}%` }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className={`h-full rounded-full ${r.color}`}
            />
          </div>
          <span className="font-mono text-[10px] text-white/50 w-8 text-right">{r.pct}%</span>
        </div>
      ))}
    </div>
  );
}

function ViralPreview() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6">
      {/* Large circular gauge */}
      <div className="relative w-40 h-40">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
          <motion.circle
            cx="50" cy="50" r="42"
            fill="none"
            stroke="url(#viralGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={264}
            initial={{ strokeDashoffset: 264 }}
            animate={{ strokeDashoffset: 264 * 0.06 }}
            transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
          <defs>
            <linearGradient id="viralGrad">
              <stop offset="0%" stopColor="var(--color-neon-purple)" />
              <stop offset="100%" stopColor="var(--color-electric-blue)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-black font-mono text-white">94%</span>
          <span className="text-[9px] font-mono text-white/40 uppercase tracking-wider">Viral Score</span>
        </div>
      </div>
      <p className="text-xs text-white/50 font-light max-w-xs">
        High engagement potential detected based on tempo, genre trends, and historical release patterns.
      </p>
    </div>
  );
}
