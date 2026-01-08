import React from 'react';
import Image from 'next/image';

const ImageGalleryGrid = () => {
  return (
    <section className="bg-[#FBF0E2] py-[60px] px-5">
      <div className="max-w-[1240px] mx-auto">
        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Dual-Image Gallery */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[723/1024] w-full bg-[#EDDCC4]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/Wedding-Carriage-1-1.jpg"
                  alt="Wedding Carriage in front of stone building"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative aspect-[1200/1600] w-full bg-[#EDDCC4]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/carriage-4-edited-2.jpg"
                  alt="White wedding carriage on forest road"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Business History and Mission Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-[16px] leading-[1.6] text-black font-sans m-0">
              LaCrosse Wagon Hitch was born from a lifelong passion for the simple joy of horse-drawn carriage and wagon rides. As a weekend venture fueled by love not just for horses, but for sharing memorable experiences, this business brings the charm of old-world transportation to life in the modern day.
            </p>
            <p className="text-[16px] leading-[1.6] text-black font-sans m-0">
              We are proud to offer a variety of authentic rides with our team of quarter horses and a collection of classic wagons, including a covered wagon, a spacious passenger wagon, and a stunning white wedding carriage. Whether it is a special event or just a leisurely outing, each ride is designed to bring smiles, laughter, and a touch of nostalgia.
            </p>
            <p className="text-[16px] leading-[1.6] text-black font-sans m-0">
              At LaCrosse Wagon Hitch, we believe in creating unforgettable moments through the timeless magic of horse-drawn travel. Let us take you on a ride you&rsquo;ll always remember.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGalleryGrid;