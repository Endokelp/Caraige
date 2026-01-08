import ModernContact from "@/components/sections/ModernContact";
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
      
      <section className="py-24 bg-[#F0D9BC]/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] relative overflow-hidden shadow-lg">
              {/* This would ideally be a Google Map, but using an image for now */}
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/IMG_0002-3.jpeg"
                alt="Map Placeholder"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-2xl mb-4 text-white">Serving Buckley & Surrounding Areas</h3>
                  <p className="text-lg opacity-80">Contact us to verify if we service your specific location.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
