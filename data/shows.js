// Services/Packages data
export const services = [
  {
    id: 'wedding',
    name: 'Wedding Celebrations',
    icon: 'rings',
    description: 'Complete wedding packages including venue, catering, decor, and coordination.',
    features: ['Customized Themes', 'Bridal Suite', 'Guest Accommodation', 'Photography Areas'],
  },
  {
    id: 'reception',
    name: 'Reception Parties',
    icon: 'party',
    description: 'Elegant reception arrangements for post-wedding celebrations.',
    features: ['Stage Setup', 'Sound System', 'Lighting', 'Dance Floor'],
  },
  {
    id: 'engagement',
    name: 'Engagement Ceremonies',
    icon: 'heart',
    description: 'Intimate settings for your special engagement celebration.',
    features: ['Ring Ceremony Setup', 'Floral Arrangements', 'Photography', 'Catering'],
  },
  {
    id: 'corporate',
    name: 'Corporate Events',
    icon: 'briefcase',
    description: 'Professional spaces for conferences, seminars, and corporate gatherings.',
    features: ['AV Equipment', 'Presentation Setup', 'Business Catering', 'WiFi'],
  },
];

export const packages = [
  {
    id: 'silver',
    name: 'Silver Package',
    price: '₹1,50,000',
    description: 'Essential package for intimate celebrations',
    includes: ['Venue for 6 hours', 'Basic Decor', 'Catering (Veg)', '100 Guests'],
  },
  {
    id: 'gold',
    name: 'Gold Package',
    price: '₹3,00,000',
    description: 'Premium package for memorable events',
    includes: ['Venue for 10 hours', 'Premium Decor', 'Catering (Veg/Non-Veg)', '250 Guests', 'DJ & Sound'],
  },
  {
    id: 'platinum',
    name: 'Platinum Package',
    price: '₹5,00,000',
    description: 'Luxury all-inclusive experience',
    includes: ['Full Day Venue', 'Luxury Decor', 'Multi-Cuisine Catering', '500 Guests', 'DJ & Sound', 'Photography', 'Bridal Suite'],
  },
];

export const getAllServices = () => services;
export const getAllPackages = () => packages;
