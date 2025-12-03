import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getVenueInfo } from '@/data/members';

export const metadata = {
  title: 'About Us — Imperial Garden',
  description: 'Learn about Imperial Garden, Patna\'s premier banquet hall for weddings and celebrations. Over a decade of creating unforgettable moments.',
};

const highlights = [
  { number: '10+', label: 'Years of Excellence' },
  { number: '1000+', label: 'Events Hosted' },
  { number: '500', label: 'Guest Capacity' },
  { number: '100%', label: 'Client Satisfaction' },
];

const amenities = [
  'Air Conditioned Halls',
  'Valet Parking',
  'Bridal Suite',
  'In-house Catering',
  'Professional Sound System',
  'Stage & Lighting',
  'Generator Backup',
  'Wheelchair Accessible',
];

export default function AboutPage() {
  const venueInfo = getVenueInfo();

  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black uppercase mb-4">About Us</h1>
            <p className="text-accent text-lg">{venueInfo.tagline}</p>
          </div>

          {/* Story */}
          <section className="mb-20">
            <div className="max-w-3xl mx-auto">
              {venueInfo.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Highlights */}
          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="card-dark rounded-lg p-6 text-center">
                  <span className="text-4xl font-black text-accent block mb-2">{item.number}</span>
                  <span className="text-muted text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Amenities */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-3 p-4 card-dark rounded-lg">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{amenity}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Location */}
          <section>
            <h2 className="text-2xl font-bold mb-8 text-center">Find Us</h2>
            <div className="card-dark rounded-lg p-8 text-center">
              <div className="mb-6">
                <svg className="w-12 h-12 text-accent mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="text-lg font-medium">{venueInfo.address}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${venueInfo.phone.replace(/\s/g, '')}`} className="btn-outline">
                  {venueInfo.phone}
                </a>
                <a href={`mailto:${venueInfo.email}`} className="btn-outline">
                  {venueInfo.email}
                </a>
              </div>
              <p className="text-muted text-sm mt-4">{venueInfo.hours}</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
