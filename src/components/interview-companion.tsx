"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sliders, 
  Layers, 
  Briefcase, 
  TrendingUp, 
  Sparkles, 
  X, 
  ExternalLink, 
  Check, 
  RotateCcw, 
  DollarSign, 
  Percent, 
  Volume2, 
  Target, 
  ArrowRight
} from "lucide-react";

// Accent Theme Definitions
interface AccentTheme {
  name: string;
  id: string;
  color: string;
  rgb: string;
  purple: string;
  purpleRgb: string;
  class: string;
}

const ACCENT_THEMES: AccentTheme[] = [
  {
    name: "Electric Cyan",
    id: "cyan",
    color: "#00f0ff",
    rgb: "0, 240, 255",
    purple: "#9d4edd",
    purpleRgb: "157, 78, 221",
    class: "from-[#00f0ff] to-[#9d4edd]"
  },
  {
    name: "Cyber Pink",
    id: "pink",
    color: "#ff007f",
    rgb: "255, 0, 127",
    purple: "#7b2cbf",
    purpleRgb: "123, 44, 191",
    class: "from-[#ff007f] to-[#7b2cbf]"
  },
  {
    name: "Acid Lime",
    id: "lime",
    color: "#39ff14",
    rgb: "57, 255, 20",
    purple: "#00b4d8",
    purpleRgb: "0, 180, 216",
    class: "from-[#39ff14] to-[#00b4d8]"
  },
  {
    name: "Sunset Gold",
    id: "gold",
    color: "#ffaa00",
    rgb: "255, 170, 0",
    purple: "#ff4d00",
    purpleRgb: "255, 77, 0",
    class: "from-[#ffaa00] to-[#ff4d00]"
  }
];

