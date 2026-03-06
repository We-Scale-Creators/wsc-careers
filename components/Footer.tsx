"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.2)_0%,transparent_70%)]" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-[44px] font-extrabold tracking-tight text-white mb-5">
              Ready to Scale With Us?
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
              We&apos;re looking for A-players who are focused on results, impact,
              and want to join the fastest growing agency in the world.
            </p>
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
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] py-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; 2026 We Scale Creators. All rights reserved.
          </p>
          <a
            href="https://wescalecreators.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-sm hover:text-white/70 transition-colors duration-200"
          >
            wescalecreators.com
          </a>
        </div>
      </footer>
    </>
  );
}
