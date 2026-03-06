"use client";

import dynamic from "next/dynamic";

const PopupButton = dynamic(
  () => import("@typeform/embed-react").then((mod) => mod.PopupButton),
  { ssr: false }
);

interface TypeformButtonProps {
  className?: string;
}

export default function TypeformButton({ className }: TypeformButtonProps) {
  return (
    <PopupButton id="YFvvwYCM" size={80} className={className}>
      Apply Now &rarr;
    </PopupButton>
  );
}
