"use client";

import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ open, onClose }: Props) {
  const [isClosing, setIsClosing] = useState(false);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 500); // Match animation duration
  };

  if (!open) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 cursor-pointer ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`} 
      style={{ 
        backgroundColor: isClosing ? 'transparent' : 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(2px)'
      }}
      onClick={handleClose}
    >
      {/* Modal Card */}
      <div 
        className={`relative w-full max-w-md bg-[#f0f0f0] rounded-xl p-6 cursor-default ${isClosing ? 'animate-zoomOut' : 'animate-zoomIn'}`}
        onClick={(e) => e.stopPropagation()}
      >
       
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center text-lg text-gray-600 hover:bg-gray-300 transition-colors cursor-pointer z-10"
          style={{ pointerEvents: 'auto' }}
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className={`text-2xl font-medium text-center text-[#413529] ${isClosing ? '' : 'animate-fadeInUp'}`} style={{ animationDelay: isClosing ? '0ms' : '200ms' }}>
          Send Us a Message
        </h2>

        <p className={`text-center text-[12px] text-[#413529] mt-1 mb-[19px] ${isClosing ? '' : 'animate-fadeInUp'}`} style={{ animationDelay: isClosing ? '0ms' : '300ms' }}>
          Enter your details and we will get back to you.
        </p>

        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          {/* Name */}
          <div className={`bg-gray-200 rounded-md px-4 py-3 ${isClosing ? '' : 'animate-fadeInUp'}`} style={{ animationDelay: isClosing ? '0ms' : '350ms' }}>
            <label className="block text-xs text-gray-600 mb-1">Name</label>
            <input
              type="text"
              className="w-full bg-transparent outline-none text-sm text-black"
            />
          </div>

          {/* Phone */}
          <div className={`bg-gray-200 rounded-md px-4 py-3 ${isClosing ? '' : 'animate-fadeInUp'}`} style={{ animationDelay: isClosing ? '0ms' : '400ms' }}>
            <label className="block text-xs text-gray-600 mb-1">
              Phone/Whatsapp
            </label>
            <input
              type="text"
              defaultValue="+91"
              className="w-full bg-transparent outline-none text-sm text-black"
            />
          </div>

          {/* Email */}
          <div className={`bg-gray-200 rounded-md px-4 py-3 ${isClosing ? '' : 'animate-fadeInUp'}`} style={{ animationDelay: isClosing ? '0ms' : '450ms' }}>
            <label className="block text-xs text-gray-600 mb-1">Email</label>
            <input
              type="email"
              className="w-full bg-transparent outline-none text-sm text-black"
            />
          </div>

          {/* Message */}
          <div className={`bg-gray-200 rounded-md px-4 py-3 ${isClosing ? '' : 'animate-fadeInUp'}`} style={{ animationDelay: isClosing ? '0ms' : '500ms' }}>
            <label className="block text-xs text-gray-600 mb-2">
              Your message:
            </label>
            <textarea
              rows={4}
              className="w-full bg-transparent outline-none text-sm resize-none text-black"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-green-500 text-white py-3 rounded-md text-base font-medium hover:bg-green-600 transition ${isClosing ? '' : 'animate-fadeInUp'}`}
            style={{ animationDelay: isClosing ? '0ms' : '550ms' }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
