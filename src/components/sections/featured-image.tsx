import React from 'react';
import Image from 'next/image';

/**
 * FeaturedImage Component
 * 
 * Clones the large featured image section displaying a photo of the owner with two horses,
 * including the caption 'Mocha, Beau and Latte'.
 * 
 * Based on the design instructions:
 * - Large featured image
 * - Owner with two horses
 * - Caption: 'Mocha, Beau and Latte'
 * - Centered alignment and significant padding
 */

const FeaturedImage = () => {
  // Asset validation: Using the primary image from provided assets
  const featuredImageSrc = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/IMG_0002-3.jpeg";

  return (
    <section className="wp-block-group alignfull is-style-section-1 is-content-justification-center py-[60px] md:py-[80px]">
      <div className="container mx-auto px-[20px] max-w-[1240px]">
        <figure className="wp-block-image alignwide size-full aspect-[16/9] m-0">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <Image
              src={featuredImageSrc}
              alt="Owner with two horses - Mocha, Beau and Latte"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
          <figcaption className="wp-element-caption mt-[12px] text-left text-[14px] leading-[1.6] text-[#666666] italic font-sans">
            Mocha, Beau and Latte
          </figcaption>
        </figure>
      </div>

      <style jsx global>{`
        /* Replicating specific alignment and layout constraints from the original site */
        .wp-block-group.alignfull {
          width: 100%;
          background-color: transparent;
        }
        
        @media (min-width: 782px) {
          .wp-block-image.alignwide {
            margin-left: auto;
            margin-right: auto;
          }
        }

        .wp-element-caption {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #666666;
          font-style: italic;
        }
      `}</style>
    </section>
  );
};

export default FeaturedImage;