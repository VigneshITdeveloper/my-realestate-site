'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ['Home', 'About', 'Gallery', 'Projects', 'Blogs', 'Contact'];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#1A1F36] via-[#3B0A0F] to-[#1A1F36] text-white font-sans"
    >
      {/* 🔥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔳 Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0" />

      {/* 🌐 Navbar */}
      <div className="absolute top-5 left-0 right-0 z-20 px-4 flex items-center justify-between max-w-2xl mx-auto backdrop-blur-sm bg-white/10 rounded-full shadow-md ring-1 ring-white/10">
        {/* Logo */}
        <div className="text-yellow-300 font-extrabold text-xl sm:text-2xl tracking-wider glow">
          Keystone
        </div>

        {/* Desktop Menu */}
        <nav className="hidden sm:flex gap-5 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-yellow-300 transition duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-2 bg-white/10 backdrop-blur-md rounded-full shadow"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-14 right-4 bg-[#1A1F36]/90 backdrop-blur-lg rounded-xl px-4 py-3 flex flex-col gap-3 shadow-lg sm:hidden z-20 w-44">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-sm hover:text-yellow-300 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-36 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h4 className="text-xs sm:text-sm text-yellow-200 tracking-wider uppercase mb-4">
            Welcome to Keystone Homes
          </h4>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 drop-shadow-md">
            Find Your <span className="text-yellow-400">Dream Home</span>
          </h1>
          <p className="text-yellow-100 text-base sm:text-lg leading-relaxed mb-6">
            Discover modern living with architectural brilliance and warmth. Let’s build the space
            that brings peace, pride, and joy to your life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block px-8 py-3 font-semibold text-black transition bg-yellow-400 hover:bg-yellow-500 rounded-full shadow-lg ring-2 ring-yellow-200 hover:ring-yellow-400 animate-pulse"
          >
            Schedule a Home Visit
          </motion.button>
        </motion.div>

        {/* Image + Brochure Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full"
        >
          <img
            src="/hero-home2.png"
            alt="Modern home"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-white/90 p-4 rounded-2xl shadow-xl w-48 sm:w-60 border border-yellow-300 backdrop-blur-sm"
          >
            <img src="/hero-home3.png" alt="PDF" className="w-8 mb-2" />
            <p className="text-sm font-medium text-gray-800 leading-snug">
              Download project brochure with detailed cost & design info.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* 📝 Contact Form Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mt-[-2rem] pb-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center"
        >
          <img src="/hero-home5.png" alt="Agent" className="w-[180px] drop-shadow-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-lg border border-yellow-200 rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md mx-auto md:mx-0"
        >
          <h3 className="text-lg font-bold mb-4 text-gray-800 text-center">
            Book a Free Consultation
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-lg font-semibold shadow-md transition"
            >
              Schedule Now
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
