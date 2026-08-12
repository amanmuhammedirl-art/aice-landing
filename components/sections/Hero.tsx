"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight, Bot, Cpu } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);

  // Scroll-linked animations for smooth scroll scrubbing effects
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.93]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -40]);

  return (
    <section
      ref={targetRef}
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden z-10"
    >
      <motion.div
        style={{ opacity, scale, y }}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        {/* Animated Campus Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/30 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.15)]"
        >
          <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-wide uppercase text-purple-200">
            College of Engineering Chengannur
          </span>
        </motion.div>

        {/* Updated Main Heading with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="space-y-3"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
            AICE
          </h1>
          
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(168,85,247,0.3)]">
            AI Innovation Community for Excellence
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
        >
          Empowering future leaders, AI researchers, and machine learning developers at CEC through high-impact workshops, projects, and hackathons.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href="#events"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold flex items-center justify-center gap-2 backdrop-blur-md transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:scale-105"
          >
            Explore Events <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-purple-400/20 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 hover:border-purple-400/40"
          >
            <Bot className="w-4 h-4 text-purple-400" /> About Community
          </a>
        </motion.div>

        {/* Floating Feature Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-medium"
        >
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
            <Cpu className="w-3.5 h-3.5 text-purple-400" /> Machine Learning
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" /> Generative AI
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
            <Bot className="w-3.5 h-3.5 text-cyan-400" /> Robotics & Automation
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}