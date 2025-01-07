import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col">

      <section className="relative text-center min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/assets/banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <motion.div
          className="relative z-10 text-white text-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-6xl font-extrabold mb-6">Welcome to Nintendo</h1>
          <p className="text-xl mb-8">Innovating entertainment, one game at a time.</p>
          <a
            href="/product"
            className="bg-secondary text-white px-8 py-3 rounded-full text-xl transition-all hover:bg-primary"
          >
            Explore Products
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-primary">About Nintendo</h2>
          <p className="text-lg text-gray-700 mb-8">
            For decades, Nintendo has been shaping the gaming industry with revolutionary consoles and unforgettable games.
          </p>
          <a
            href="/about"
            className="text-lg font-semibold text-secondary underline hover:text-primary"
          >
            Learn More
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
