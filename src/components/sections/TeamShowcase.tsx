import React from 'react';
import Image from 'next/image';

/**
 * TeamShowcase component
 * Clones the large landscape image section showing two horses and a handler
 * with the caption "Mocha, Beau and Latte," using an aspect ratio of 16/9
 * and centered within the container.
 */
const TeamShowcase: React.FC = () => {
  // Asset path from the provided assets list
  const imageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/IMG_0002-3.jpeg";

  return (
    <section className="wp-block-group alignfull is-style-section-1 is-content-justification-center is-layout-constrained wp-container-core-group-is-layout-438686ab wp-block-group-is-layout-constrained py-[60px]">
      <div className="container mx-auto px-[20px] flex flex-col items-center">
        <figure className="wp-block-image alignwide size-full aspect-video w-full max-w-[1200px] mb-0 last:mb-0">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <Image
              src={imageUrl}
              alt="Mocha, Beau and Latte"
              fill
              className="wp-image-32 object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
          <figcaption 
            className="wp-element-caption text-center mt-[0.5rem] text-[#666666] font-sans text-[13px] leading-[1.4] w-full"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'
            }}
          >
            Mocha, Beau and Latte
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default TeamShowcase;