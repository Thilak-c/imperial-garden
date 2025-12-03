import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import VenueCard from '@/components/venues/VenueCard';
import { getAllVenues } from '@/data/releases';

export const metadata = {
  title: 'Our Venues — Imperial Garden',
  description: 'Explore our elegant venues - Grand Ballroom, Garden Terrace, and Intimate Hall. Perfect spaces for weddings, receptions, and celebrations in Patna.',
};

export default function VenuesPage() {
  const venues = getAllVenues();

  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black uppercase mb-4">Our Venues</h1>
            <p className="text-muted max-w-2xl mx-auto">
              Choose from our stunning indoor and outdoor spaces, each designed to make your celebration unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.map((venue, index) => (
              <VenueCard key={venue.id} venue={venue} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
