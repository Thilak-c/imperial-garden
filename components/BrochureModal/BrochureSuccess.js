'use client';

import { useEffect } from 'react';

export default function BrochureSuccess({ onClose }) {
  // Auto-close after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      
      <h3
        className="text-2xl font-semibold text-gray-900 mb-2"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Thank You!
      </h3>
      
      <p className="text-gray-600 mb-6">
        Your brochure request has been received. We'll send it to your email within 24 hours.
      </p>
      
      <button
        onClick={onClose}
        className="px-6 py-2 text-red-600 font-medium hover:text-red-700 transition-colors"
      >
        Close
      </button>
    </div>
  );
}
