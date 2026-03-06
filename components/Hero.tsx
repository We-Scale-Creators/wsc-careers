"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 animated-gradient" />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15)_0%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-32 text-center">
        {/* Hiring Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="pulse-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.1] backdrop-blur-md border border-white/[0.15] text-sm font-medium text-white/90">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            We&apos;re Hiring
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white max-w-4xl mx-auto mb-6"
        >
          Join The Fastest Growing{" "}
          <span className="gradient-text">Agency In The Industry</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We Scale Creators is a performance marketing agency that partners with
          top influencers and creators to launch and scale 7-figure campaigns.
          We&apos;re growing fast and looking for exceptional talent to join our
          team.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#roles"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0B0B1A] font-semibold text-base rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:-translate-y-0.5"
          >
            View Open Roles
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Bottom fade into dark */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B1A] to-transparent" />
    </section>
  );
}
