"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Job } from "@/data/jobs";

interface RoleCardProps {
  job: Job;
  index: number;
}

export default function RoleCard({ job, index }: RoleCardProps) {
  return (
    <Link href={`/roles/${job.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card glass-card-hover p-7 cursor-pointer group h-full"
      >
        {/* Title */}
        <h3 className="text-[22px] font-bold text-white mb-4 group-hover:text-wsc-fuchsia transition-colors duration-300">
          {job.title}
        </h3>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {/* Location */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-400/[0.12] text-emerald-400 border border-emerald-400/[0.15]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {job.location.split("(")[0].trim()}
          </span>

          {/* Type */}
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/[0.08] text-white/70 border border-white/[0.1]">
            {job.type}
          </span>

          {/* Compensation */}
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-wsc-accent/[0.12] text-purple-300 border border-wsc-accent/[0.15]">
            {job.compensationShort}
          </span>
        </div>

        {/* Summary */}
        <p className="text-white/55 text-[15px] leading-relaxed mb-6">
          {job.summary}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-wsc-fuchsia transition-colors duration-300">
          View Role & Apply
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
        </div>
      </motion.div>
    </Link>
  );
}
