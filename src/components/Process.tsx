"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Tell Us Who You Are",
    description:
      "Share what you're building, how you give back, and what kind of community you're looking for.",
  },
  {
    number: "02",
    title: "A Real Conversation",
    description:
      "A 30-minute call with someone from our founding circle. No pitch—just genuine connection.",
  },
  {
    number: "03",
    title: "Alignment",
    description:
      "We introduce you to people whose work and values align with yours. Their perspective matters.",
  },
  {
    number: "04",
    title: "Welcome",
    description:
      "Full access, personal onboarding, and a warm welcome to the neighborhood—by name, not number.",
  },
];

export default function Process() {
  return (
    <section className="relative py-32 bg-black-light">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-6">
            The Process
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-pearl mb-6">
            Access is earned, not bought.
          </h2>
          <p className="text-text-soft max-w-xl mx-auto">
            We&apos;re looking for character—people who show up, give generously, and
            make others better.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blush/50 via-pearl/10 to-transparent hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-8 items-start"
              >
                {/* Number */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-black border border-pearl/10 flex items-center justify-center">
                  <span className="text-blush text-sm tracking-widest">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-4">
                  <h3 className="text-xl text-pearl font-medium mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-soft leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
