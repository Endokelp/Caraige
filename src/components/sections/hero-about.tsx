import React from 'react';
import Image from 'next/image';

const HeroAbout = () => {
  return (
    <section className="bg-[#FDF0E1] pt-[60px] pb-[40px]">
      <div className="container max-w-[1240px] px-[20px] mx-auto">
        {/* Header Section */}
        <header className="mb-[1.5rem]">
          <h1 className="text-[32px] font-[400] leading-[1.2] text-black mb-[1rem]">
            About LaCrosse Wagon Hitch
          </h1>
          <h2 className="text-[26px] font-[400] leading-[1.3] text-black mb-[1.5rem]">
            Professional Carriage and Wagon Rides for Weddings and Events
          </h2>
        </header>

        {/* Gallery and Text Content Layout */}
        <div className="flex flex-col gap-[20px]">
          {/* Side-by-side vertical images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-[1.5rem]">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/Wedding-Carriage-1-1.jpg"
                alt="Wedding Carriage with horses in front of a stone building"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/carriage-4-edited-2.jpg"
                alt="White wedding carriage on a sunlit road"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* About Text Content */}
          <div className="text-[16px] leading-[1.6] text-black max-w-[100%] space-y-[1.5rem]">
            <p>
              LaCrosse Wagon Hitch was born from a lifelong passion for the simple joy of horse-drawn carriage and wagon rides. As a weekend venture fueled by love not just for horses, but for sharing memorable experiences, this business brings the charm of old-world transportation to life in the modern day.
            </p>
            <p>
              We are proud to offer a variety of authentic rides with our team of quarter horses and a collection of classic wagons, including a covered wagon, a spacious passenger wagon, and a stunning white wedding carriage. Whether it is a special event or just a leisurely outing, each ride is designed to bring smiles, laughter, and a touch of nostalgia.
            </p>
            <p>
              At LaCrosse Wagon Hitch, we believe in creating unforgettable moments through the timeless magic of horse-drawn travel. Let us take you on a ride you’ll always remember.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;