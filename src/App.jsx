import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';

function App() {
  
  return (
    <div className="font-sans antialiased text-gray-200 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#1e1a78] to-[#0f172a]"> 
      </div>

      <Navbar />
      <div className="relative z-20 pt-20"> 
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;