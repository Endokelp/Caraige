import ModernHero from "@/components/sections/ModernHero";
import ServiceGrid from "@/components/sections/ServiceGrid";
import ModernAbout from "@/components/sections/ModernAbout";
import ModernContact from "@/components/sections/ModernContact";
import ImageGallery from "@/components/ui/image-gallery";
import MapSection from "@/components/sections/MapSection";

export default function Home() {
  return (
    <main>
      <ModernHero />
      <ServiceGrid />
      <div className="bg-[#F0D9BC]/30">
        <ModernAbout />
      </div>
      <ImageGallery
        title="Fleet Showcase"
        description="A closer look at our beautifully maintained wagons and carriages, ready to make your next event truly unforgettable."
      />
      <MapSection />
      <ModernContact />
    </main>
  );
}
