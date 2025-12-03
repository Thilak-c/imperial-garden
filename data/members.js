// Testimonials data
export const testimonials = [
  {
    id: '1',
    name: 'Priya & Rahul',
    event: 'Wedding Reception',
    image: '/images/testimonials/couple1.jpg',
    quote: 'Imperial Garden made our wedding day absolutely magical. The attention to detail and service was beyond our expectations.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sharma Family',
    event: 'Engagement Ceremony',
    image: '/images/testimonials/family1.jpg',
    quote: 'Beautiful venue, delicious food, and wonderful staff. Our engagement was perfect thanks to the Imperial Garden team.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Anita & Vikram',
    event: 'Wedding',
    image: '/images/testimonials/couple2.jpg',
    quote: 'From planning to execution, everything was seamless. Highly recommend for anyone looking for a premium venue in Patna.',
    rating: 5,
  },
];

export const venueInfo = {
  name: 'Imperial Garden',
  tagline: 'Where Dreams Become Celebrations',
  description: `Imperial Garden is Patna's premier banquet hall, offering elegant spaces for weddings, receptions, and grand celebrations. Located near Kurji Holy Family Hospital, our venue combines sophisticated ambiance with exceptional service to create unforgettable moments.

With over a decade of experience hosting memorable events, we pride ourselves on attention to detail, exquisite catering, and personalized service that makes every celebration special.`,
  address: 'Near Kurji Holy Family Hospital, Patna, Bihar',
  phone: '+91 98765 43210',
  email: 'info@imperialgarden.in',
  hours: 'Open Daily: 10:00 AM - 10:00 PM',
};

export const getAllTestimonials = () => testimonials;
export const getVenueInfo = () => venueInfo;
