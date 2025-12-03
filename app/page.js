import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import NewsStrip from '@/components/home/NewsStrip';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import { getLatestAnnouncement } from '@/data/news';
import { getAllServices } from '@/data/shows';
import { getAllTestimonials } from '@/data/members';

export default function Home() {
  const latestAnnouncement = getLatestAnnouncement();
  const services = getAllServices();
  const testimonials = getAllTestimonials();

  return (
    <>
      <Header />
      <main>
        <Hero
          backgroundImage="/images/hero-bg.jpg"
          title="Imperial Garden"
          tagline="Where Dreams Become Celebrations"
          ctaText="Book Your Event"
          ctaLink="/contact"
        />
        <NewsStrip announcement={latestAnnouncement} />
        <Services services={services} />
        <Testimonials testimonials={testimonials} />
      </main>
      <Footer />
    </>
  );
}
