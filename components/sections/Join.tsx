"use client";

import { useState } from "react";
import confetti from "canvas-confetti";

export default function Join() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <section id="join" className="py-24 bg-[#090A0F] text-white px-6">
      <div className="max-w-3xl mx-auto text-center p-10 rounded-3xl bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent border border-white/10 backdrop-blur-xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Join AICE Today</h2>
        <p className="text-gray-400 mb-8">
          Ready to build next-generation AI projects at CEC? Become an official member!
        </p>

        {submitted ? (
          <div className="p-6 rounded-xl bg-cyan-500/20 border border-cyan-500 text-cyan-300 font-medium">
            🎉 Membership Request Submitted! Welcome to AICE.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your student email..."
              className="px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 flex-1"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-all"
            >
              Join Now
            </button>
          </form>
        )}
      </div>
    </section>
  );
}