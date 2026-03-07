import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyWSC from "@/components/WhyWSC";
import RolesGrid from "@/components/RolesGrid";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import { transformJobToSections, DbJob } from "@/lib/transformJob";

export const revalidate = 60;

export default async function CareersPage() {
  // Fetch published jobs from Supabase
  const { data: dbJobs } = await supabase
    .from("jobs")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: true });

  const jobs = (dbJobs as DbJob[] | null)?.map(transformJobToSections) || [];

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhyWSC />
        <RolesGrid jobs={jobs} />
      </main>
      <Footer />
    </>
  );
}
