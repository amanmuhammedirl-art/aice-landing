"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Users, Award, Calendar, ArrowUpRight } from "lucide-react";

const eventCategories = [
  { id: "all", label: "All Activities" },
  { id: "workshops", label: "Workshops & Bootcamp" },
  { id: "hackathons", label: "Hackathons & Contests" },
  { id: "sessions", label: "Tech Talks & Seminars" },
];

const activities = [
  {
    title: "Deep Learning & Neural Networks Bootcamp",
    category: "workshops",
    type: "Hands-on Workshop",
    icon: Cpu,
    description: "Master TensorFlow and PyTorch fundamentals by building computer vision models from scratch.",
    badge: "Upcoming",
    tagColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  },
  {
    title: "AICE 24-Hour AI Hackathon",
    category: "hackathons",
    type: "National Level Contest",
    icon: Award,
    description: "Build innovative AI solutions for real-world problems. Win cash prizes and mentorship opportunities.",
    badge: "Featured",
    tagColor: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
  },
  {
    title: "Generative AI & LLM Systems Session",
    category: "sessions",
    type: "Expert Seminar",
    icon: Terminal,
    description: "Explore the architecture behind large language models, prompt engineering, and RAG pipelines.",
    badge: "Special Session",
    tagColor: "text-blue-400 border-blue-500/30 bg-blue-500/10",
  },
  {
    title: "Open Source AI Project Sprints",
    category: "workshops",
    type: "Community Activity",
    icon: Users,
    description: "Collaborate with fellow CEC students to contribute to open-source machine learning repositories.",
    badge: "Monthly",
    tagColor: "text-teal-400 border-teal-500/30 bg-teal-500/10",
  },
];

export default function Events() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredActivities = activeTab === "all"
    ? activities
    : activities.filter((act) => act.category === activeTab);

  return (
    <section id="events" className="py-24 bg-transparent text-white px-6 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 me-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wide uppercase border border-cyan-500/20">
            <Calendar className="w-3.5 h-3.5" /> Campus Initiatives
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Events & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Activities</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            From hands-on coding bootcamps to national hackathons, discover how AICE drives practical AI learning at College of Engineering Chengannur.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {eventCategories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 border ${
                activeTab === tab.id
                  ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                  : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Activity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredActivities.map((act, index) => {
            const Icon = act.icon;
            return (
              <motion.div
                key={act.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${act.tagColor}`}>
                      {act.badge}
                    </span>
                    <Icon className="w-6 h-6 text-cyan-400 opacity-80 group-hover:scale-110 transition-transform" />
                  </div>

                  <div>
                    <span className="text-xs text-gray-400 font-medium">{act.type}</span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors flex items-center gap-1">
                      {act.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {act.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span>Organized by AICE CEC</span>
                  <span className="text-cyan-400 font-medium group-hover:underline cursor-pointer">Learn More →</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}