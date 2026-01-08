import React from 'react';

const AboutHero = () => {
  return (
    <section 
      className="bg-[#FBF0E2] pt-[60px] pb-[20px]"
      aria-labelledby="hero-title"
    >
      <div className="container max-w-[1200px] mx-auto px-[20px]">
        {/* Main Heading Section */}
        <header className="mb-[1.5rem]">
          <h1 
            id="hero-title"
            className="text-[32px] font-bold leading-[1.3] text-[#000000] m-0"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'
            }}
          >
            About LaCrosse Wagon Hitch
          </h1>
        </header>

        {/* Sub-heading Section */}
        <div className="mb-[1.5rem]">
          <h2 
            className="text-[24px] font-semibold leading-[1.4] text-[#000000] m-0"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'
            }}
          >
            Professional Carriage and Wagon Rides for Weddings and Events
          </h2>
        </div>

        {/* Spacer to replicate original layout rhythm */}
        <div className="h-[1.5em]" aria-hidden="true" />
      </div>
    </section>
  );
};

export default AboutHero;