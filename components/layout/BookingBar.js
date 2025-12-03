'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BookingBar() {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const handleCheckAvailability = () => {
    if (fromDate && toDate) {
      window.location.href = `/contact?from=${fromDate}&to=${toDate}`;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-dark">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Mobile: Simple CTA */}
          <div className="md:hidden w-full">
            <Link href="/contact" className="btn-primary w-full text-center block">
              Book Your Event
            </Link>
          </div>

          {/* Desktop: Date Picker Form */}
          <div className="hidden md:flex items-center gap-4 flex-1">
            <span className="text-sm font-medium whitespace-nowrap">Check Availability:</span>
            
            <div className="flex items-center gap-2">
              <label htmlFor="from-date" className="text-sm text-muted">From</label>
              <input
                type="date"
                id="from-date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                min={today}
                className="px-3 py-2 bg-dark-secondary border border-dark rounded text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="to-date" className="text-sm text-muted">To</label>
              <input
                type="date"
                id="to-date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                min={fromDate || today}
                className="px-3 py-2 bg-dark-secondary border border-dark rounded text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleCheckAvailability}
              disabled={!fromDate || !toDate}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Check Availability
            </button>
            <Link href="tel:+919876543210" className="btn-outline flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
