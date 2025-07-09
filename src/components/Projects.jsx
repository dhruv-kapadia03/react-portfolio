import React from 'react';
import projectImg from '../assets/project.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A fully functional MERN Stack E-commerce Website. Offers complete product and order management, secure user authentication, payment integration and an admin panel for seamless control and data management.',
      image: projectImg, 
      technologies: ['React', 'Node Js', 'Express', 'MongoDB', 'CSS'],
      liveDemo: '#',
      github: 'https://github.com/dhruv-kapadia03/ecommerce-website-mern',
    },
    {
      id: 2,
      title: 'Blog Website',
      description: 'A dynamic MERN stack blog platform with comprehensive user authentication. Features include intuitive blog creation, update, and deletion, image management for posts and explore posts from others.',
      image: projectImg, 
      technologies: ['React', 'Node Js', 'Express', 'MongoDB', 'CSS'],
      liveDemo: '#',
      github: 'https://github.com/dhruv-kapadia03/mernblog',
    },
    {
      id: 3,
      title: 'Digital Marketing Website',
      description: 'A static Digital Marketing website structured with multiple pages. Built with foundational web technologies like HTML, CSS, JavaScript, and enhanced with Bootstrap for responsive styling.',
      image: projectImg, 
      technologies: ['HTML5', 'CSS3', 'Bootstarp', 'JavaScript'],
      liveDemo: '#',
      github: 'https://github.com/dhruv-kapadia03/digital-marketing-website',
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 px-6 md:px-12 mt-8 mx-auto max-w-6xl relative z-30"> 
      <h2 className="text-4xl font-extrabold text-gray-100 text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800/80 rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 border border-gray-700">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found'; }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-100 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-base mb-4 text-justify">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-purple-700 text-purple-100 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {/* <a href={project.liveDemo} className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300">Preview</a> */}
                <a href={project.github} className="text-gray-400 hover:text-gray-300 font-semibold transition-colors duration-300">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;