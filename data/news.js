// Announcements/Offers data
export const announcements = [
  {
    id: 'offer-1',
    headline: 'Wedding Season Special - 20% Off',
    description: 'Book your wedding venue for January-March 2025 and get 20% off on all packages. Limited slots available!',
    date: '2024-12-01',
    link: '/contact',
    linkText: 'Book Now',
    badge: 'Limited Offer',
  },
  {
    id: 'offer-2',
    headline: 'Free Bridal Suite Upgrade',
    description: 'Book any Platinum package and get complimentary bridal suite access for the entire day.',
    date: '2024-11-15',
    link: '/contact',
    linkText: 'Enquire',
  },
];

export const getLatestAnnouncement = () => {
  return [...announcements].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};

export const getAllAnnouncements = () => {
  return [...announcements].sort((a, b) => new Date(b.date) - new Date(a.date));
};
