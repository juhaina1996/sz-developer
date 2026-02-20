"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center">
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-2xl"
          >
            ✕
          </button>

          {/* Menu Items */}
          <div className="flex flex-col items-center gap-8 text-3xl font-light tracking-wide">
            <a href="#" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}
