"use client";

import Image from "next/image";

export default function Footer() {
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
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo + Contact */}
          <div className="space-y-4">

            <Image
              src="/logo.svg"
              alt="Logo"
              width={140}
              height={50}
            />

            <div className="text-sm text-gray-300">
              <div>+91 9207 22 00 22</div>
              <div>info@szdevelopers.com</div>
            </div>

            <div className="text-sm text-gray-300 leading-relaxed">
              3rd Floor, Nechikkadan Tower,<br />
              Mini Bypass Road,<br />
              Opp. Swapna Nagari, Eranhipalam,<br />
              P.O. Kozhikode, Kerala 673006
            </div>

          </div>

          {/* Services */}
          <div>
            <h3 className="text-green-500 mb-4">Services</h3>

            <div className="space-y-2 text-sm text-gray-300">

              <div>Real Estate Development</div>
              <div>Project Conceptualization & Planning</div>
              <div>Property Management</div>

            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-green-500 mb-4">About</h3>

            <div className="space-y-2 text-sm text-gray-300">

              <div>Our Projects</div>
              <div>Contact</div>

            </div>
          </div>

          {/* Social + Scroll Top */}
          <div className="flex flex-col justify-between">

            {/* Scroll Top Button */}
            <div className="flex justify-end">
              <button
                onClick={scrollToTop}
                className="bg-green-500 w-10 h-10 flex items-center justify-center"
              >
                ↑
              </button>
            </div>

            {/* Social */}
            <div className="flex gap-4 text-gray-300">

              <a href="#" target="_blank">LinkedIn</a>
              <a href="#" target="_blank">Instagram</a>
              <a href="#" target="_blank">Facebook</a>

            </div>

          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-xs text-gray-400 mt-16">
          Copyright SZ Developers © 2026. All rights reserved.
        </div>

      </div>

    </footer>
  );
}
