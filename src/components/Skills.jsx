import React from 'react';

const Skills = () => {
  const skills = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Express', 'MongoDB', 'RESTful APIs', 'Tailwind CSS', 'Bootstrap','Git', 'Github', 'Postman'];

  return (
    <section id="skills" className="py-16 md:py-24 px-6 md:px-12 mt-8 mx-auto max-w-6xl relative z-30"> 
      <h2 className="text-4xl font-extrabold text-gray-100 text-center mb-9">Technical Skills</h2>
      <p className='mb-8 text-center text-gray-300 text-lg'>
        A comprehensive overview of my technical skills, tools and technologies that I've utilized.
      </p>
      {/* <p className='mb-8 text-center text-gray-300 text-sm md:text-lg lg:text-lg max-w-2xl mx-auto'>
        A comprehensive overview of my technical skills, tools and technologies.
      </p> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        {skills.map((skill, index) => (
          <div key={index} className="bg-purple-700 p-6 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
            <p className="text-xl font-semibold text-purple-100">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;