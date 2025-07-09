import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 border-b border-gray-700"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="" className="text-2xl font-bold text-indigo-400 cursor-pointer">DK</a> 
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-10 items-baseline space-x-6"> 
          <a href="#about" onClick={closeMenu} className="text-gray-200 hover:text-indigo-400 transition-colors duration-300 relative group text-base font-medium">
            About
            {/* <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span> */}
          </a>
          <a href="#projects" onClick={closeMenu} className="text-gray-200 hover:text-indigo-400 transition-colors duration-300 relative group text-base font-medium">
            Projects
          </a>
          <a href="#skills" onClick={closeMenu} className="text-gray-200 hover:text-indigo-400 transition-colors duration-300 relative group text-base font-medium">
            Skills
          </a>
          <a href="#education" onClick={closeMenu} className="text-gray-200 hover:text-indigo-400 transition-colors duration-300 relative group text-base font-medium">
            Education
          </a>
          <a href="#contact" onClick={closeMenu} className="text-gray-200 hover:text-indigo-400 transition-colors duration-300 relative group text-base font-medium">
            Contact
          </a>
        </nav>

        {/* Mobile menu button  */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-200"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {/* <span className="sr-only">Open menu</span>  */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu  */}
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className={`md:hidden absolute w-full bg-gray-900/80 border-b border-gray-700 shadow-lg flex flex-col items-center py-4 rounded-b-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <a onClick={closeMenu} href="#about" className="block w-full text-center py-3 text-lg text-gray-200 hover:bg-gray-800 transition-colors duration-300">About</a>
          <a onClick={closeMenu} href="#projects" className="block w-full text-center py-3 text-lg text-gray-200 hover:bg-gray-800 transition-colors duration-300">Projects</a>
          <a onClick={closeMenu} href="#skills" className="block w-full text-center py-3 text-lg text-gray-200 hover:bg-gray-800 transition-colors duration-300">Skills</a>
          <a onClick={closeMenu} href="#education" className="block w-full text-center py-3 text-lg text-gray-200 hover:bg-gray-800 transition-colors duration-300">Education</a>
          <a onClick={closeMenu} href="#contact" className="block w-full text-center py-3 text-lg text-gray-200 hover:bg-gray-800 transition-colors duration-300">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
