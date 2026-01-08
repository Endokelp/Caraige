import Navigation from "@/components/sections/Navigation";
import AboutHero from "@/components/sections/AboutHero";
import ImageGalleryGrid from "@/components/sections/ImageGalleryGrid";
import TeamShowcase from "@/components/sections/TeamShowcase";
import ContactDetails from "@/components/sections/ContactDetails";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FBF0E2]">
      <Navigation />
      <main>
        <AboutHero />
        <ImageGalleryGrid />
        <TeamShowcase />
        <ContactDetails />
      </main>
      <Footer />
    </div>
  );
}
