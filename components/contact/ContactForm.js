'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

const eventTypes = [
  'Wedding',
  'Reception',
  'Engagement',
  'Birthday Party',
  'Corporate Event',
  'Other',
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fromDate = searchParams.get('from');
    if (fromDate) {
      setFormData(prev => ({ ...prev, eventDate: fromDate }));
    }
  }, [searchParams]);

  const validatePhone = (phone) => {
    return /^[6-9]\d{9}$/.test(phone.replace(/\s/g, ''));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.eventType) {
      newErrors.eventType = 'Please select an event type';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Please select an event date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', email: '', eventType: '', eventDate: '', guestCount: '', message: '' });
  };

  const today = new Date().toISOString().split('T')[0];

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-dark rounded-lg p-8 text-center"
      >
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Enquiry Sent!</h3>
        <p className="text-muted mb-6">Thank you for your interest. Our team will contact you within 24 hours.</p>
        <button onClick={() => setIsSubmitted(false)} className="btn-outline">
          Send Another Enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Full Name <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-dark-secondary border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
            errors.name ? 'border-accent' : 'border-dark'
          }`}
          placeholder="Your name"
        />
        {errors.name && <p className="text-accent text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone Number <span className="text-accent">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-dark-secondary border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
            errors.phone ? 'border-accent' : 'border-dark'
          }`}
          placeholder="98765 43210"
        />
        {errors.phone && <p className="text-accent text-sm mt-1">{errors.phone}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email (Optional)
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-dark-secondary border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
            errors.email ? 'border-accent' : 'border-dark'
          }`}
          placeholder="your@email.com"
        />
        {errors.email && <p className="text-accent text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Event Type */}
      <div>
        <label htmlFor="eventType" className="block text-sm font-medium mb-2">
          Event Type <span className="text-accent">*</span>
        </label>
        <select
          id="eventType"
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-dark-secondary border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
            errors.eventType ? 'border-accent' : 'border-dark'
          }`}
        >
          <option value="">Select event type</option>
          {eventTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        {errors.eventType && <p className="text-accent text-sm mt-1">{errors.eventType}</p>}
      </div>

      {/* Event Date & Guest Count */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium mb-2">
            Event Date <span className="text-accent">*</span>
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            min={today}
            className={`w-full px-4 py-3 bg-dark-secondary border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.eventDate ? 'border-accent' : 'border-dark'
            }`}
          />
          {errors.eventDate && <p className="text-accent text-sm mt-1">{errors.eventDate}</p>}
        </div>

        <div>
          <label htmlFor="guestCount" className="block text-sm font-medium mb-2">
            Expected Guests
          </label>
          <input
            type="number"
            id="guestCount"
            name="guestCount"
            value={formData.guestCount}
            onChange={handleChange}
            min="1"
            max="1000"
            className="w-full px-4 py-3 bg-dark-secondary border border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="e.g. 200"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-dark-secondary border border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          placeholder="Tell us about your event requirements..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
      </button>
    </form>
  );
}
