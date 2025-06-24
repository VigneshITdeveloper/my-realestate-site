'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const properties = [
  {
    title: 'Modern 3BHK Villa',
    image: '/gallery-1.jpg',
    tags: ['Luxury', '3BHK'],
  },
  {
    title: 'Lake View Apartment',
    image: '/gallery-2.jpg',
    tags: ['2BHK', 'Lakefront'],
  },
  {
    title: 'Smart Home Design',
    image: '/gallery-3.jpg',
    tags: ['Modern', 'Smart'],
  },
  {
    title: 'Elegant Duplex',
    image: '/gallery-4.jpg',
    tags: ['4BHK', 'Duplex'],
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative text-white py-24 px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/gallery-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔳 Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* 💎 Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-400">
            Featured <span className="text-white">Properties</span>
          </h2>
          <p className="text-gray-200 mt-2 text-base max-w-xl mx-auto">
            Explore our handpicked premium real estate listings
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl group border border-yellow-100 backdrop-blur-sm"
            >
              <img
                src={prop.image}
                alt={prop.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300 flex items-end p-5">
                <div>
                  <h3 className="text-xl font-bold text-yellow-300">{prop.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {prop.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-yellow-200 text-[#7A351E] text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
