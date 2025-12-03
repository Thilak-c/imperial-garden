'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NewsStrip({ announcement }) {
  if (!announcement) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-dark-secondary py-6 md:py-12 border-y border-dark"
    >
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
        {announcement.badge && (
          <span className="inline-block bg-accent text-white text-[10px] md:text-xs font-semibold uppercase tracking-wider px-2 py-0.5 md:px-3 md:py-1 rounded mb-2 md:mb-4">
            {announcement.badge}
          </span>
        )}
        <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">{announcement.headline}</h2>
        <p className="text-muted text-xs md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">{announcement.description}</p>

        <Link href={announcement.link} className="btn-outline inline-block">
          {announcement.linkText || 'Learn More'}
        </Link>
      </div>
    </motion.section>
  );
}
