import React from 'react';

const Hero = () => {
  return (
    <section className="py-24 md:py-32 flex items-center justify-center min-h-[calc(100vh-80px)] text-white">
      <div className="text-center px-4 max-w-3xl relative z-30"> 
        {/* <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg"> */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-lg">
          Hello, I'm <span className="text-purple-300">Dhruv Kapadia</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md">
          {/* A dedicated <span className="font-semibold text-purple-200">[Your Profession/Specialty]</span> focused on crafting innovative digital solutions. */}
          An aspiring Web Developer and Frontend Developer focused on crafting innovative digital solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#projects" className="bg-purple-700 text-white hover:bg-purple-600 font-bold py-3 px-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
            View Work
          </a>
          <a href="#contact" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 font-bold py-3 px-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;