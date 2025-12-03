import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Gallery — Imperial Garden',
  description: 'Browse photos of weddings, receptions, and events hosted at Imperial Garden banquet hall in Patna.',
};

const galleryImages = [
  { id: 1, src: '/images/gallery/wedding-1.jpg', alt: 'Wedding ceremony setup', category: 'Wedding' },
  { id: 2, src: '/images/gallery/reception-1.jpg', alt: 'Reception hall decoration', category: 'Reception' },
  { id: 3, src: '/images/gallery/venue-1.jpg', alt: 'Grand Ballroom', category: 'Venue' },
  { id: 4, src: '/images/gallery/decor-1.jpg', alt: 'Floral decorations', category: 'Decor' },
  { id: 5, src: '/images/gallery/wedding-2.jpg', alt: 'Wedding stage', category: 'Wedding' },
  { id: 6, src: '/images/gallery/garden-1.jpg', alt: 'Garden terrace evening', category: 'Venue' },
  { id: 7, src: '/images/gallery/catering-1.jpg', alt: 'Catering spread', category: 'Catering' },
  { id: 8, src: '/images/gallery/decor-2.jpg', alt: 'Table settings', category: 'Decor' },
  { id: 9, src: '/images/gallery/reception-2.jpg', alt: 'Dance floor setup', category: 'Reception' },
];

function GalleryItem({ image }) {
  return (
    <div className="relative aspect-square bg-dark-secondary rounded-lg overflow-hidden group">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-12 h-12 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="text-sm font-medium">{image.category}</span>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black uppercase mb-4">Gallery</h1>
            <p className="text-muted max-w-2xl mx-auto">
              A glimpse of the beautiful celebrations we've hosted. Your event could be next.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <GalleryItem key={image.id} image={image} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted mb-4">Want to see more? Follow us on Instagram</p>
            <a
              href="https://www.instagram.com/imperialgarden"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
              </svg>
              @imperialgarden
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
