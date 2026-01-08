import React from 'react';
import Image from 'next/image';

/**
 * TeamShowcase Section
 * Clones the wide image section displaying "Mocha, Beau and Latte"
 * strictly adhering to the light theme and design instructions provided.
 */

const TeamShowcase: React.FC = () => {
  // Using the primary source asset provided in the prompt
  const teamImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/IMG_0002-3.jpeg";

  return (
    <section className="bg-[#FDF0E1] py-[60px] md:py-[80px]">
      <div className="mx-auto px-0 md:px-5 max-w-full">
        {/* Container for the image to maintain its original alignment and full-width feel */}
        <div className="w-full flex flex-col items-center">
          <figure className="m-0 p-0 w-full max-w-[1200px]">
            {/* The image is displayed with a 16:9 aspect ratio as specified in the High-Level Design */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={teamImageUrl}
                alt="Mocha, Beau and Latte"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            {/* Caption styling based on the original site's visual hierarchy */}
            <figcaption className="mt-[10px] text-[13px] text-[#3A3A3A] italic font-sans px-5 md:px-0">
              Mocha, Beau and Latte
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Spacer div to match the "air" between sections as per design system */}
      <div className="h-[40px] md:h-[60px]" aria-hidden="true" />
    </section>
  );
};

export default TeamShowcase;