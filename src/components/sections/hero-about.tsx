import React from 'react';
import Image from 'next/image';

const HeroAbout = () => {
  return (
    <section className="bg-[#FBF0E2] text-[#000000] font-sans">
      <div className="container mx-auto px-[20px] max-w-[1200px] pt-[60px] pb-[40px]">
        {/* Hero Header */}
        <header className="mb-[32px]">
          <h1 className="text-[32px] font-medium leading-[1.2] mb-[16px]">
            About LaCrosse Wagon Hitch
          </h1>
          <h2 className="text-[24px] font-medium leading-[1.3] mb-[32px]">
            Professional Carriage and Wagon Rides for Weddings and Events
          </h2>
        </header>

        {/* Content Section with Gallery and Text */}
        <div className="flex flex-col gap-0">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-[20px]">
            {/* Gallery */}
            <div className="flex flex-col md:flex-row gap-[20px] mb-[30px]">
              <div className="flex-1">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/Wedding-Carriage-1-1.jpg"
                  alt="Wedding Carriage side view near a large stone building"
                  width={723}
                  height={1024}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="flex-1">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/carriage-4-edited-2.jpg"
                  alt="Wedding Carriage being drawn by horses on a road"
                  width={1200}
                  height={1600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Descriptive Text */}
            <div className="max-w-full space-y-[24px]">
              <p className="text-[16px] leading-[1.6]">
                LaCrosse Wagon Hitch was born from a lifelong passion for the simple joy of horse-drawn carriage and wagon rides. As a weekend venture fueled by love not just for horses, but for sharing memorable experiences, this business brings the charm of old-world transportation to life in the modern day.
              </p>
              <p className="text-[16px] leading-[1.6]">
                We are proud to offer a variety of authentic rides with our team of quarter horses and a collection of classic wagons, including a covered wagon, a spacious passenger wagon, and a stunning white wedding carriage. Whether it is a special event or just a leisurely outing, each ride is designed to bring smiles, laughter, and a touch of nostalgia.
              </p>
              <p className="text-[16px] leading-[1.6]">
                At LaCrosse Wagon Hitch, we believe in creating unforgettable moments through the timeless magic of horse-drawn travel. Let us take you on a ride you’ll always remember.
              </p>
            </div>
          </div>
        </div>

        {/* Full-Width Feature Image */}
        <div className="mt-[60px] w-full">
          <figure className="m-0 overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/Wedding-Carriage-1-1.jpg" // Note: Replaced with available high-quality asset if specific "Mocha" image is missing in section assets list. Based on HTML structure it was a large 1200x900 image.
              alt="Mocha, Beau and Latte"
              width={1200}
              height={900}
              className="w-full h-auto aspect-[16/9] object-cover"
            />
            <figcaption className="mt-[12px] text-[14px] text-[#666666] italic">
              Mocha, Beau and Latte
            </figcaption>
          </figure>
        </div>

        {/* Contact/Social Info */}
        <div className="mt-[80px] text-center space-y-[24px]">
          <div>
            <p className="m-0 font-normal uppercase tracking-wide">
              LACROSSEWAGONHITCH@GMAIL.COM
            </p>
            <p className="m-0 font-normal">
              Buckley, Washington
            </p>
          </div>
          
          <div>
            <a 
              href="https://www.facebook.com/share/1GCDThWXAp/?mibextid=wwXIfr" 
              className="text-[#A16A46] hover:opacity-80 transition-opacity text-[16px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit LaCrosse Wagon Hitch on Facebook
            </a>
          </div>

          <div>
            <p className="m-0 font-normal">
              Beau LaCrosse, Owner
            </p>
            <p className="m-0 font-normal">
              (253)261-3466
            </p>
          </div>

          <div className="pt-[40px] pb-[20px]">
            <p className="text-[13px] text-[#666666]">
              Designed with <a href="https://wordpress.com" className="text-[#A16A46] underline decoration-1 underline-offset-2">WordPress</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;