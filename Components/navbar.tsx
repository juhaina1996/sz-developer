"use client";

import { useState } from "react";
import Image from "next/image";
import EnquiryModal from "./EnquiryModal";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseMenu = () => {
    setMenuClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
    }, 600); // Match animation duration
  };

  const handleContactClick = () => {
    handleCloseMenu(); // Close hamburger with animation
    setTimeout(() => {
      setModalOpen(true); // Open enquiry modal after menu closes
    }, 600);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="header top-0 left-0 w-full z-50">
        <div className="header-sub flex justify-between items-center px-6 md:px-12 py-5">
          {/* Logo */}
          <div className="text-xl font-semibold tracking-wide">
            {/* Replace with Image later */}
            <Image
              src="/images/headerLogo.png"
              alt="Logo"
              width={72}
              height={69}
            />
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col justify-center items-center gap-1 group"
          >
            <Image src="/images/MENU.png" alt="Logo" width={42} height={49} />
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      {menuOpen && (
        <div className={`fixed inset-0 bg-[#f1efef] z-50 flex flex-col ${menuClosing ? 'animate-slideOutRight' : 'animate-slideInRight'}`}>
          {/* Close Button */}
          <button
            onClick={handleCloseMenu}
            className={`close-button absolute top-6 right-6 w-10 h-10 
                 bg-gray-100 rounded-lg 
                 flex items-center justify-center 
                 text-xl text-gray-700 hover:bg-gray-200 transition-colors ${menuClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}
            style={{ animationDelay: menuClosing ? '0ms' : '300ms' }}
          >
            ✕
          </button>

          {/* Center Menu Links */}
          <div className="flex-1 flex flex-col justify-center items-center gap-8">
            {/* Active Link */}
            <a
              href="#"
              onClick={handleCloseMenu}
              className={`text-xl font-light text-[#000000] relative ${menuClosing ? 'animate-fadeOutLeft' : 'animate-fadeInLeft'}`}
              style={{ animationDelay: menuClosing ? '0ms' : '400ms' }}
            >
              Home
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-500" />
            </a>

            <a
              href="#"
              onClick={handleCloseMenu}
              className={`text-xl font-light text-[#000000] ${menuClosing ? 'animate-fadeOutLeft' : 'animate-fadeInLeft'}`}
              style={{ animationDelay: menuClosing ? '0ms' : '500ms' }}
            >
              Projects
            </a>

            <a
              href="#"
              onClick={handleContactClick}
              className={`text-xl font-light text-[#000000] ${menuClosing ? 'animate-fadeOutLeft' : 'animate-fadeInLeft'}`}
              style={{ animationDelay: menuClosing ? '0ms' : '600ms' }}
            >
              Contact
            </a>
          </div>

          {/* Bottom Logo Section */}
          <div className={`pb-10 flex flex-col items-center ${menuClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`} style={{ animationDelay: menuClosing ? '0ms' : '700ms' }}>
            <Image
              src="/hamburgerLogo.svg"
              alt="SZ Developers"
              width={130}
              height={50}
            />

            <p className="text-[10px] text-[#4B4B4B] mt-4 text-center">
              SZ Developers © 2026 <br />
              All Rights Reserved
            </p>
          </div>
        </div>
      )}
      <EnquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
