"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "I've been in a lot of rooms. NxGeN is the first one where I felt like people genuinely wanted me to win.",
    author: "Sarah K.",
    role: "Founder & Operator",
  },
  {
    quote:
      "The events changed something in me. Not because of who was in the room, but because of how people showed up. Present. Generous. Real.",
    author: "Marcus T.",
    role: "Investor & Advisor",
  },
  {
    quote:
      "I came expecting a network. I found people who became friends, collaborators, and in one case, a co-founder.",
    author: "Amara J.",
    role: "Creator & Community Builder",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative py-32 bg-black-light">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <p className="text-blush text-xs tracking-[0.3em] uppercase mb-16 text-center">
          Community Voices
        </p>

        {/* Main quote */}
        <div className="relative min-h-[300px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                y: activeIndex === index ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 flex flex-col items-center justify-center text-center ${
                activeIndex === index ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <blockquote className="text-2xl md:text-4xl font-light text-pearl leading-relaxed max-w-3xl mb-12">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div>
                <p className="text-pearl font-medium">{testimonial.author}</p>
                <p className="text-text-muted text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-3 mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-blush w-8"
                  : "bg-pearl/20 hover:bg-pearl/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