export default function InterviewCompanion() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"pitch" | "sandbox" | "welcome">("pitch");
  const [selectedTheme, setSelectedTheme] = useState<string>("cyan");
  
  // Confetti particles for Hire CTA
  const [confetti, setConfetti] = useState<{ id: number; x: number; y: number; color: string; scale: number }[]>([]);
  const [isHired, setIsHired] = useState(false);

  // Marketing Sandbox State
  const [budget, setBudget] = useState(5000);
  const [virality, setVirality] = useState(5); // Multiplier: 1x to 50x
  const [conversionRate, setConversionRate] = useState(3.0); // % conversion: 1.0% to 10.0%

  // Apply Theme Accent to HTML Document Node
  const handleThemeChange = (themeId: string) => {
    setSelectedTheme(themeId);
    const theme = ACCENT_THEMES.find(t => t.id === themeId);
    if (!theme) return;

    const root = document.documentElement;
    
    // Smooth transitions by modifying document root custom property values
    root.style.setProperty("--color-electric-blue", theme.color);
    root.style.setProperty("--color-electric-blue-rgb", theme.rgb);
    root.style.setProperty("--color-neon-purple", theme.purple);
    root.style.setProperty("--color-neon-purple-rgb", theme.purpleRgb);
  };

  // Reset accent styles back to original cyan
  const resetTheme = () => {
    handleThemeChange("cyan");
  };

  // Marketing Metric Calculations
  const rawImpressions = budget * 220; // $1 buys ~220 impressions
  const totalImpressions = rawImpressions * (1 + virality * 0.45);
  const totalConversions = Math.round(totalImpressions * (conversionRate / 100));
  const streams = totalConversions * 4.2; // average 4.2 streams per conversion listener
  const estimatedRoyalty = streams * 0.0043; // avg spotify payout rate of $0.0043
  const roas = budget > 0 ? (estimatedRoyalty / budget) * 100 : 0;
  const cpa = totalConversions > 0 ? budget / totalConversions : 0;

  // Trigger Custom Confetti Particle Animation
  const triggerConfetti = () => {
    setIsHired(true);
    const colors = ["#00f0ff", "#9d4edd", "#ff007f", "#39ff14", "#ffaa00", "#ffffff"];
    const newConfetti = Array.from({ length: 120 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100, // % width
      y: Math.random() * -30 - 10, // start above viewport
      color: colors[Math.floor(Math.random() * colors.length)],
      scale: Math.random() * 0.8 + 0.4,
    }));
    setConfetti(newConfetti);
  };

  // Clean up confetti particles
  useEffect(() => {
    if (confetti.length > 0) {
      const timer = setTimeout(() => {
        setConfetti([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [confetti]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Trigger modal popup automatically after a brief delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Action Sticky Button (Console Trigger) */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-5 py-3 rounded-full bg-black/80 hover:bg-black text-white border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)] cursor-pointer select-none font-mono text-[10px] tracking-widest uppercase hover:border-electric-blue/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 pointer-events-auto"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-blue opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-blue"></span>
        </span>
        <span>VOLTA CONSOLE</span>
      </motion.button>

      {/* Confetti Canvas Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {confetti.map((c) => (
          <motion.div
            key={c.id}
            initial={{ y: `${c.y}vh`, x: `${c.x}vw`, opacity: 1, rotate: 0 }}
            animate={{ 
              y: "110vh", 
              x: `${c.x + (Math.random() * 15 - 7.5)}vw`, 
              opacity: 0,
              rotate: Math.random() * 720 - 360
            }}
            transition={{ duration: Math.random() * 2 + 2, ease: "linear" }}
            style={{
              position: "absolute",
              width: "10px",
              height: "10px",
              borderRadius: Math.random() > 0.5 ? "50%" : "0%",
              backgroundColor: c.color,
              transform: `scale(${c.scale})`,
            }}
          />
        ))}
      </div>

      {/* Main Console Modal Panel */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-none">
            {/* Dark Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-auto"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.15 }}
              className="relative w-full max-w-4xl max-h-[85vh] md:max-h-[80vh] flex flex-col rounded-2xl glass-panel glass-panel-glow border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden pointer-events-auto z-10 font-sans"
            >
              
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-electric-blue/10 border border-electric-blue/20">
                    <Sparkles className="w-4 h-4 text-electric-blue" />
                  </div>
                  <div>
                    <h2 className="text-xs font-black font-mono tracking-widest uppercase text-foreground">
                      DISTROKID VOLTA // MARKETING CONSOLE
                    </h2>
                    <p className="text-[9px] font-mono text-white/60 tracking-wider">
                      INTERVIEW DEMO PANEL • SENIOR MARKETING ENGINEER
                    </p>
                  </div>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-white/10 bg-black/20 font-mono text-[9px] sm:text-[10px] tracking-wider uppercase">
                <button
                  onClick={() => setActiveTab("pitch")}
                  className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 border-r border-white/10 transition-colors cursor-pointer ${
                    activeTab === "pitch" 
                      ? "text-electric-blue bg-white/5 font-extrabold" 
                      : "text-white/60 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Rebrand Pitch Deck</span>
                </button>
                <button
                  onClick={() => setActiveTab("sandbox")}
                  className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 border-r border-white/10 transition-colors cursor-pointer ${
                    activeTab === "sandbox" 
                      ? "text-electric-blue bg-white/5 font-extrabold" 
                      : "text-white/60 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Sandbox Controls</span>
                </button>
                <button
                  onClick={() => setActiveTab("welcome")}
                  className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                    activeTab === "welcome" 
                      ? "text-electric-blue bg-white/5 font-extrabold" 
                      : "text-white/60 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Interviewer Welcome</span>
                </button>
              </div>

              {/* Scrollable Panel Area */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">

                {/* ======================================================================
                    TAB 1: REBRAND PITCH DECK
                    ====================================================================== */}
                {activeTab === "pitch" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6 text-left"
                  >
                    <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] space-y-2">
                      <span className="text-[9px] font-mono text-electric-blue uppercase tracking-widest font-black block">BRAND POSITIONING</span>
                      <h3 className="text-lg font-bold font-mono uppercase text-white tracking-tight">Shift from Utility to Creative Ecosystem</h3>
                      <p className="text-xs text-white/60 leading-relaxed font-light">
                        DistroKid distributes unlimited music for $25/year—a highly optimized pricing model. However, functional pricing attracts high price-sensitivity. To capture the modern Gen-Z artist, DistroKid must evolve from a dashboard utility to an **immersive culture brand**. 
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      {/* Growth Loop Feature Card */}
                      <div className="p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="w-8 h-8 rounded-lg bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 text-neon-purple" />
                          </div>
                          <h4 className="text-sm font-bold font-mono uppercase text-white tracking-tight">1. Viral Loop Acquisition</h4>
                          <p className="text-xs text-white/70 leading-relaxed font-light">
                            Instead of relying on basic display ads, integrate virality directly into the release workflow. The moment an artist schedules an upload, dynamic AI renders customizable, sound-reactive short-form video formats (TikTok/Reels) optimized with pre-saved tags and custom split payouts.
                          </p>
                        </div>
                        <div className="text-[9px] font-mono text-neon-purple font-bold tracking-widest uppercase pt-2 border-t border-white/5">
                          Acquisition Engine
                        </div>
                      </div>

                      {/* Ecosystem Retention Feature Card */}
                      <div className="p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="w-8 h-8 rounded-lg bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center">
                            <Layers className="w-4 h-4 text-electric-blue" />
                          </div>
                          <h4 className="text-sm font-bold font-mono uppercase text-white tracking-tight">2. Unified Ecosystem Stickiness</h4>
                          <p className="text-xs text-white/70 leading-relaxed font-light">
                            By bundling premium auxiliary services like Mixea (automated mastering) and Direct (custom merch/websites) natively, the checkout flow acts as an upsell pipeline. This drastically increases Lifetime Value (LTV) and reduces annual subscription churn.
                          </p>
                        </div>
                        <div className="text-[9px] font-mono text-electric-blue font-bold tracking-widest uppercase pt-2 border-t border-white/5">
                          Retention multiplier
                        </div>
                      </div>

                    </div>

                    <div className="p-5 rounded-xl border border-white/5 bg-white/[0.01] flex flex-col sm:flex-row items-center gap-4 justify-between">
                      <div className="space-y-1 text-center sm:text-left">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-white/80 font-bold">
                          Explore Interactive Marketing Sandbox
                        </h4>
                        <p className="text-[11px] text-white/60 font-light">
                          Switch theme accents dynamically and calculate real marketing spend metrics.
                        </p>
                      </div>
                      <button
                        onClick={() => setActiveTab("sandbox")}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black font-semibold text-[10px] font-mono tracking-widest uppercase hover:scale-105 transition-transform"
                      >
                        <span>GO TO SANDBOX</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ======================================================================
                    TAB 2: SANDBOX CONTROLS
                    ====================================================================== */}
                {activeTab === "sandbox" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6 text-left"
                  >
                    {/* Theme Accent Switcher Grid */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-widest text-electric-blue font-bold">
                          Brand Theme Accent Switcher
                        </h4>
                        <p className="text-[11px] text-white/60 font-light mt-0.5">
                          Click any theme to dynamically swap accent CSS variables throughout the entire landing page.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {ACCENT_THEMES.map((theme) => {
                          const isActive = selectedTheme === theme.id;
                          return (
                            <button
                              key={theme.id}
                              onClick={() => handleThemeChange(theme.id)}
                              className={`p-3 rounded-xl border text-left flex flex-col justify-between h-20 transition-all cursor-pointer relative overflow-hidden ${
                                isActive 
                                  ? "border-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.08)]" 
                                  : "border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                              }`}
                            >
                              <div className="flex items-center justify-between w-full z-10">
                                <span className="text-[9px] font-mono tracking-wider text-white/60 uppercase">ACCENT</span>
                                {isActive && <Check className="w-3.5 h-3.5 text-white animate-pulse" />}
                              </div>
                              <div className="z-10">
                                <span className="text-[10px] font-mono font-bold text-white uppercase tracking-tight block">
                                  {theme.name}
                                </span>
                              </div>
                              {/* Colored accent bar */}
                              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.class}`} />
                            </button>
                          );
                        })}
                      </div>

                      {selectedTheme !== "cyan" && (
                        <button
                          onClick={resetTheme}
                          className="inline-flex items-center gap-1.5 text-[9px] font-mono text-white/60 hover:text-white transition-colors cursor-pointer"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Reset to Original Cyan</span>
                        </button>
                      )}
                    </div>

                    <div className="border-t border-white/5 pt-6 space-y-4">
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-widest text-neon-purple font-bold">
                          Viral Campaign Marketing Simulator
                        </h4>
                        <p className="text-[11px] text-white/60 font-light mt-0.5">
                          Drag sliders to simulate projected viral acquisition campaigns for new DistroKid releases.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                        
                        {/* Sliders Control Panel */}
                        <div className="lg:col-span-6 space-y-4 p-5 rounded-xl border border-white/5 bg-white/[0.01]">
                          
                          {/* Budget Slider */}
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-[10px] font-mono text-white/80 font-bold">
                              <span className="uppercase tracking-wider">MARKETING SPEND</span>
                              <span className="font-bold text-white">${budget.toLocaleString()}</span>
                            </div>
                            <input
                              type="range"
                              min={500}
                              max={25000}
                              step={500}
                              value={budget}
                              onChange={(e) => setBudget(Number(e.target.value))}
                              className="w-full h-1.5 bg-white/20 hover:bg-white/30 rounded-lg appearance-none cursor-pointer accent-electric-blue transition-all"
                            />
                            <div className="flex justify-between text-[8px] font-mono text-white/50">
                              <span>$500</span>
                              <span>$25,000</span>
                            </div>
                          </div>

                          {/* Virality Slider */}
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-[10px] font-mono text-white/80 font-bold">
                              <span className="uppercase tracking-wider">VIRALITY MULTIPLIER</span>
                              <span className="font-bold text-white">{virality}x</span>
                            </div>
                            <input
                              type="range"
                              min={1}
                              max={50}
                              step={1}
                              value={virality}
                              onChange={(e) => setVirality(Number(e.target.value))}
                              className="w-full h-1.5 bg-white/20 hover:bg-white/30 rounded-lg appearance-none cursor-pointer accent-electric-blue transition-all"
                            />
                            <div className="flex justify-between text-[8px] font-mono text-white/50">
                              <span>1x (Paid)</span>
                              <span>50x (Mega-Viral Loop)</span>
                            </div>
                          </div>

                          {/* Conversion Slider */}
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-[10px] font-mono text-white/80 font-bold">
                              <span className="uppercase tracking-wider">AUDIENCE CONVERSION</span>
                              <span className="font-bold text-white">{conversionRate.toFixed(1)}%</span>
                            </div>
                            <input
                              type="range"
                              min={1.0}
                              max={10.0}
                              step={0.5}
                              value={conversionRate}
                              onChange={(e) => setConversionRate(Number(e.target.value))}
                              className="w-full h-1.5 bg-white/20 hover:bg-white/30 rounded-lg appearance-none cursor-pointer accent-electric-blue transition-all"
                            />
                            <div className="flex justify-between text-[8px] font-mono text-white/50">
                              <span>1% (Low Interest)</span>
                              <span>10% (High Hype/Trend)</span>
                            </div>
                          </div>

                        </div>

                        {/* Calculated Live Metrics Display */}
                        <div className="lg:col-span-6 grid grid-cols-2 gap-3">
                          
                          {/* Streams Output */}
                          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col justify-between">
                            <div className="flex items-center gap-1.5 text-[9px] font-mono text-white/60 uppercase">
                              <Volume2 className="w-3.5 h-3.5" />
                              <span>PROJECTED STREAMS</span>
                            </div>
                            <div className="my-2">
                              <span className="text-xl sm:text-2xl font-black font-sans tracking-tight text-white font-mono">
                                {streams >= 1000000 
                                  ? `${(streams / 1000000).toFixed(2)}M` 
                                  : streams.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                              </span>
                            </div>
                            <div className="text-[8px] font-mono text-white/50">
                              Based on average listener loops
                            </div>
                          </div>

                          {/* CPA Output */}
                          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col justify-between">
                            <div className="flex items-center gap-1.5 text-[9px] font-mono text-white/60 uppercase">
                              <Target className="w-3.5 h-3.5" />
                              <span>COST PER ACQUISITION</span>
                            </div>
                            <div className="my-2">
                              <span className="text-xl sm:text-2xl font-black font-sans tracking-tight text-electric-blue font-mono">
                                ${cpa.toFixed(3)}
                              </span>
                            </div>
                            <div className="text-[8px] font-mono text-white/50">
                              CAC per verified stream listener
                            </div>
                          </div>

                          {/* Payout Output */}
                          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col justify-between">
                            <div className="flex items-center gap-1.5 text-[9px] font-mono text-white/60 uppercase">
                              <DollarSign className="w-3.5 h-3.5" />
                              <span>ESTIMATED ROYALTIES</span>
                            </div>
                            <div className="my-2">
                              <span className="text-xl sm:text-2xl font-black font-sans tracking-tight text-white font-mono">
                                ${estimatedRoyalty.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                              </span>
                            </div>
                            <div className="text-[8px] font-mono text-white/50">
                              Keep 100% of these earnings
                            </div>
                          </div>

                          {/* ROAS Output */}
                          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col justify-between">
                            <div className="flex items-center gap-1.5 text-[9px] font-mono text-white/60 uppercase">
                              <Percent className="w-3.5 h-3.5" />
                              <span>MARKETING ROAS</span>
                            </div>
                            <div className="my-2">
                              <span className={`text-xl sm:text-2xl font-black font-sans tracking-tight font-mono ${roas >= 100 ? "text-green-400" : "text-neon-purple"}`}>
                                {roas.toFixed(0)}%
                              </span>
                            </div>
                            <div className="text-[8px] font-mono text-white/50">
                              Break-even = 100% ROAS
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ======================================================================
                    TAB 3: INTERVIEWER WELCOME
                    ====================================================================== */}
                {activeTab === "welcome" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6 text-left"
                  >
                    <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] relative overflow-hidden space-y-4">
                      
                      {/* Visual Gradient Glow behind text */}
                      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-electric-blue/5 glow-blur rounded-full pointer-events-none" />

                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-electric-blue tracking-widest uppercase font-extrabold block">PERSONALIZED MEMO</span>
                        <h3 className="text-xl font-bold font-mono uppercase text-white tracking-tight">Dear DistroKid Senior Marketing Engineer</h3>
                      </div>

                      <p className="text-xs text-white/90 leading-relaxed font-light space-y-3">
                        Thank you for taking the time to explore this custom Volta rebrand demo. I built this specific interactive site to demonstrate exactly how high-end, responsive client-side development directly interfaces with performance marketing objectives. 
                      </p>
                      
                      <p className="text-xs text-white/90 leading-relaxed font-light">
                        A great **Senior Marketing Engineer** does not just build landing pages; they bridge the gap between engineering systems, analytics tracking, and visual brand identity. By combining responsive animation frameworks (Framer Motion, Lenis) with lightweight real-time calculation simulators, we can craft experiences that increase conversion, decrease acquisition costs, and elevate the DistroKid brand.
                      </p>

                      <div className="border-t border-white/5 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                        <div className="font-mono text-[9px] text-white/60 space-y-0.5">
                          <div>CANDIDATE: INDEPENDENT PIONEER</div>
                          <div>POSITION: SENIOR MARKETING ENGINEER</div>
                          <div>STACK: NEXT.JS • FRAMER MOTION • CSS VARIABLES</div>
                        </div>

                        <div className="flex gap-3">
                          {/* Resume Link */}
                          <a
                            href="https://distrokid.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-9 items-center justify-center rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-4 text-white font-semibold text-[10px] font-mono tracking-widest uppercase transition-all duration-300"
                          >
                            <span>VIEW PORTFOLIO</span>
                            <ExternalLink className="ml-1.5 w-3 h-3" />
                          </a>

                          {/* Hire Simulation Callback */}
                          <button
                            onClick={triggerConfetti}
                            disabled={isHired}
                            className={`group relative inline-flex h-9 items-center justify-center rounded-full px-5 text-black font-bold text-[10px] font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer overflow-hidden ${
                              isHired 
                                ? "bg-green-400 text-black scale-105" 
                                : "bg-white hover:bg-electric-blue hover:scale-105 active:scale-95"
                            }`}
                          >
                            {isHired ? (
                              <span className="flex items-center gap-1.5">
                                <Check className="w-3.5 h-3.5" />
                                <span>OFFER GENERATED!</span>
                              </span>
                            ) : (
                              <span>GENERATE OFFER</span>
                            )}
                          </button>
                        </div>
                      </div>

                    </div>

                    {isHired && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-center font-mono text-[10px] tracking-wider uppercase"
                      >
                        ⚡ Thank you! Let&apos;s build the future of independent music distribution together. ⚡
                      </motion.div>
                    )}
                  </motion.div>
                )}

              </div>

              {/* Footer */}
              <div className="px-6 py-3 border-t border-white/5 bg-black/60 flex items-center justify-between text-[9px] font-mono text-white/50">
                <span>VOLTA REBRAND PROJECT v1.0.0</span>
                <span className="hidden sm:inline">DESIGNED WITH HIGH-FIDELITY MARKETING METRICS</span>
                <span>© 2026 DISTROKID INC</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
