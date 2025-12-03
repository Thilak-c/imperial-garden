import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getAllServices, getAllPackages } from '@/data/shows';

export const metadata = {
  title: 'Services & Packages — Imperial Garden',
  description: 'Explore our wedding, reception, and event packages. From Silver to Platinum, find the perfect package for your celebration.',
};

function ServiceCard({ service }) {
  return (
    <div className="card-dark rounded-lg p-6">
      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
      <p className="text-muted text-sm mb-4">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <li key={i} className="text-sm text-muted flex items-center gap-2">
            <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PackageCard({ pkg, featured = false }) {
  return (
    <div className={`card-dark rounded-lg p-6 ${featured ? 'ring-2 ring-accent' : ''}`}>
      {featured && (
        <span className="inline-block bg-accent text-white text-xs font-semibold uppercase px-2 py-1 rounded mb-4">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
      <p className="text-accent text-3xl font-bold mb-2">{pkg.price}</p>
      <p className="text-muted text-sm mb-6">{pkg.description}</p>
      <ul className="space-y-3 mb-6">
        {pkg.includes.map((item, i) => (
          <li key={i} className="text-sm flex items-center gap-2">
            <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
      <a href="/contact" className={featured ? 'btn-primary w-full text-center block' : 'btn-outline w-full text-center block'}>
        Get Quote
      </a>
    </div>
  );
}

export default function ServicesPage() {
  const services = getAllServices();
  const packages = getAllPackages();

  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black uppercase mb-4">Services & Packages</h1>
            <p className="text-muted max-w-2xl mx-auto">
              Comprehensive event solutions tailored to your needs and budget.
            </p>
          </div>

          {/* Services */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>

          {/* Packages */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Our Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <PackageCard key={pkg.id} pkg={pkg} featured={index === 1} />
              ))}
            </div>
            <p className="text-center text-muted text-sm mt-8">
              * All packages are customizable. Contact us for a personalized quote.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
