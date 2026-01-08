import React from "react";
import Image from "next/image";

const fleet = [
  {
    name: "White Wedding Carriage",
    description: "The crown jewel of our fleet. This elegant, pristine white carriage is the perfect choice for weddings, providing a fairy-tale entrance and a romantic backdrop for photos.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/carriage-4-edited-2.jpg",
    features: ["Padded Seats", "Convertible Top", "Decorated Options"]
  },
  {
    name: "Spacious Passenger Wagon",
    description: "Perfect for larger groups and community events. This sturdy, comfortable wagon allows friends and family to enjoy the ride together.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/Wedding-Carriage-1-1.jpg",
    features: ["10-12 Passenger Capacity", "Easy Access Steps", "All-Weather Ready"]
  },
  {
    name: "Classic Covered Wagon",
    description: "Experience the true spirit of the American West. Our covered wagon offers a nostalgic journey that's both fun and educational.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/IMG_0002-3.jpeg",
    features: ["Canvas Cover", "Traditional Wood Finish", "Authentic Look"]
  }
];

export default function ModernWagons() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Our Fleet</span>
          <h2 className="text-4xl md:text-5xl mb-6">Meticulously Maintained Wagons & Carriages</h2>
          <p className="text-muted-foreground font-light">
            Each vehicle in our fleet is chosen for its character, comfort, and historical charm.
          </p>
        </div>

        <div className="space-y-32">
          {fleet.map((item, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-[16/10] overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <h3 className="text-3xl font-serif mb-6">{item.name}</h3>
                <p className="text-lg text-muted-foreground mb-8 font-light leading-relaxed">
                  {item.description}
                </p>
                <div className="space-y-4">
                  <h4 className="text-sm uppercase tracking-widest font-medium text-accent">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-4">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
