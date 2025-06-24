'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
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
        <source src="/contact-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔳 Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* 💡 Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* 📞 Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 mb-6">
            We’re here to help you with your property journey. Reach out to schedule a consultation or ask a question.
          </p>

          <div className="space-y-4 text-sm text-gray-200">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-yellow-400" />
              +91 98765 43210
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-yellow-400" />
              contact@keystonehomes.in
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-yellow-400" />
              123 Keystone Street, Chennai, TN - 600001
            </div>
          </div>
        </motion.div>

        {/* 📬 Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-lg border border-yellow-100 rounded-2xl p-8 w-full shadow-xl"
        >
          <h3 className="text-lg font-semibold mb-4 text-yellow-300 text-center">
            Contact Form
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border border-gray-300 px-4 py-2 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border border-gray-300 px-4 py-2 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full bg-transparent border border-gray-300 px-4 py-2 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#1A1F36] py-2 rounded-lg font-semibold shadow-md transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
