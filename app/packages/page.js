import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { packages } from '@/data/services';

export const metadata = {
  title: 'Packages — Imperial Garden',
  description: 'Explore our wedding and event packages. From intimate gatherings to grand celebrations, find the perfect package for your special day.',
};

export default function PackagesPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black uppercase mb-4">Packages</h1>
            <p className="text-muted max-w-2xl mx-auto">
              Choose the perfect package for your celebration. All packages can be customized to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`card-dark rounded-lg p-8 relative ${
                  pkg.popular ? 'ring-2 ring-accent' : ''
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-accent text-xl font-semibold mb-1">{pkg.price}</p>
                <p className="text-muted text-sm mb-6">{pkg.capacity}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`block text-center ${pkg.popular ? 'btn-primary' : 'btn-outline'} w-full`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center card-dark rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Package?</h2>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              Every celebration is unique. Contact us to create a personalized package that fits your vision and budget.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
