import React from 'react';

const About = () => {
  const techStack = [
    {
      category: 'Frontend',
      icon: (
        <svg className="w-6 h-6 text-purple-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ), // Arrow right icon 
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      icon: (
        <svg className="w-6 h-6 text-purple-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ), // Arrow right icon 
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    },
    {
      category: 'Tools & Others',
      icon: (
        <svg className="w-6 h-6 text-purple-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ), // Arrow right icon 
      technologies: ['Git', 'GitHub', 'VS Code'],
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12 mt-8 mx-auto max-w-6xl relative z-30">
      <h2 className="text-center text-4xl font-extrabold text-gray-100 mb-6">About Me</h2>
      
      {/* The card wrapping the paragraphs and tech stack */}
      <div className="bg-gray-800/80 p-6 sm:p-8 md:p-10 rounded-lg shadow-xl border border-gray-700 max-w-4xl mx-auto">
        <p className="text-justify text-lg leading-relaxed text-gray-300 mb-4">
          I'm aspiring Web Developer and Frontend Developer with a solid passion for crafting engaging and intuitive user experiences. I have good experience of building dynamic web applications using React.js and modern JavaScript, ensuring both functionality and aesthetic appeal.
        </p>
        
        <p className="text-justify text-lg leading-relaxed text-gray-300 mb-8"> 
          My journey into web development began with a fascination for interactive interfaces, leading me to explore more about client-side technologies. I thrive on translating design concepts into responsive, best performance code and I am always seeking new opportunities to learn and grow.
        </p>

        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Icon for Tech Stack section */}
          <div className="flex-shrink-0">
            <div className="bg-purple-700 p-3 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Content for Tech Stack */}
          <div className="flex-grow w-full sm:w-auto">
            <h3 className="text-2xl font-bold text-gray-100 mb-4">Tech Stack</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> 
              {techStack.map((stack, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {stack.icon} 
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-purple-400">{stack.category}</h4>
                    <p className="text-gray-300 text-sm">{stack.technologies.join(', ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
