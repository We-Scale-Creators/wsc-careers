import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Careers | We Scale Creators",
  description:
    "Join We Scale Creators — a performance marketing agency that partners with top influencers to launch and scale 7-figure campaigns. Browse open roles and apply today.",
  openGraph: {
    title: "Careers | We Scale Creators",
    description:
      "Join We Scale Creators and help scale the biggest creators in the world. Browse open roles now.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning={true}>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
