import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-black min-h-screen mt-12">
      <header className="bg-primary text-white py-4">
        <h1 className="text-3xl font-bold text-center">About Nintendo</h1>
      </header>
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            Nintendo is dedicated to creating exceptional gaming experiences that
            bring joy and creativity to people around the world. Since its founding,
            Nintendo has been at the forefront of innovation, creating beloved
            franchises like Mario, Zelda, and Pokémon.
          </p>
          <section className="py-8 px-4">
            <div className="container mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26662.626273156875!2d135.73803566435527!3d34.97486497912621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010f59e4c66699%3A0x489ba724490b2280!2sNintendo%20Co.%2C%20Ltd!5e0!3m2!1sen!2sid!4v1736236503121!5m2!1sen!2sid" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"></iframe>
            </div>
        </section>
        </div>
      </section>
    </div>
  );
};

export default About;
