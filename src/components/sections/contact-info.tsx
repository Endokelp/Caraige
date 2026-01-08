import React from 'react';

const ContactInfo = () => {
  return (
    <section className="wp-block-group alignfull is-content-justification-center is-layout-constrained bg-[#FBF0E2] py-[60px]">
      <div className="container mx-auto px-5">
        <div className="wp-block-group is-content-justification-center is-layout-constrained flex flex-col items-center text-center space-y-6">
          
          {/* Email and Location */}
          <div className="text-[16px] leading-[1.6] text-black font-normal">
            <p className="m-0 uppercase">LACROSSEWAGONHITCH@GMAIL.COM</p>
            <p className="m-0">Buckley, Washington</p>
          </div>

          {/* Facebook Link */}
          <div className="text-[16px] leading-[1.6]">
            <a 
              href="https://www.facebook.com/share/1GCDThWXAp/?mibextid=wwXIfr" 
              className="text-[#A16A46] hover:opacity-80 transition-opacity underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit LaCrosse Wagon Hitch on Facebook
            </a>
          </div>

          {/* Owner Info */}
          <div className="text-[16px] leading-[1.6] text-black font-normal">
            <p className="m-0">Beau LaCrosse, Owner</p>
            <p className="m-0">(253)261-3466</p>
          </div>

          {/* Attribution Spacer and Link */}
          <div className="pt-12 pb-4">
            <p className="text-[14px] text-black font-normal m-0">
              Designed with <a href="https://wordpress.com" className="text-[#A16A46] hover:opacity-80 transition-opacity">WordPress</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;