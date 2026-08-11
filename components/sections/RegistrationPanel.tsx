"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { User, Mail, GraduationCap, Sparkles, CheckCircle2 } from "lucide-react";

export default function RegistrationPanel() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "Computer Science & Engineering",
    year: "1st Year",
    interest: "Machine Learning",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="register" className="py-24 text-white px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl glass-card glass-card-hover relative overflow-hidden"
        >
          {/* Liquid Glass Top Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          
          {/* Ambient Liquid Internal Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center space-y-3 mb-10 relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-semibold tracking-wide uppercase border border-cyan-400/30 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Portal Open
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              AICE Student Registration
            </h2>
            <p className="text-gray-400 text-sm">Join the AI innovation network at College of Engineering Chengannur</p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12 space-y-4 relative z-10"
            >
              <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
              <h3 className="text-2xl font-bold">Registration Successful!</h3>
              <p className="text-gray-300 max-w-md mx-auto text-sm">
                Welcome to AICE, <span className="text-cyan-400 font-semibold">{formData.fullName}</span>! Check your inbox (<span className="text-cyan-400">{formData.email}</span>) for orientation updates.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold transition-all border border-white/10 backdrop-blur-md"
              >
                Register Another Student
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-300 flex items-center gap-2">
                    <User className="w-4 h-4 text-cyan-400" /> Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Nair"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-input text-white placeholder-gray-500 focus:outline-none text-sm transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-300 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" /> Student Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@ceconline.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-input text-white placeholder-gray-500 focus:outline-none text-sm transition-all"
                  />
                </div>

                {/* Department */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-300 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-cyan-400" /> Department
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-input text-white focus:outline-none text-sm transition-all bg-black/80"
                  >
                    <option>Computer Science & Engineering</option>
                    <option>Electronics & Communication</option>
                    <option>Electrical & Electronics</option>
                    <option>Artificial Intelligence & Data Science</option>
                  </select>
                </div>

                {/* Academic Year */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-300 flex items-center gap-2">
                    Academic Year
                  </label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-input text-white focus:outline-none text-sm transition-all bg-black/80"
                  >
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
                  </select>
                </div>
              </div>

              {/* Primary Interest */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-gray-300">Primary AI Domain Interest</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["Machine Learning", "Computer Vision", "NLP & LLMs", "Robotics"].map((domain) => (
                    <button
                      key={domain}
                      type="button"
                      onClick={() => setFormData({ ...formData, interest: domain })}
                      className={`p-3 rounded-xl border text-xs font-medium text-center transition-all ${
                        formData.interest === domain
                          ? "border-cyan-400 bg-cyan-500/20 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                          : "border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      {domain}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold shadow-[0_0_25px_rgba(0,242,254,0.35)] transition-all duration-300 border border-cyan-300/30"
              >
                Complete Registration
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}