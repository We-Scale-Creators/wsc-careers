"use client";

import TypeformButton from "./TypeformButton";
import type { JobSection } from "@/data/jobs";

interface JobDescriptionProps {
  sections: JobSection[];
}

export default function JobDescription({ sections }: JobDescriptionProps) {
  return (
    <div className="space-y-6">
      {sections.map((section, i) => {
        const isApplySection = section.title === "Apply";

        /* The final "Apply" section gets a special centered CTA treatment */
        if (isApplySection) {
          return (
            <div key={i} className="mt-8 text-center">
              {/* Gradient divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-wsc-accent/40 to-transparent mb-10" />

              <p className="text-white/60 text-base leading-relaxed max-w-md mx-auto mb-8">
                {section.content}
              </p>

              <TypeformButton className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0B0B1A] font-bold text-base rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:-translate-y-0.5 cursor-pointer" />
            </div>
          );
        }

        return (
          <div
            key={i}
            className="glass-card p-6 md:p-8"
          >
            {/* Section header with accent line */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-6 rounded-full bg-gradient-to-b from-wsc-accent to-wsc-fuchsia" />
              <h3 className="text-lg md:text-xl font-bold text-white">
                {section.title}
              </h3>
            </div>

            {/* Content paragraphs */}
            {section.content && (
              <div className="space-y-4">
                {section.content.split("\n\n").map((paragraph, pi) => (
                  <p
                    key={pi}
                    className="text-white/60 text-[15px] leading-[1.8]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {/* List items */}
            {section.listItems && section.listItems.length > 0 && (
              <ul className="space-y-4 mt-4">
                {section.listItems.map((item, li) => (
                  <li key={li} className="flex gap-3 text-[15px] leading-[1.8]">
                    <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-wsc-accent shrink-0" />
                    <span className="text-white/60">
                      {item.bold && (
                        <strong className="text-white font-semibold">
                          {item.bold}{" "}
                        </strong>
                      )}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
