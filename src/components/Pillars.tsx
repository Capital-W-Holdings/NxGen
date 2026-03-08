"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const pillars = [
  {
    number: "01",
    title: "Build",
    description:
      "The future of work is being rewritten. NxGeN gives you the community, resources, and education to stay ahead.",
  },
  {
    number: "02",
    title: "Invest",
    description:
      "Deploy capital with care—toward people, ideas, and futures worth betting on.",
  },
  {
    number: "03",
    title: "Give",
    description:
      "The most powerful thing you can do with success is multiply it. We direct resources where they're needed most.",
  },
  {
    number: "04",
    title: "Experience",
    description:
      '"Happiness is only real when shared." We gather for moments worth remembering.',
  },
];

export default function Pillars() {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="community"
      ref={containerRef}
      className="relative py-32 bg-black-light"
    >
      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-6">
            The People
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-pearl max-w-2xl">
            Four ways to show up.
            <br />
            <span className="text-pearl-muted">One community.</span>
          </h2>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-pearl/5">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative bg-black-light p-10 cursor-pointer group"
            >
              {/* Hover background */}
              <motion.div
                initial={false}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-b from-blush/5 to-transparent"
              />

              <div className="relative z-10">
                <p className="text-blush/50 text-xs tracking-widest mb-8">
                  {pillar.number}
                </p>

                <h3 className="text-3xl md:text-4xl text-pearl font-light mb-6 group-hover:text-blush transition-colors duration-300">
                  {pillar.title}
                </h3>

                <motion.p
                  initial={false}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0.6,
                    y: hoveredIndex === index ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-text-soft text-sm leading-relaxed"
                >
                  {pillar.description}
                </motion.p>
              </div>

              {/* Bottom accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-px bg-blush origin-left"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
