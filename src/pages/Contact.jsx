import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white text-black min-h-screen mt-12">
      <header className="bg-primary text-white py-4">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      </header>
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p>If you have any questions, feel free to reach out to us through the form below:</p>
          <form className="mt-4 space-y-4">
            <div>
              <label htmlFor="name" className="block font-semibold">Name:</label>
              <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold">Email:</label>
              <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold">Message:</label>
              <textarea id="message" className="w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
            </div>
            <button type="submit" className="bg-primary text-white py-2 px-4 rounded">Send Message</button>
          </form>
        </div>
      </section>
    
    </div>
  );
};

export default Contact;
