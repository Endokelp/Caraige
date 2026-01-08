import ModernHero from "@/components/sections/ModernHero";
import ServiceGrid from "@/components/sections/ServiceGrid";
import ModernAbout from "@/components/sections/ModernAbout";
import ModernContact from "@/components/sections/ModernContact";

export default function Home() {
  return (
    <main>
      <ModernHero />
      <ServiceGrid />
      <div className="bg-[#F0D9BC]/30">
        <ModernAbout />
      </div>
      <ModernContact />
    </main>
  );
}
