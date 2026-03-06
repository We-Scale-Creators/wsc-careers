import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyWSC from "@/components/WhyWSC";
import RolesGrid from "@/components/RolesGrid";
import Footer from "@/components/Footer";

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhyWSC />
        <RolesGrid />
      </main>
      <Footer />
    </>
  );
}
