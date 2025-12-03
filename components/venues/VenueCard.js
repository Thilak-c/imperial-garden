'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function VenueCard({ venue, index = 0 }) {
  const { name, type, capacity, image, description, features, priceRange } = venue;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-dark rounded-lg overflow-hidden group"
    >
      {/* Image */}
      <div className="relative aspect-video bg-dark-secondary overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-16 h-16 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
            </svg>
          </div>
        )}
        <span className="absolute top-3 left-3 bg-accent text-white text-xs font-semibold uppercase px-2 py-1 rounded">
          {type}
        </span>
        <span className="absolute top-3 right-3 bg-dark/80 text-white text-xs font-semibold px-2 py-1 rounded">
          {priceRange}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold">{name}</h3>
          <span className="text-muted text-sm whitespace-nowrap">Up to {capacity} guests</span>
        </div>

        <p className="text-muted text-sm mb-4">{description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((feature, i) => (
            <span key={i} className="text-xs bg-dark px-2 py-1 rounded text-muted">
              {feature}
            </span>
          ))}
        </div>

        <Link href="/contact" className="btn-primary w-full text-center block">
          Enquire Now
        </Link>
      </div>
    </motion.article>
  );
}
