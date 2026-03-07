"use client";

import { motion } from "framer-motion";
import type { Job } from "@/data/jobs";
import RoleCard from "./RoleCard";

interface RolesGridProps {
  jobs: Job[];
}

export default function RolesGrid({ jobs }: RolesGridProps) {
  return (
    <section id="roles" className="py-24 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-white mb-4">
            Open Roles
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Join our team and help scale the biggest creators in the world.
          </p>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {jobs.map((job, i) => (
            <RoleCard
              key={job.id}
              job={job}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
