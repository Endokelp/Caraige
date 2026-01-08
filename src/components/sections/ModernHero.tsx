import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ModernHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/Wedding-Carriage-1-1.jpg"
          alt="Rustic Carriage"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="container relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-8xl font-serif font-medium leading-[1.1] mb-8 text-white drop-shadow-lg">
            Timeless Magic of <br />
            <span className="italic">Horse-Drawn</span> Travel
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 max-w-2xl opacity-90 drop-shadow-md">
            Creating unforgettable moments through the simple joy of carriage and wagon rides for your most special occasions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="button-primary text-center">
              Plan Your Event
            </Link>
            <Link href="/wagons" className="button-outline !border-white !text-white hover:!bg-white hover:!text-black text-center">
              View Our Fleet
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-[1px] h-16 bg-white/40 mx-auto" />
      </div>
    </section>
  );
}
