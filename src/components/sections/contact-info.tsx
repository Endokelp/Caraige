import React from 'react';

const ContactInfo = () => {
  return (
    <section className="contact-section py-[60px] bg-[#FDF0E1]">
      <div className="container max-w-[1200px] mx-auto px-5 text-center">
        {/* Spacer equivalent */}
        <div className="h-[30px]" aria-hidden="true"></div>

        <div className="space-y-6">
          {/* Email and Location */}
          <div className="text-[15px] leading-[1.6] text-black uppercase tracking-normal">
            <p className="m-0">
              <a 
                href="mailto:LACROSSEWAGONHITCH@GMAIL.COM" 
                className="text-[#A16038] no-underline hover:underline transition-all duration-200"
              >
                LACROSSEWAGONHITCH@GMAIL.COM
              </a>
              <br />
              <span className="capitalize">Buckley, Washington</span>
            </p>
          </div>

          {/* Social Link */}
          <div className="text-[15px] leading-[1.6]">
            <p className="m-0">
              <a 
                href="https://www.facebook.com/share/1GCDThWXAp/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#A16038] no-underline hover:underline transition-all duration-200"
              >
                Visit LaCrosse Wagon Hitch on Facebook
              </a>
            </p>
          </div>

          {/* Owner Details */}
          <div className="text-[15px] leading-[1.6] text-black">
            <p className="m-0">
              Beau LaCrosse, Owner
              <br />
              <a 
                href="tel:2532613466" 
                className="text-[#A16038] no-underline hover:underline transition-all duration-200"
              >
                (253)261-3466
              </a>
            </p>
          </div>
        </div>

        {/* Footer Attribution Section */}
        <div className="mt-12">
          {/* Top spacer for attribution */}
          <div className="h-[30px]" aria-hidden="true"></div>
          
          <p className="footer-text text-[14px] text-[#3A3A3A] m-0">
            Designed with{' '}
            <a 
              href="https://wordpress.com" 
              className="text-[#A16038] no-underline hover:underline transition-all duration-200"
            >
              WordPress
            </a>
          </p>
          
          {/* Bottom spacer for attribution */}
          <div className="h-[30px]" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;