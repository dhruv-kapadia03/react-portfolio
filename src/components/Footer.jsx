import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12 relative z-30"> 
      <div className="container mx-auto px-6 md:px-12 text-center">
        <p>&copy; {new Date().getFullYear()} Dhruv Kapadia. Built with React & TailwindCSS.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.linkedin.com/in/dhruv-kapadia03/" className="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>
          <a href="https://github.com/dhruv-kapadia03" className="text-gray-400 hover:text-white transition-colors duration-300">GitHub</a>
          <a href="https://www.instagram.com/dh_r_uv_03/" className="text-gray-400 hover:text-white transition-colors duration-300">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;