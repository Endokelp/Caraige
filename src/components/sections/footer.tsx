import React from 'react';

const Footer = () => {
  return (
    <footer 
      id="colophon" 
      className="site-footer bg-white border-t border-[#EDDCC4]"
      style={{
        display: 'block',
      }}
    >
      <div 
        className="site-below-footer-wrap"
        style={{
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <div className="container px-5 mx-auto max-w-[1200px]">
          <div className="flex flex-col md:flex-row justify-center items-center text-center">
            <div className="site-footer-below-section-1">
              <div 
                className="ast-footer-copyright"
                style={{
                  color: '#666666',
                  fontSize: '13px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
                  fontWeight: 400,
                  lineHeight: '1.4',
                }}
              >
                <p className="m-0">
                  Copyright © 2026 LaCrosse Wagon Hitch | Powered by{' '}
                  <a 
                    href="https://wpastra.com" 
                    className="hover:text-[#A66B3F] transition-colors duration-200"
                    style={{ 
                      color: 'inherit',
                      textDecoration: 'none'
                    }}
                  >
                    Astra WordPress Theme
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;