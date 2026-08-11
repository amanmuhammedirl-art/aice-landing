"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Bot } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-12 overflow-hidden z-10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Transparent Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-semibold tracking-wide uppercase text-cyan-300">
            College of Engineering Chengannur
          </span>
        </motion.div>

        {/* Main Heading with Crisp Shadow for Readability */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
        >
          Artificial Intelligence & <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Cybernetics Association
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
        >
          Empowering the next generation of AI innovators, machine learning developers, and automation leaders at CEC.
        </motion.p>

        {/* CTA Buttons - Semi-Transparent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href="#register"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-500/80 hover:bg-cyan-400 text-black font-bold flex items-center justify-center gap-2 backdrop-blur-md transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)]"
          >
            Join AICE <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <Bot className="w-4 h-4 text-cyan-400" /> Discover More
          </a>
        </motion.div>

      </div>
    </section>
  );
}