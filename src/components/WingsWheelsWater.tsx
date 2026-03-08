"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    icon: "✈",
    label: "Wings",
    description: "Private aviation access, aircraft displays, and the most exclusive flight deck conversations you'll ever have.",
  },
  {
    icon: "⊙",
    label: "Wheels",
    description: "A curated lineup of collector and performance vehicles. The kind that gets your wheels turning.",
  },
  {
    icon: "⚓",
    label: "Water",
    description: "Premier yachts and classic boats. An elevated platform for elevated conversations.",
  },
];

export default function WingsWheelsWater() {
  return (
    <section id="www" className="relative bg-black overflow-hidden">
      {/* Hero section with solid dark background */}
      <div className="relative h-[70vh] min-h-[500px] bg-black-light flex flex-col items-center justify-center text-center px-6">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50" />

        <div className="relative z-10">
          <p className="text-pearl/60 text-xs tracking-[0.3em] uppercase mb-8">
            Opening Night · Thursday November 5
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-pearl uppercase tracking-wider leading-tight font-bold">
            Wings
            <br />
            Wheels
            <br />
            & Water
          </h2>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
        {/* Intro */}
        <div className="max-w-3xl mb-20">
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-6">
            The Experience
          </p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-pearl leading-tight mb-8 font-bold">
            Three worlds. One extraordinary night.
          </h3>
          <p className="text-lg text-text-soft leading-relaxed">
            NxGeN opens its flagship Miami experience at the water&apos;s edge. Wings, Wheels & Water brings together private aviation, collector automobiles, and world-class yachts - all curated for the next generation of capital and culture. This is not a trade show. It&apos;s the opening act.
          </p>
        </div>

        {/* Experience cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <span className="text-3xl mb-6 block">{exp.icon}</span>
              <h4 className="text-2xl text-pearl font-medium mb-4 group-hover:text-blush transition-colors">
                {exp.label}
              </h4>
              <p className="text-text-soft leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div>
          <a
            href="#apply"
            className="inline-block px-10 py-4 text-xs tracking-[0.2em] text-black bg-blush rounded-full hover:bg-pearl transition-all duration-300"
          >
            SECURE YOUR PLACE
          </a>
        </div>
      </div>

      {/* Image grid */}
      <div className="relative w-full">
        <Image
          src="/images/www-grid.png"
          alt="Wings Wheels Water Gallery"
          width={1920}
          height={800}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
