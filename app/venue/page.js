import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { amenities } from '@/data/services';

export const metadata = {
  title: 'Our Venue — Imperial Garden',
  description: 'Explore Imperial Garden\'s elegant banquet halls, beautiful garden spaces, and premium amenities for your special celebration.',
};

const spaces = [
  {
    id: 'grand-ballroom',
    name: 'Grand Ballroom',
    capacity: 'Up to 500 guests',
    description: 'Our largest and most elegant space, perfect for grand weddings and large receptions. Features crystal chandeliers, a spacious dance floor, and state-of-the-art sound system.',
    features: ['Crystal Chandeliers', 'Dance Floor', 'Stage', 'Premium Sound System'],
  },
  {
    id: 'garden-pavilion',
    name: 'Garden Pavilion',
    capacity: 'Up to 300 guests',
    description: 'A beautiful outdoor space surrounded by lush greenery. Ideal for daytime ceremonies, cocktail hours, and intimate celebrations under the stars.',
    features: ['Open Air', 'Natural Lighting', 'Scenic Backdrop', 'Weather Backup'],
  },
  {
    id: 'intimate-hall',
    name: 'Intimate Hall',
    capacity: 'Up to 100 guests',
    description: 'A cozy, elegant space for smaller gatherings. Perfect for bridal showers, engagement parties, and intimate receptions.',
    features: ['Private Setting', 'Customizable Decor', 'Personal Service'],
  },
];

export default function VenuePage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black uppercase mb-4">Our Venue</h1>
            <p className="text-muted max-w-2xl mx-auto">
              Elegant spaces designed to make your celebration unforgettable.
            </p>
          </div>

          {/* Spaces */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8">Event Spaces</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {spaces.map((space) => (
                <div key={space.id} className="card-dark rounded-lg overflow-hidden">
                  <div className="aspect-video bg-dark-secondary flex items-center justify-center">
                    <svg className="w-16 h-16 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{space.name}</h3>
                      <span className="text-accent text-sm">{space.capacity}</span>
                    </div>
                    <p className="text-muted text-sm mb-4">{space.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {space.features.map((feature) => (
                        <span key={feature} className="text-xs bg-dark px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Amenities */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {amenities.map((amenity) => (
                <div key={amenity} className="card-dark rounded-lg p-4 text-center">
                  <p className="text-sm">{amenity}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
