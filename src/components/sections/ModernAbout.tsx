import React from "react";
import Image from "next/image";

export default function ModernAbout() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] z-10">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/IMG_0002-3.jpeg"
                alt="Beau LaCrosse with horses"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent/20 -z-0" />
            <div className="absolute -top-12 -left-12 text-[120px] font-serif opacity-[0.03] select-none pointer-events-none">
              History
            </div>
          </div>

          <div>
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Born from a Lifelong Passion</h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                LaCrosse Wagon Hitch was born from a lifelong passion for the simple joy of horse-drawn carriage and wagon rides. What started as a weekend venture fueled by love for horses has grown into a cherished business dedicated to sharing memorable experiences.
              </p>
              <p>
                As a family-owned operation in Buckley, Washington, we take immense pride in our team of quarter horses and our carefully maintained fleet. For us, this isn't just a business—it's about bringing the charm of old-world transportation to life in the modern day.
              </p>
              <p>
                Our mission is simple: to create unforgettable moments through the timeless magic of horse-drawn travel. Whether it's the elegance of a wedding carriage or the fun of a passenger wagon, we ensure every ride is a journey to remember.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
