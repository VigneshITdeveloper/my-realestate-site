'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const projects = [
  {
    title: 'Keystone Harmony Villas',
    location: 'ECR, Chennai',
    image: '/project-1.jpg',
    tags: ['Villa', 'Ready to Move'],
  },
  {
    title: 'Skyline Platinum Towers',
    location: 'Anna Nagar, Chennai',
    image: '/project-2.jpg',
    tags: ['Apartment', 'Ongoing'],
  },
  {
    title: 'Green Meadows',
    location: 'Coimbatore',
    image: '/project-3.jpg',
    tags: ['Plots', 'Completed'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 md:px-12 text-white overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/projects-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔳 Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-0" />

      {/* 🏗️ Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-400">Our Projects</h2>
          <p className="text-gray-200 mt-2 text-base max-w-xl mx-auto">
            Discover a curated collection of completed and ongoing real estate projects.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-yellow-200"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#7A351E]">{project.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
