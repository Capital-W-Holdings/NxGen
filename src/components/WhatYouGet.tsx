"use client";

import { motion } from "framer-motion";
import { Users, Calendar, BookOpen, Key } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "The Inner Circle",
    description:
      "A private, curated community of builders, givers, and investors. Not a directory - a living network of people who are genuinely invested in each other's growth.",
  },
  {
    icon: Calendar,
    title: "Curated Events",
    description:
      "Intimate dinners, off-site retreats, and city gatherings designed for depth over scale. Every event is built around one thing: real conversation between real people.",
  },
  {
    icon: BookOpen,
    title: "Media & Education",
    description:
      "Courses, long-form conversations, and original content created for people building at the frontier - of business, of self, and of what it means to live with intention.",
  },
  {
    icon: Key,
    title: "Access & Resources",
    description:
      "Capital, expertise, warm introductions, and open doors that would otherwise take a decade to earn. We believe access should flow to people with character, not just credentials.",
  },
];

export default function WhatYouGet() {
  return (
    <section className="relative py-32 bg-black-light">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pearl/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-6">
            What You Get
          </p>
          <h2 className="text-3xl md:text-4xl text-pearl font-bold">
            Built for people who want to go deeper.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-black border border-pearl/10 flex items-center justify-center group-hover:border-blush/30 transition-colors duration-300">
                  <benefit.icon
                    size={22}
                    className="text-blush"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-pearl font-medium mb-3 group-hover:text-blush transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-text-soft leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <a
            href="#apply"
            className="inline-block px-10 py-4 text-xs tracking-[0.2em] text-black bg-blush rounded-full hover:bg-pearl transition-all duration-300"
          >
            APPLY TO JOIN NXGEN
          </a>
        </div>
      </div>
    </section>
  );
}
