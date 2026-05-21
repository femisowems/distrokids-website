"use client";

import { useEffect, useRef, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";

type Theme = "system" | "light" | "dark";

export default function ThemeToggle() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as Theme) || "system";
  });
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    applyTheme(theme);

    let mq: MediaQueryList | null = null;
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (theme === "system") applyTheme("system");
    };

    if (typeof window !== "undefined") {
      mq = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        mq.addEventListener("change", handleSystemChange);
      } catch {
        mq.addListener(handleSystemChange);
      }
    }

    return () => {
      if (mq) {
        try {
          mq.removeEventListener("change", handleSystemChange);
        } catch {
          mq.removeListener(handleSystemChange);
        }
      }
    };
  }, [theme]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  function applyTheme(t: Theme) {
    const root = document.documentElement;
    if (t === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else if (t === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      // system
      root.classList.remove("light");
      root.classList.remove("dark");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) root.classList.add("dark");
      else root.classList.add("light");
    }
  }

  function select(t: Theme) {
    setTheme(t);
    localStorage.setItem("theme", t);
    try {
      // Persist theme in a cookie for SSR to read (1 year)
      var d = new Date();
      d.setTime(d.getTime() + 365*24*60*60*1000);
      document.cookie = `theme=${t}; expires=${d.toUTCString()}; path=/`;
    } catch (e) {}
    setOpen(false);
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((s) => !s)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="w-9 h-9 rounded-full flex items-center justify-center bg-white/3 border border-white/5 text-white/80 hover:bg-white/5 transition-colors"
        title="Theme"
        data-cursor="pointer"
      >
        <Sun className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white/6 backdrop-blur rounded-xl border border-white/10 shadow-lg p-2 text-sm text-white/90">
          <button
            onClick={() => select("system")}
            className="w-full text-left px-3 py-2 rounded hover:bg-white/3 flex items-center gap-3"
          >
            <Laptop className="w-4 h-4 text-white/60" />
            <span className="flex-1">System</span>
            {theme === "system" && <span className="w-2 h-2 rounded-full bg-white" />}
          </button>

          <button
            onClick={() => select("dark")}
            className="w-full text-left px-3 py-2 rounded hover:bg-white/3 flex items-center gap-3"
          >
            <Moon className="w-4 h-4 text-white/60" />
            <span className="flex-1">Dark</span>
            {theme === "dark" && <span className="w-2 h-2 rounded-full bg-white" />}
          </button>

          <button
            onClick={() => select("light")}
            className="w-full text-left px-3 py-2 rounded hover:bg-white/3 flex items-center gap-3"
          >
            <Sun className="w-4 h-4 text-white/60" />
            <span className="flex-1">Light</span>
            {theme === "light" && <span className="w-2 h-2 rounded-full bg-white" />}
          </button>
        </div>
      )}
    </div>
  );
}
