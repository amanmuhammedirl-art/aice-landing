"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, useTransform, motion } from "framer-motion";

const TOTAL_FRAMES = 120; // Match your total PNG frames

export default function MotionBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const { scrollY } = useScroll();

  // Extend video playback distance: scrolls through frames from 0px to 1800px
  const frameProgress = useTransform(scrollY, [0, 1800], [0, 1]);

  // Keep video visible longer: stays fully opaque until 1600px, then fades out by 2200px
  const videoOpacity = useTransform(scrollY, [0, 1600, 2200], [0.75, 0.75, 0]);

  // Fade in aesthetic purple glow background seamlessly as the video fades out
  const purpleBgOpacity = useTransform(scrollY, [1200, 2200], [0, 1]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameIndex = String(i).padStart(3, "0");
      img.src = `/frames/frame_${frameIndex}.png`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) {
          drawFrame(0, [img]);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawFrame = (index: number, imgArray = images) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgArray[index];
    if (img && img.complete) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
  };

  // Sync video frame rendering to extended pixel scroll distance
  useMotionValueEvent(frameProgress, "change", (latest) => {
    if (images.length === 0) return;
    const clampedProgress = Math.min(Math.max(latest, 0), 1);
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(clampedProgress * TOTAL_FRAMES)
    );
    requestAnimationFrame(() => drawFrame(frameIndex));
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0a0518]">
      {/* Scroll-scrubbed Video Canvas */}
      <motion.canvas
        ref={canvasRef}
        style={{ opacity: videoOpacity }}
        className="w-full h-full object-cover"
      />

      {/* Aesthetic Deep Purple Ambient Background Overlay */}
      <motion.div
        style={{ opacity: purpleBgOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-[#0a0518] via-[#12082b] to-[#0a0518]"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-3/4 left-1/4 w-[500px] h-[500px] bg-fuchsia-600/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-indigo-600/20 rounded-full blur-[150px] pointer-events-none" />
      </motion.div>
    </div>
  );
}