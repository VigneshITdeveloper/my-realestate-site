'use client';

import { motion } from 'framer-motion';

const blogs = [
  {
    title: '5 Tips for First-Time Home Buyers',
    image: '/blog-1.jpg',
    excerpt: 'Buying your first home can be overwhelming. Here are essential tips to make the process smoother...',
  },
  {
    title: 'Interior Design Trends in 2025',
    image: '/blog-2.jpg',
    excerpt: 'Explore the latest design inspirations making homes smarter and more elegant this year...',
  },
  {
    title: 'Why Invest in Real Estate Now?',
    image: '/blog-3.jpg',
    excerpt: 'With rising demand and limited inventory, 2025 could be the best time to invest...',
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="relative text-white py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/blogs-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔳 Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* 💡 Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-400">Latest Blog Posts</h2>
          <p className="text-gray-200 mt-2 text-base">
            Insights, trends, and advice from real estate experts.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-yellow-100"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-yellow-300">{blog.title}</h3>
                <p className="text-gray-200 mt-2 text-sm">{blog.excerpt}</p>
                <a
                  href="#"
                  className="text-yellow-400 font-semibold mt-3 inline-block hover:underline"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
