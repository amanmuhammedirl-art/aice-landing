"use client";

import { motion } from "framer-motion";
import { Cpu, Target } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To cultivate a practical learning environment where students master AI, ML, and Software Engineering through hands-on hackathons, research labs, and open-source contributions.",
  },
  {
    icon: Cpu,
    title: "Our Vision",
    desc: "To establish CEC as a hub of AI innovation, creating leaders who design intelligent systems that solve high-impact global challenges.",
  },
];

export default function MissionVision() {
  return (
    <section className="py-16 bg-[#090A0F] text-white px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="p-8 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl"
          >
            <div className="p-3 w-fit rounded-xl bg-cyan-500/10 text-cyan-400 mb-6">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}