import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Weddings",
    description: "Make your special day even more magical with our stunning white wedding carriage. Perfect for grand entrances and romantic exits.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/carriage-4-edited-2.jpg",
  },
  {
    title: "Special Events",
    description: "From corporate gatherings to community festivals, our wagons add a touch of rustic charm and fun for guests of all ages.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/Wedding-Carriage-1-1.jpg",
  },
  {
    title: "Leisurely Outings",
    description: "Enjoy a peaceful ride through the scenic landscapes of Buckley. A perfect way to slow down and appreciate nature.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/IMG_0002-3.jpeg",
  },
];

export default function ServiceGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Unforgettable Experiences</h2>
          <p className="text-muted-foreground">
            Whether it's a grand wedding or a quiet afternoon ride, we bring the charm of old-world transportation to your modern-day celebrations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-[400px] mb-6 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl text-white mb-2">{service.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
