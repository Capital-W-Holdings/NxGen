"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const schedule = [
  {
    day: "THU",
    title: "Wings, Wheels & Water",
    description: "Private aviation, exotic cars, yachts, live entertainment.",
  },
  {
    day: "FRI",
    title: "Build, Invest, Give",
    description: "Panels, keynotes, breakouts. Evening: Diamond District Gala.",
  },
  {
    day: "SAT",
    title: "Play & Compete",
    description: "Golf, padel, whiskey & watches, poker championship.",
  },
  {
    day: "SUN",
    title: "Until Next Time",
    description: "Intimate closing brunch. Reveal next summit location.",
  },
];

export default function FlagshipEvent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-32 bg-black-light"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pearl/10 to-transparent" />

      <motion.div
        style={{ scale, opacity }}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-6">
            Flagship Event
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-pearl tracking-tight">
            NxGeN Miami
          </h2>
          <p className="mt-6 text-xl text-pearl-muted">November 5–8, 2026</p>
        </div>

        {/* Stats row */}
        <div className="flex justify-center gap-16 mb-24">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-light text-pearl">4</p>
            <p className="text-sm text-text-muted uppercase tracking-widest mt-2">
              Days
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-light text-pearl">100</p>
            <p className="text-sm text-text-muted uppercase tracking-widest mt-2">
              Curated Attendees
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-light text-pearl">∞</p>
            <p className="text-sm text-text-muted uppercase tracking-widest mt-2">
              Connections
            </p>
          </div>
        </div>

        {/* Schedule grid */}
        <div className="grid md:grid-cols-4 gap-px bg-pearl/5 rounded-2xl overflow-hidden">
          {schedule.map((item, index) => (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black-light p-8 hover:bg-black-mid transition-colors duration-500 group"
            >
              <p className="text-blush text-xs tracking-[0.2em] mb-4">
                {item.day}
              </p>
              <h3 className="text-xl text-pearl font-medium mb-3 group-hover:text-blush transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-text-soft leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#apply"
            className="inline-block px-8 py-3 text-sm tracking-widest text-pearl border border-pearl/20 rounded-full hover:border-blush hover:text-blush transition-all duration-300"
          >
            SECURE YOUR PLACE
          </a>
        </div>
      </motion.div>
    </section>
  );
}
