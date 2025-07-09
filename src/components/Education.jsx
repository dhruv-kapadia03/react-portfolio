import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      id: 1,
      institution: 'College/University Name',
      degree: 'B.Tech - Computer Engineering',
      boardOrUniversity: 'CGPIT, UTU Bardoli',
      year: '2021 - 2025',
      scoreLabel: 'CGPA:',
      score: '7.21',
    },
    {
      id: 2,
      // institution: 'School name',
      degree: 'HSC (GHSEB)',
      boardOrUniversity: 'Bai Avabai High School, Valsad',
      year: '2019 - 2021',
      scoreLabel: 'Score:',
      score: '73%',
    },
  ];

  return (
    <section id="education" className="py-16 md:py-24 px-6 md:px-12 mt-8 mx-auto max-w-6xl relative z-30">
      <h2 className="text-4xl font-extrabold text-gray-100 text-center mb-12">Education</h2>
      <div className="max-w-xl mx-auto space-y-8">
        {educationDetails.map((edu) => (
          <div
            key={edu.id}
            className="bg-gray-800/80 p-6 rounded-lg shadow-xl border border-gray-700
                        flex flex-col sm:flex-row items-start 
                        space-y-4 sm:space-y-0 sm:space-x-4"
          >
            {/* Icon part */}
            <div className="flex-shrink-0">
              <div className="bg-purple-700 p-3 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l-9 5 9 5 9-5-9-5zm0 0v-5m0 0l-4.5 2.5M12 9.5l4.5 2.5M12 9.5V4.5" />
                </svg>
              </div>
            </div>

            {/* Content part - takes full width when stacked, auto width when row */}
            <div className="flex-grow w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
                <h3 className="text-xl font-bold text-gray-100">{edu.degree}</h3>
                <p className="hidden sm:block text-purple-400 font-semibold text-lg flex-shrink-0">{edu.scoreLabel} {edu.score}</p>
              </div>
              <p className="text-md text-gray-300 mb-1">{edu.boardOrUniversity}</p>
              <p className="text-sm text-gray-400 mb-2">{edu.year}</p>
              <p className="block sm:hidden text-purple-400 font-semibold text-right">{edu.scoreLabel} {edu.score}</p>
              {/* <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>  */}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
