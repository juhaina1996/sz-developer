"use client";

import { useEffect, useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface Props {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function EnquiryModal({ open, onClose }: Props) {
  const [isClosing, setIsClosing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '+91',
    email: '',
    message: ''
  });

  // Prevent background scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Reset form when modal opens
  useEffect(() => {
    if (open) {
      setFormData({
        name: '',
        phone: '+91',
        email: '',
        message: ''
      });
      setSubmitStatus('idle');
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();
    }
  }, [open]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Name validation: no numbers allowed
    if (name === 'name') {
      const nameValue = value.replace(/[0-9]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: nameValue
      }));
      return;
    }
    
    // Phone validation: only numbers after +91
    if (name === 'phone') {
      // Keep +91 prefix and only allow numbers after it
      if (!value.startsWith('+91')) {
        setFormData(prev => ({
          ...prev,
          [name]: '+91'
        }));
        return;
      }
      const phoneDigits = value.slice(3).replace(/\D/g, '');
      // Limit to 10 digits after +91
      const limitedPhone = '+91' + phoneDigits.slice(0, 10);
      setFormData(prev => ({
        ...prev,
        [name]: limitedPhone
      }));
      return;
    }
    
    // Message validation: max 500 characters
    if (name === 'message') {
      const limitedMessage = value.slice(0, 500);
      setFormData(prev => ({
        ...prev,
        [name]: limitedMessage
      }));
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Phone validation: must have exactly 10 digits after +91
    if (formData.phone.length !== 13) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    // hCaptcha validation
    if (!captchaToken) {
      alert('Please complete the captcha verification');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      
      if (!scriptUrl) {
        throw new Error('Google Script URL not configured');
      }

      // Submit to Google Sheets
      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Note: With no-cors mode, we can't read the response
      // We assume success if no error is thrown

      // Send confirmation email via Sender.net
      try {
        const emailResponse = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (!emailResponse.ok) {
          const errorData = await emailResponse.json();
          console.warn('Email sending failed:', errorData);
          // Continue anyway - don't fail the submission
        }
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't fail the whole submission if email fails
      }

      setSubmitStatus('success');
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();
    } finally {
      setIsSubmitting(false);
    }
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
       
        {submitStatus !== 'success' && (
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center text-lg text-gray-600 hover:bg-gray-300 transition-colors cursor-pointer z-10"
            style={{ pointerEvents: 'auto' }}
          >
            ✕
          </button>
        )}

        {/* Success Screen */}
        {submitStatus === 'success' ? (
          <div className="flex flex-col items-center justify-center py-0 animate-fadeInUp">
            <p className="text-center text-lg text-[#413529] mb-4">
              Thank you! Your message has been sent successfully.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="w-full bg-[#00CC61] text-white py-3 rounded-md text-base font-medium hover:bg-[#00b355] transition cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Heading */}
            <h2 className={`text-2xl font-medium text-center text-[#413529] ${isClosing ? '' : 'animate-fadeInUp'}`} style={{ animationDelay: isClosing ? '0ms' : '200ms' }}>
              Send Us a Message
            </h2>

            <p className={`text-center text-[12px] text-[#413529] mt-1 mb-[19px] ${isClosing ? '' : 'animate-fadeInUp'}`} style={{ animationDelay: isClosing ? '0ms' : '300ms' }}>
              Enter your details and we will get back to you.
            </p>

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm text-center animate-fadeInUp">
                ✗ Something went wrong. Please try again or contact us directly.
              </div>
            )}

            <form className="space-y-3" onSubmit={handleSubmit}>
          {/* Name */}
          <div className={`bg-gray-200 rounded-md px-4 py-3 ${isClosing ? '' : 'animate-fadeInUp'}`} style={{ animationDelay: isClosing ? '0ms' : '350ms' }}>
            <label className="block text-xs text-gray-600 mb-1">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              maxLength={40}
              disabled={isSubmitting}
              className="w-full bg-transparent outline-none text-sm text-black disabled:opacity-50"
            />
          </div>

          {/* Phone */}
          <div className={`bg-gray-200 rounded-md px-4 py-3 ${isClosing ? '' : 'animate-fadeInUp'}`} style={{ animationDelay: isClosing ? '0ms' : '400ms' }}>
            <label className="block text-xs text-gray-600 mb-1">
              Phone/Whatsapp *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              className="w-full bg-transparent outline-none text-sm text-black disabled:opacity-50"
            />
          </div>

          {/* Email */}
          <div className={`bg-gray-200 rounded-md px-4 py-3 ${isClosing ? '' : 'animate-fadeInUp'}`} style={{ animationDelay: isClosing ? '0ms' : '450ms' }}>
            <label className="block text-xs text-gray-600 mb-1">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              className="w-full bg-transparent outline-none text-sm text-black disabled:opacity-50"
            />
          </div>

          {/* Message */}
          <div className={`bg-gray-200 rounded-md px-4 py-3 ${isClosing ? '' : 'animate-fadeInUp'}`} style={{ animationDelay: isClosing ? '0ms' : '500ms' }}>
            <label className="block text-xs text-gray-600 mb-2">
              Your message: ({formData.message.length}/500)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              disabled={isSubmitting}
              className="w-full bg-transparent outline-none text-sm resize-none text-black disabled:opacity-50"
            />
          </div>

          {/* hCaptcha */}
          <div className={`flex justify-center ${isClosing ? '' : 'animate-fadeInUp'}`} style={{ animationDelay: isClosing ? '0ms' : '525ms' }}>
            <HCaptcha
              ref={captchaRef}
              sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || ''}
              onVerify={(token) => setCaptchaToken(token)}
              onExpire={() => setCaptchaToken(null)}
              onError={() => setCaptchaToken(null)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !captchaToken}
            className={`w-full bg-[#00CC61] text-white py-3 rounded-md text-base font-medium hover:bg-[#00b355] transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${isClosing ? '' : 'animate-fadeInUp'}`}
            style={{ animationDelay: isClosing ? '0ms' : '550ms' }}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
          </>
        )}
      </div>
    </div>
  );
}
