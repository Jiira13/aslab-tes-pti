import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 mt-16 static bottom-0 w-screen">
      <div className="container mx-auto text-center">
        <p className="text-lg">&copy; 2025 Nintendo. All rights reserved.</p>
        <div className="space-x-6 mt-4">
          <a href="https://www.facebook.com/nintendo" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a href="https://twitter.com/nintendo" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="https://www.instagram.com/nintendo" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
