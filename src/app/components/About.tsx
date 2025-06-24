'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Building, Users, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-yellow-500" />,
    title: 'Trusted & Secured',
    desc: 'Over 10,000+ happy customers with verified legal properties and high trust value.',
  },
  {
    icon: <Building className="w-8 h-8 text-yellow-500" />,
    title: 'Architectural Excellence',
    desc: 'Our homes reflect a blend of modern architecture and practical living spaces.',
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-500" />,
    title: 'Expert Guidance',
    desc: 'Our real estate agents help you at every step — from site visit to registration.',
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-yellow-500" />,
    title: 'Quality Assurance',
    desc: 'We ensure top-notch construction quality and premium interiors.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 sm:px-10 overflow-hidden text-white"
    >
      {/* 🔥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/about-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔳 Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0" />

      {/* ✅ Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-4">
            Why Choose <span className="text-white">Keystone Homes?</span>
          </h2>
          <p className="text-gray-200 text-lg mb-6 leading-relaxed">
            We believe your dream home should come with trust, style, and lasting quality. Our mission is to provide luxurious yet affordable living experiences that exceed expectations.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {features.map((feat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/90 backdrop-blur rounded-xl shadow-lg border border-yellow-200 hover:shadow-yellow-400 transition"
            >
              <div className="mb-4">{feat.icon}</div>
              <h4 className="font-semibold text-lg text-[#7A351E] mb-2">
                {feat.title}
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
