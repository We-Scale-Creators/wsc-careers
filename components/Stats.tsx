"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "$4M+", label: "Monthly Run Rate" },
  { value: "60M+", label: "Combined Partner Followers" },
  { value: "$90M+", label: "In Revenue Generated" },
];

export default function Stats() {
  return (
    <section className="relative z-10 -mt-16 mb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-[0.05em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
