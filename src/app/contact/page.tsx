import ModernContact from "@/components/sections/ModernContact";
import MapSection from "@/components/sections/MapSection";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/carriage-4-edited-2.jpg"
          alt="Contact Us Hero"
          fill
          className="object-cover brightness-50"
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl mb-4 text-white">Contact Us</h1>
          <p className="text-xl font-light uppercase tracking-[0.4em]">Get in Touch</p>
        </div>
      </section>

      <ModernContact />

      <MapSection />
    </main>
  );
}
