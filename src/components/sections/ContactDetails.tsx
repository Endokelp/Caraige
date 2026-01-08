import React from 'react';

const ContactDetails = () => {
  return (
    <section className="bg-[#FBF0E2] py-[60px] flex flex-col items-center">
      <div className="container max-w-[1200px] px-5 flex flex-col items-center">
        {/* Spacer equivalent to the wp-block-spacer in the structure */}
        <div className="h-[20px] md:h-[40px]"></div>

        <div className="text-center w-full max-w-[800px] mx-auto space-y-6">
          {/* Email and Location Block */}
          <div className="flex flex-col items-center">
            <p className="m-0 text-black font-sans text-base leading-relaxed tracking-normal">
              LACROSSEWAGONHITCH@GMAIL.COM
              <br />
              Buckley, Washington
            </p>
          </div>

          {/* Facebook Link Block */}
          <div className="flex flex-col items-center">
            <p className="m-0">
              <a
                href="https://www.facebook.com/share/1GCDThWXAp/?mibextid=wwXIfr"
                className="text-[#A66B3F] hover:text-[#8b5a34] font-sans text-base leading-relaxed transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit LaCrosse Wagon Hitch on Facebook
              </a>
            </p>
          </div>

          {/* Owner and Phone Block */}
          <div className="flex flex-col items-center">
            <p className="m-0 text-black font-sans text-base leading-relaxed">
              Beau LaCrosse, Owner
              <br />
              (253)261-3466
            </p>
          </div>

          {/* WP Spacer */}
          <div className="h-[30px]"></div>

          {/* Attribution Block */}
          <div className="flex flex-col items-center">
            <p className="m-0 text-[#666666] font-sans text-[13px] leading-relaxed">
              Designed with{' '}
              <a
                href="https://wordpress.com"
                className="text-[#A66B3F] hover:text-[#8b5a34] transition-colors duration-200"
              >
                WordPress
              </a>
            </p>
          </div>
        </div>

        {/* Final Spacer */}
        <div className="h-[20px]"></div>
      </div>
    </section>
  );
};

export default ContactDetails;