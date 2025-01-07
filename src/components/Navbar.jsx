import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-primary transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className='text-white font-bold text-2xl'>
                Nintendo
            </a>
          <ul className="flex gap-8 text-white font-medium">
            <li><a href="/product" className="hover:text-secondary">Products</a></li>
            <li><a href="/news" className="hover:text-secondary">News</a></li>
            <li><a href="/about" className="hover:text-secondary">About</a></li>
            <li><a href="/contact" className="hover:text-secondary">Contact</a></li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
