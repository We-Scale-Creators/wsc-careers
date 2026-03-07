"use client";

import dynamic from "next/dynamic";

const PopupButton = dynamic(
  () => import("@typeform/embed-react").then((mod) => mod.PopupButton),
  { ssr: false }
);

interface TypeformButtonProps {
  className?: string;
  formId?: string;
}

export default function TypeformButton({
  className,
  formId = "YFvvwYCM",
}: TypeformButtonProps) {
  return (
    <PopupButton id={formId} size={80} className={className}>
      Apply Now &rarr;
    </PopupButton>
  );
}
