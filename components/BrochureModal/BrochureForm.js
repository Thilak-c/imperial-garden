'use client';

import { forwardRef, useState } from 'react';

const BrochureForm = forwardRef(function BrochureForm(
  { onSubmit, isSubmitting, errorMessage },
  ref
) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Accept 10 digits with optional +91 prefix
    const cleaned = phone.replace(/[\s\-()]/g, '');
    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
    return phoneRegex.test(cleaned);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.email) {
      newErrors.email = 'Please enter your email address';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (formData.message && formData.message.length > 500) {
      newErrors.message = 'Message must be under 500 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({
        ...formData,
        submittedAt: new Date().toISOString(),
        source: 'brochure-modal',
      });
    }
  };

  const inputClasses = (fieldName) =>
    `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors ${
      errors[fieldName] ? 'border-red-500' : 'border-gray-300'
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-1">
          Full Name *
        </label>
        <input
          ref={ref}
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={inputClasses('fullName')}
          placeholder="Enter your full name"
          disabled={isSubmitting}
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses('email')}
          placeholder="your.email@example.com"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClasses('phone')}
          placeholder="+91 98765 43210"
          disabled={isSubmitting}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="eventType" className="block text-sm font-medium text-gray-900 mb-1">
          Event Type
        </label>
        <select
          id="eventType"
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          className={inputClasses('eventType')}
          disabled={isSubmitting}
        >
          <option value="">Select event type (optional)</option>
          <option value="wedding">Wedding</option>
          <option value="reception">Reception</option>
          <option value="birthday">Birthday</option>
          <option value="corporate">Corporate Event</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className={inputClasses('message')}
          placeholder="Tell us about your event (optional)"
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {errorMessage && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Request Brochure'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We'll send the brochure to your email within 24 hours.
      </p>
    </form>
  );
});

export default BrochureForm;
