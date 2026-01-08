import ModernAbout from "@/components/sections/ModernAbout";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/IMG_0002-3.jpeg"
          alt="About Us Hero"
          fill
          className="object-cover brightness-50"
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl mb-4 text-white">Our Story</h1>
          <p className="text-xl font-light uppercase tracking-[0.4em]">Heritage & Passion</p>
        </div>
      </section>
      
      <ModernAbout />
      
      <section className="py-24 bg-[#F0D9BC]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl mb-6">Our Magnificent Team</h2>
            <p className="text-muted-foreground font-light text-lg">
              Behind every memorable ride is our team of beautiful quarter horses and our dedicated owner, Beau LaCrosse.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/IMG_0002-3.jpeg"
                alt="Mocha, Beau and Latte"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl">Mocha, Beau & Latte</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Meet the heart and soul of LaCrosse Wagon Hitch. Our quarter horses, Mocha and Latte, are known for their gentle nature and impressive strength. Led by Beau LaCrosse, they've become local favorites in Buckley, bringing smiles to everyone they meet.
              </p>
              <div className="pt-4">
                <blockquote className="border-l-4 border-accent pl-6 italic text-xl font-serif text-primary/80">
                  "It's not just about the destination, it's about the connection we make along the way."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
