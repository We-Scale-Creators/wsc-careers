"use client";

import Link from "next/link";
import type { Job } from "@/data/jobs";
import JobDescription from "@/components/JobDescription";
import TypeformButton from "@/components/TypeformButton";

interface RoleDetailClientProps {
  job: Job;
}

export default function RoleDetailClient({ job }: RoleDetailClientProps) {
  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-[#0a0a1a]/90 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/#roles"
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
            </Link>

            <TypeformButton className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#0B0B1A] text-sm font-semibold rounded-xl hover:bg-white/90 transition-all duration-200 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Gradient Hero Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a1a]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 pt-10 pb-12">
          {/* Title */}
          <h1 className="text-2xl md:text-[32px] font-extrabold text-white mb-5 tracking-tight leading-tight">
            {job.title}
          </h1>

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
      <div className="max-w-3xl mx-auto px-6 md:px-10 pb-36">
        <JobDescription sections={job.sections} />
      </div>

      {/* Sticky Apply Button (Mobile) */}
      <div className="md:hidden fixed bottom-0 right-0 left-0 z-20 p-4 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/95 to-transparent pt-8">
        <TypeformButton className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-white text-[#0B0B1A] text-base font-bold rounded-xl hover:bg-white/90 transition-all duration-200 shadow-[0_-4px_32px_rgba(0,0,0,0.5)] cursor-pointer" />
      </div>
    </div>
  );
}
