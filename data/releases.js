// Venue spaces/halls data
export const venues = [
  {
    id: 'grand-ballroom',
    name: 'Grand Ballroom',
    type: 'indoor',
    capacity: 500,
    image: '/images/venues/grand-ballroom.jpg',
    description: 'Our largest and most elegant space, perfect for grand weddings and large celebrations.',
    features: ['Crystal Chandeliers', 'Stage Area', 'Dance Floor', 'AC Controlled'],
    priceRange: '₹₹₹',
  },
  {
    id: 'garden-terrace',
    name: 'Garden Terrace',
    type: 'outdoor',
    capacity: 300,
    image: '/images/venues/garden-terrace.jpg',
    description: 'Beautiful open-air venue surrounded by lush greenery for memorable outdoor events.',
    features: ['Natural Setting', 'Evening Lighting', 'Covered Options', 'Photo Spots'],
    priceRange: '₹₹',
  },
  {
    id: 'intimate-hall',
    name: 'Intimate Hall',
    type: 'indoor',
    capacity: 100,
    image: '/images/venues/intimate-hall.jpg',
    description: 'Cozy and elegant space ideal for engagement parties, anniversaries, and small gatherings.',
    features: ['Private Setting', 'Customizable Decor', 'Personal Service', 'AC Controlled'],
    priceRange: '₹₹',
  },
];

export const getVenuesByType = (type) => venues.filter((v) => v.type === type);
export const getAllVenues = () => venues;
