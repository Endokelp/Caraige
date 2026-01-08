import ModernWagons from "@/components/sections/ModernWagons";
import Image from "next/image";

export default function WagonsPage() {
  return (
    <main className="pt-20">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/Wedding-Carriage-1-1.jpg"
          alt="Our Fleet Hero"
          fill
          className="object-cover brightness-50"
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl mb-4 text-white">Our Fleet</h1>
          <p className="text-xl font-light uppercase tracking-[0.4em]">Wagons & Carriages</p>
        </div>
      </section>

      <ModernWagons />

      <section className="py-24 bg-[#F0D9BC]/30">
        <div className="container">
          <div className="bg-white p-12 md:p-20 text-center shadow-sm">
            <h2 className="text-4xl mb-8">Ready for Your Next Event?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light">
              Whether you need a fairy-tale carriage for your wedding or a fun wagon for a group outing, we have the perfect vehicle for you.
            </p>
            <a href="/contact" className="button-primary inline-block">
              Check Availability
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
