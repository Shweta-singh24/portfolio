import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-black via-gray-900 to-gray-700 text-white text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Shweta Singh</h2>
      <p className="text-lg md:text-2xl mb-6">Aspiring Backend Developer | Full Stack Enthusiast</p>
      <a href="#projects" className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-700 hover:text-white transition">View My Work</a>
    </section>
  );
};

export default Hero;
