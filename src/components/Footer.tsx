"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  community: [
    { name: "About NxGeN", href: "#thesis" },
    { name: "Our Pillars", href: "#community" },
    { name: "Events", href: "#events" },
  ],
  getInvolved: [
    { name: "Apply to Join", href: "#apply" },
    { name: "FAQs", href: "#" },
    { name: "Contact Us", href: "mailto:team@nxgen.club" },
  ],
};

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/nxgen.club/" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/nxgenclub" },
];

export default function Footer() {
  return (
    <footer className="relative py-20 bg-black border-t border-pearl/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-pearl mb-4"
            >
              NxGeN
            </motion.h3>
            <p className="text-text-soft text-sm leading-relaxed max-w-sm">
              A community of builders, givers, and investors leading the next
              generation—with purpose, generosity, and care.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-8">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black-light border border-pearl/10 flex items-center justify-center hover:border-blush/30 hover:text-blush transition-all duration-300"
                >
                  <social.icon size={18} className="text-pearl-muted" />
                </a>
              ))}
            </div>
          </div>

          {/* Community links */}
          <div>
            <p className="text-xs text-text-muted uppercase tracking-widest mb-6">
              Community
            </p>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-pearl-muted hover:text-pearl transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved links */}
          <div>
            <p className="text-xs text-text-muted uppercase tracking-widest mb-6">
              Get Involved
            </p>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-pearl-muted hover:text-pearl transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-pearl/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            © 2025 NxGeN. All rights reserved.
          </p>
          <p className="text-xs text-blush">
            November 5–8, 2026 · Miami
          </p>
        </div>
      </div>
    </footer>
  );
}
