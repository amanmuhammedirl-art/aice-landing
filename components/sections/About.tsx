"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#090A0F] text-white px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-extrabold select-none">
            AICE
          </div>
          <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">About AICE</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">
            Where Artificial Intelligence Meets Innovation
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            AICE (AI Innovation Community for Excellence) is the premier AI-focused student community at College of Engineering Chengannur. We empower students to move beyond theoretical knowledge by building cutting-edge Machine Learning models, running hands-on workshops, and deploying real-world tech projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}