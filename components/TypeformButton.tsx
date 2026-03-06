"use client";

import type { ReactNode } from "react";

interface TypeformButtonProps {
  children: ReactNode;
  className?: string;
}

/**
 * A button that opens the Typeform application form as a popup overlay.
 * Uses dynamic import so the @typeform/embed SDK is NEVER loaded at module level —
 * it only loads when the user clicks, preventing ghost DOM elements.
 */
export default function TypeformButton({ children, className }: TypeformButtonProps) {
  const handleClick = async () => {
    const { createPopup } = await import("@typeform/embed");
    createPopup("YFvvwYCM", { size: 80 }).open();
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
