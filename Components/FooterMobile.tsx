"use client";

import Image from "next/image";

export default function FooterMobile() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative text-white px-6 py-14">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/footer-bg.jpg"
          alt="Footer Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90" />

      <div className="relative z-10">
        {/* ===== GRID SECTION ===== */}
        <div className="grid grid-cols-[1fr_1fr_auto] gap-y-12 gap-x-8">
          {/* Services */}
          <div>
            <h3 className="text-green-500 text-lg mb-5">Services</h3>
            <div className="space-y-4 text-sm leading-6">
              <div>Real Estate Development</div>
              <div>Property Management</div>
              <div>Project Conceptualization & Planning</div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-green-500 text-lg mb-5">About</h3>
            <div className="space-y-4 text-sm leading-6">
              <div>Our Projects</div>
              <div>Contact</div>
              <div className="flex gap-4 mt-6">
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

          {/* Scroll Button (same row) */}
          <div className="flex justify-end">
            <button
              onClick={scrollToTop}
              className="bg-green-500 w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors"
            >
              <Image
                src="/footerArrow.svg"
                alt="Scroll to top"
                width={16}
                height={16}
              />
            </button>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-green-500 text-lg mb-5">Contact</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Image
                  src="/phoneIcon.png"
                  alt="Phone"
                  width={16}
                  height={16}
                />
                <span>+91 86060 02281</span>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/emailIcon.png"
                  alt="Email"
                  width={16}
                  height={16}
                />
                <span>info@szdevelopers.com</span>
              </div>
            </div>
          </div>

          {/* Office */}
          <div>
            <h3 className="text-green-500 text-lg mb-5">Office</h3>
            <p className="text-sm leading-6">
              3rd Floor, Nechikkadan Tower,
              <br />
              Mini Bypass Road,
              <br />
              Opp. Swapna Nagari, Eranhipalam,
              <br />
              P.O. Kozhikode, Kerala 673006
            </p>
          </div>

          {/* Empty column for alignment */}
          <div></div>
        </div>

        {/* Logo */}
        <div className="flex justify-center pt-16">
          <Image
            src="/footerLogo.png"
            alt="SZ Developers"
            width={150}
            height={60}
          />
        </div>

        {/* Copyright */}
        <div className="text-center text-[11px] text-[#8A8A8A] pt-6">
          SZ Developers © 2026
          <br />
          All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
