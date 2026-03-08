"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Plane, Car, Anchor } from "lucide-react";

const experiences = [
  {
    icon: Plane,
    label: "Wings",
    description: "Private aviation access and the most exclusive flight deck conversations.",
  },
  {
    icon: Car,
    label: "Wheels",
    description: "Curated collector and performance vehicles that get your wheels turning.",
  },
  {
    icon: Anchor,
    label: "Water",
    description: "Premier yachts and classic boats. Elevated conversations.",
  },
];

export default function WingsWheelsWater() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const x2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="relative py-32 bg-black overflow-hidden">
      {/* Animated background text */}
      <div className="absolute inset-0 flex flex-col justify-center opacity-[0.02] select-none pointer-events-none">
        <motion.p
          style={{ x: x1 }}
          className="text-[15vw] font-bold text-pearl whitespace-nowrap"
        >
          WINGS · WHEELS · WATER ·
        </motion.p>
        <motion.p
          style={{ x: x2 }}
          className="text-[15vw] font-bold text-pearl whitespace-nowrap"
        >
          · WATER · WINGS · WHEELS
        </motion.p>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-6">
            Opening Night · Thursday
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-pearl max-w-3xl leading-tight">
            Three worlds.
            <br />
            <span className="text-pearl-muted">One extraordinary night.</span>
          </h2>
        </div>

        {/* Experience cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group p-8 bg-black-light/50 border border-pearl/5 rounded-2xl hover:border-blush/20 transition-all duration-500"
            >
              <exp.icon
                size={32}
                className="text-blush mb-6 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-2xl text-pearl font-medium mb-4">
                {exp.label}
              </h3>
              <p className="text-text-soft leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
