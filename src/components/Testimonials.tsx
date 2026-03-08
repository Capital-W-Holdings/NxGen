"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "I've been in a lot of rooms. NxGeN is the first one where I felt like people genuinely wanted me to win - not just wanted something from me. That's rare, and it's worth protecting.",
    author: "Sarah K.",
    role: "Founder & Operator",
  },
  {
    quote:
      "The events changed something in me. Not because of who was in the room, though that was extraordinary, but because of how people showed up. Present. Generous. Real.",
    author: "Marcus T.",
    role: "Investor & Advisor",
  },
  {
    quote:
      "I came expecting a network. I found people who became friends, collaborators, and in one case, a co-founder. NxGeN is where long-term relationships actually start.",
    author: "Amara J.",
    role: "Creator & Community Builder",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 bg-black">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pearl/10 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <p className="text-blush text-xs tracking-[0.3em] uppercase mb-16 text-center">
          Community Voices
        </p>

        {/* Main quote */}
        <div className="relative min-h-[350px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <blockquote className="text-2xl md:text-3xl lg:text-4xl text-pearl leading-relaxed max-w-4xl mb-12 font-medium">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </blockquote>

              <div>
                <p className="text-pearl font-medium text-lg">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-text-muted text-sm">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-blush w-10"
                  : "bg-pearl/20 hover:bg-pearl/40 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
