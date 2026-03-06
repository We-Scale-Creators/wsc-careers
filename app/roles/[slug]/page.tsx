import { notFound } from "next/navigation";
import { jobs } from "@/data/jobs";
import type { Metadata } from "next";
import RoleDetailClient from "./RoleDetailClient";

interface RolePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: RolePageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return { title: "Role Not Found | We Scale Creators" };

  return {
    title: `${job.title} | We Scale Creators`,
    description: job.summary,
    openGraph: {
      title: `${job.title} | We Scale Creators`,
      description: job.summary,
      type: "website",
    },
  };
}

export default async function RolePage({ params }: RolePageProps) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();

  return <RoleDetailClient job={job} />;
}
