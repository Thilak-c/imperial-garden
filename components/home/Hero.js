'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero({
  backgroundImage = '/images/hero-bg.jpg',
  title = 'Imperial Garden',
  tagline = 'Where Dreams Become Celebrations',
  ctaText = 'Book Your Event',
  ctaLink = '/contact',
}) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-dark"
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-3 md:px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-2 md:mb-4"
        >
          {title}
        </motion.h1>

        {tagline && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-xl lg:text-2xl text-muted mb-4 md:mb-8 tracking-wide"
          >
            {tagline}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center"
        >
          <Link href={ctaLink} className="btn-primary inline-block">
            {ctaText}
          </Link>
          <Link href="/venues" className="btn-outline inline-block">
            Explore Venues
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator - hidden on very small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-muted"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-widest">Scroll</span>
          <svg
            className="w-4 h-4 md:w-5 md:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
