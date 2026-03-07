"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Job } from "@/data/jobs";
import JobDescription from "./JobDescription";

interface RoleModalProps {
  job: Job | null;
  onClose: () => void;
}

export default function RoleModal({ job, onClose }: RoleModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      // Trap focus
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (job) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [job, handleKeyDown]);

  return (
    <AnimatePresence>
      {job && (
        <div className="fixed inset-0 z-[100]" ref={modalRef}>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="modal-overlay absolute inset-0"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute top-0 right-0 bottom-0 w-full max-w-2xl bg-[#0a0a1a] border-l border-white/[0.08] overflow-y-auto"
          >
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-[#0a0a1a]/90 backdrop-blur-xl border-b border-white/[0.08] px-6 md:px-10 py-4">
              <div className="flex items-center justify-between">
                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M12 4l-6 6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Back
                </button>

                {/* TODO: Replace with actual Typeform URLs per role */}
                <a
                  href={"#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#0B0B1A] text-sm font-semibold rounded-xl hover:bg-white/90 transition-all duration-200 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                >
                  Apply Now
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Gradient Hero Banner */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 hero-gradient opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a1a]" />
              <div className="relative z-10 px-6 md:px-10 pt-10 pb-12">
                {/* Title */}
                <h2 className="text-2xl md:text-[32px] font-extrabold text-white mb-5 tracking-tight leading-tight">
                  {job.title}
                </h2>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-emerald-400/[0.15] text-emerald-400 border border-emerald-400/[0.2] backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center px-3.5 py-2 rounded-full text-xs font-semibold bg-white/[0.1] text-white/80 border border-white/[0.12] backdrop-blur-sm">
                    {job.type}
                  </span>
                  <span className="inline-flex items-center px-3.5 py-2 rounded-full text-xs font-semibold bg-wsc-accent/[0.15] text-purple-300 border border-wsc-accent/[0.2] backdrop-blur-sm">
                    {job.compensation}
                  </span>
                </div>
              </div>
            </div>

            {/* JD Content */}
            <div className="px-6 md:px-10 pb-36">
              <JobDescription sections={job.sections} />
            </div>

            {/* Sticky Apply Button (Mobile) */}
            <div className="md:hidden fixed bottom-0 right-0 left-0 z-20 p-4 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/95 to-transparent pt-8">
              {/* TODO: Replace with actual Typeform URLs per role */}
              <a
                href={"#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-white text-[#0B0B1A] text-base font-bold rounded-xl hover:bg-white/90 transition-all duration-200 shadow-[0_-4px_32px_rgba(0,0,0,0.5)]"
              >
                Apply Now
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
