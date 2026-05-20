"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<"default" | "hover" | "view" | "drag" | "hide">("default");
  const [cursorText, setCursorText] = useState("");
  const cursorRef = useRef<HTMLDivElement>(null);
  
  // Custom cursor position motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring configurations for ultra smooth lag-behind feel
  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Inject active class to body for custom styles (e.g. hiding standard pointer)
    document.documentElement.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactiveEl = target.closest("[data-cursor]") as HTMLElement;
      
      if (interactiveEl) {
        const type = interactiveEl.getAttribute("data-cursor");
        const text = interactiveEl.getAttribute("data-cursor-text") || "";
        
        if (type === "view") {
          setCursorType("view");
          setCursorText(text || "VIEW");
        } else if (type === "drag") {
          setCursorType("drag");
          setCursorText(text || "DRAG");
        } else if (type === "magnetic" || type === "pointer") {
          setCursorType("hover");
          setCursorText("");
        } else if (type === "hide") {
          setCursorType("hide");
        }
      } else {
        // Fallback for standard links
        if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
          setCursorType("hover");
          setCursorText("");
        } else {
          setCursorType("default");
          setCursorText("");
        }
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY]);

  // Enable only on desktop devices with cursor pointers
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(window.matchMedia("(pointer: fine)").matches);
  }, []);

  if (!isDesktop) return null;

  const variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: "#00f0ff",
      boxShadow: "0 0 12px rgba(0, 240, 255, 0.6)",
      opacity: 1,
    },
    hover: {
      width: 48,
      height: 48,
      backgroundColor: "rgba(0, 240, 255, 0.12)",
      border: "1px solid #00f0ff",
      boxShadow: "0 0 20px rgba(0, 240, 255, 0.25)",
      opacity: 1,
    },
    view: {
      width: 76,
      height: 76,
      backgroundColor: "#f5f5f7",
      color: "#030303",
      border: "none",
      boxShadow: "0 0 30px rgba(255, 255, 255, 0.2)",
      opacity: 1,
    },
    drag: {
      width: 76,
      height: 76,
      backgroundColor: "#00f0ff",
      color: "#030303",
      border: "none",
      boxShadow: "0 0 30px rgba(0, 240, 255, 0.35)",
      opacity: 1,
    },
    hide: {
      opacity: 0,
      width: 0,
      height: 0,
    }
  };

  return (
    <motion.div
      ref={cursorRef}
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
      variants={variants}
      animate={cursorType}
      className="fixed pointer-events-none z-[99999] rounded-full flex items-center justify-center font-mono text-[9px] font-black tracking-[0.2em] uppercase transition-opacity duration-300"
    >
      {(cursorType === "view" || cursorType === "drag") && (
        <span className="scale-100 opacity-100 text-center font-extrabold">{cursorText}</span>
      )}
    </motion.div>
  );
}
