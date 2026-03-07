import { notFound } from "next/navigation";
import type { Metadata } from "next";
import RoleDetailClient from "./RoleDetailClient";
import { supabase } from "@/lib/supabase";
import { transformJobToSections, DbJob } from "@/lib/transformJob";

export const revalidate = 60;
export const dynamicParams = true;

interface RolePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { data: jobs } = await supabase
    .from("jobs")
    .select("slug")
    .eq("status", "published");

  return (jobs || []).map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: RolePageProps): Promise<Metadata> {
  const { slug } = await params;
  const { data: dbJob } = await supabase
    .from("jobs")
    .select("title, short_description")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (!dbJob) return { title: "Role Not Found | We Scale Creators" };

  return {
    title: `${dbJob.title} | We Scale Creators`,
    description: dbJob.short_description || "",
    openGraph: {
      title: `${dbJob.title} | We Scale Creators`,
      description: dbJob.short_description || "",
      type: "website",
    },
  };
}

export default async function RolePage({ params }: RolePageProps) {
  const { slug } = await params;
  const { data: dbJob } = await supabase
    .from("jobs")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (!dbJob) notFound();

  const job = transformJobToSections(dbJob as DbJob);

  return <RoleDetailClient job={job} />;
}
