"use client";
import React, { useEffect, useState, useRef } from "react";

const STEPS = [
  {
    title: "Welcome",
    content: "Welcome to Playbook Mode — quick tips and guided interactions appear here.",
  },
  {
    title: "Explore Sections",
    content: "Use the layout to jump between features; look for highlighted hotspots.",
  },
  {
    title: "Try an Action",
    content: "Click elements suggested by the playbook to reveal contextual tips.",
  },
];

export default function PlaybookMode(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const mounted = useRef(false);

  useEffect(() => {
    // Restore persisted open state on mount
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("playbookOpen");
      if (saved === "1") setOpen(true);
      const savedStep = localStorage.getItem("playbookStep");
      if (savedStep !== null) {
        const n = parseInt(savedStep, 10);
        if (!Number.isNaN(n)) setStep(Math.min(Math.max(0, n), STEPS.length - 1));
      }
    }
    mounted.current = true;
  }, []);

  useEffect(() => {
    // Cross-tab sync using BroadcastChannel with a localStorage fallback
    if (typeof window === "undefined") return;
    const id = String(Math.random()).slice(2);
    const bcSupported = typeof (window as any).BroadcastChannel === "function";
    let bc: BroadcastChannel | null = null;

    const handleIncoming = (data: any) => {
      try {
        if (!data || data.sender === id) return;
        if (typeof data.open === "boolean") setOpen(data.open);
        if (typeof data.step === "number") setStep(Math.min(Math.max(0, data.step), STEPS.length - 1));
      } catch (e) {
        // noop
      }
    };

    if (bcSupported) {
      bc = new BroadcastChannel("playbook-mode");
      bc.onmessage = (ev) => handleIncoming(ev.data);
    }

    const onStorage = (ev: StorageEvent) => {
      if (!ev.key) return;
      if (ev.key === "playbookOpen") {
        handleIncoming({ open: ev.newValue === "1", sender: id });
      }
      if (ev.key === "playbookStep") {
        const n = ev.newValue ? parseInt(ev.newValue, 10) : NaN;
        if (!Number.isNaN(n)) handleIncoming({ step: n, sender: id });
      }
    };

    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("storage", onStorage);
      if (bc) bc.close();
    };
  }, []);

  useEffect(() => {
    try {
      document.documentElement.classList.toggle("playbook-mode", open);
    } catch (e) {
      // noop for SSR safety
    }
    // Persist preference after initial mount
    if (mounted.current && typeof window !== "undefined") {
      localStorage.setItem("playbookOpen", open ? "1" : "0");
    }
  }, [open]);

  useEffect(() => {
    if (mounted.current && typeof window !== "undefined") {
      localStorage.setItem("playbookStep", String(step));
      try {
        // Broadcast to other tabs if supported
        if (typeof (window as any).BroadcastChannel === "function") {
          const bc = new (window as any).BroadcastChannel("playbook-mode");
          bc.postMessage({ step });
          bc.close();
        } else {
          // fallback: write to localStorage to trigger storage event
          localStorage.setItem("playbookStep", String(step));
        }
      } catch (e) {
        // noop
      }
    }
  }, [step]);

  useEffect(() => {
    // also broadcast open state changes
    if (mounted.current && typeof window !== "undefined") {
      try {
        if (typeof (window as any).BroadcastChannel === "function") {
          const bc = new (window as any).BroadcastChannel("playbook-mode");
          bc.postMessage({ open });
          bc.close();
        } else {
          localStorage.setItem("playbookOpen", open ? "1" : "0");
        }
      } catch (e) {}
    }
  }, [open]);

  useEffect(() => {
    // Keyboard shortcuts: Cmd/Ctrl+P to toggle, Escape to close
    const onKey = (e: KeyboardEvent) => {
      const isToggle = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "p";
      if (isToggle) {
        e.preventDefault();
        setOpen((s) => !s);
      }
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setStep((s) => Math.min(s + 1, STEPS.length - 1));
      if (e.key === "ArrowLeft") setStep((s) => Math.max(s - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="fixed left-4 bottom-4 z-50 flex items-end">
      <div className="relative">
        <button
          type="button"
          aria-pressed={open}
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle Playbook Mode (Ctrl/Cmd+P)"
          className="group flex items-center gap-3 px-3 py-2 rounded-md glass-panel glass-panel-glow text-sm font-medium transition-transform transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-electric-blue"
        >
          <svg className="w-4 h-4 text-electric-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="hidden sm:inline">Playbook</span>
          <span
            className="ml-1 w-2 h-2 rounded-full bg-electric-blue"
            style={{ opacity: open ? 1 : 0.28 }}
          />
        </button>

        {open && (
          <div
            role="dialog"
            aria-modal="false"
            aria-label="Playbook panel"
            className="mt-2 w-80 p-3 bg-bg-card border border-white/5 rounded-lg text-sm text-foreground shadow-lg playbook-panel"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="font-medium">{STEPS[step].title}</div>
                <div className="text-[13px] mt-1 leading-tight">{STEPS[step].content}</div>
              </div>
              <div className="ml-3 flex-shrink-0">
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 rounded text-white/40 hover:text-white/70 focus:outline-none"
                  aria-label="Close playbook"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button onClick={prev} disabled={step === 0} className="px-2 py-1 rounded bg-white/3 text-xs disabled:opacity-40">Prev</button>
                <button onClick={next} disabled={step === STEPS.length - 1} className="px-2 py-1 rounded bg-electric-blue/5 text-xs text-electric-blue disabled:opacity-40">Next</button>
              </div>
              <div className="text-xs opacity-70">{step + 1}/{STEPS.length}</div>
            </div>

            <div className="mt-2 h-1 bg-white/5 rounded overflow-hidden">
              <div style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} className="h-full bg-electric-blue" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
