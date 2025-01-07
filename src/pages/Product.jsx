import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Nintendo Switch',
    year: '2017 - Present',
    description: 'The Nintendo Switch is a hybrid gaming console that can be used as both a home console and a portable handheld device.',
    image: '/assets/switch.png',
  },
  {
    name: 'Wii U',
    year: '2012 - 2017',
    description: 'The Wii U is a home video game console that was the successor to the Wii, featuring a unique tablet-like controller.',
    image: '/assets/wiiu.png',
  },
  {
    name: 'Nintendo 3DS',
    year: '2011 - 2020',
    description: 'The Nintendo 3DS is a handheld gaming console known for its ability to display 3D visuals without glasses.',
    image: '/assets/3ds.png',
  },
  {
    name: 'Nintendo Wii',
    year: '2006 - 2013',
    description: 'The Nintendo Wii was a revolutionary console that introduced motion-sensing gameplay.',
    image: '/assets/wii.png',
  },
  {
    name: 'Nintendo DS',
    year: '2004 - 2014',
    description: 'The Nintendo DS is a handheld gaming console with dual screens, one of which is a touchscreen.',
    image: '/assets/ds.png',
  },
  {
    name: 'Super Nintendo Entertainment System (SNES)',
    year: '1990 - 1996',
    description: 'The SNES is a classic 16-bit home console known for its iconic games and graphics.',
    image: '/assets/snes.png',
  },
  {
    name: 'Game Boy',
    year: '1989 - 2003',
    description: 'The Game Boy is one of the most popular handheld gaming devices of all time.',
    image: '/assets/gameboy.png',
  },
];

const Product = () => {
  return (
    <div className="bg-white text-black min-h-screen mt-12">
      <section id="product-section" className="py-8 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center justify-between mb-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
            >
              <div className="w-1/2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-3/4 rounded-lg shadow-lg"
                />
              </div>
              <div className="w-1/2 pl-8">
                <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                <p className="text-2xl font-semibold mb-4">{product.year}</p>
                <p>{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
