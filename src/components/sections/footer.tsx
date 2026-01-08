import React from 'react';

const Footer = () => {
  return (
    <footer 
      id="colophon" 
      className="site-footer bg-[#FBF0E2]"
      style={{
        borderTop: '1px solid #CCBCA4',
        marginTop: '0px'
      }}
    >
      <div className="site-below-footer-wrap py-[20px] md:py-[40px] px-[20px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="ast-builder-footer-grid-columns items-center justify-center flex flex-col md:flex-row">
            <div className="site-footer-below-section-1 site-footer-section text-center">
              <div className="ast-builder-layout-element ast-flex site-footer-focus-item ast-footer-copyright">
                <div className="ast-footer-copyright">
                  <p className="footer-text m-0 text-[14px] leading-[1.6] text-[#666666]">
                    Copyright © 2026 LaCrosse Wagon Hitch | Powered by{' '}
                    <a 
                      href="https://wpastra.com" 
                      className="text-[#A16A46] transition-opacity duration-200 hover:opacity-80"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Astra WordPress Theme
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;