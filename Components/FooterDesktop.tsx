"use client";

import Image from "next/image";

export default function FooterDesktop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/footer-bg.jpg"
          alt="Footer Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000]"></div>

      <div className="relative footer-main">
        <div className="grid grid-cols-1 md:grid-cols-[40%_55%] gap-12">
          {" "}
          {/* LEFT HALF (UNCHANGED) */}
          <div className="space-y-4">
            <Image
              src="/footerLogo.png"
              className="footer-logo"
              alt="Logo"
              width={140}
              height={50}
            />

            <div className="contact-info space-y-3">
              <div className="flex items-center gap-3">
                <Image
                  src="/phoneIcon.png"
                  alt="Phone Icon"
                  width={16}
                  height={16}
                  className="object-contain"
                />
                <span>+91 86060 02281</span>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/emailIcon.png"
                  alt="Email Icon"
                  width={16}
                  height={16}
                  className="object-contain"
                />
                <span>info@szdevelopers.com</span>
              </div>
            </div>

            <div className="address-info">
              3rd Floor, Nechikkadan Tower,
              <br />
              Mini Bypass Road,
              <br />
              Opp. Swapna Nagari, Eranhipalam,
              <br />
              P.O. Kozhikode, Kerala 673006
            </div>
          </div>
          {/* RIGHT HALF WRAPPER */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-22">
            {/* Services */}
            <div>
              <h3 className="text-green services-heading">Services</h3>
              <div className="services-sub-heading">
                <div>Real Estate Development</div>
                <div>Project Conceptualization & Planning</div>
                <div>Property Management</div>
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="services-heading text-green">About</h3>
              <div className="services-sub-heading">
                <div>Our Projects</div>
                <div>Contact</div>
                <div className="logo-container">
                  <a 
                    href="https://www.linkedin.com/company/szdevelopers" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block transition-all duration-300 hover:scale-110 hover:opacity-80"
                  >
                    <Image
                      src="/linkedin.svg"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </a>

                  <a 
                    href="https://www.instagram.com/szdevelopers?igsh=MXdpaTIwYWozc2E3dw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block transition-all duration-300 hover:scale-110 hover:opacity-80"
                  >
                    <Image
                      src="/instagram.svg"
                      alt="Instagram"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </a>

                  <a 
                    href="https://www.facebook.com/szhomes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block transition-all duration-300 hover:scale-110 hover:opacity-80"
                  >
                    <Image
                      src="/fb.svg"
                      alt="Facebook"
                      width={10}
                      height={16}
                      className="object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="bg-green-500 w-10 h-10 flex items-center justify-center"
              >
                <Image
                  src="/footerArrow.svg"
                  alt="Scroll to top"
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-[10px] text-[#8A8A8A] pt-[77px]">
          {" "}
          Copyright SZ Developers © 2026. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
