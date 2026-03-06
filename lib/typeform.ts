"use client";

import { createPopup } from "@typeform/embed";

/**
 * Opens the Typeform application form as a popup overlay.
 * Wraps createPopup with a client-side check to prevent SSR issues.
 */
export function openTypeform() {
  if (typeof window === "undefined") return;
  createPopup("YFvvwYCM", { size: 80 }).open();
}
