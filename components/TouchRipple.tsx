"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function TouchRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const handleTouchOrClick = (e: MouseEvent | TouchEvent) => {
      let x = 0;
      let y = 0;

      if ("touches" in e && e.touches.length > 0) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else if ("clientX" in e) {
        x = (e as MouseEvent).clientX;
        y = (e as MouseEvent).clientY;
      }

      const newRipple = { id: Date.now(), x, y };

      setRipples((prev) => [...prev.slice(-5), newRipple]);
    };

    window.addEventListener("pointerdown", handleTouchOrClick);
    return () => window.removeEventListener("pointerdown", handleTouchOrClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onAnimationComplete={() => {
              setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
            }}
            style={{
              left: ripple.x - 25,
              top: ripple.y - 25,
            }}
            className="absolute h-12 w-12 rounded-full border-2 border-fuchsia-500 bg-purple-500/30 shadow-[0_0_20px_#a855f7]"
          />
        ))}
      </AnimatePresence>
    </div>
  );
}