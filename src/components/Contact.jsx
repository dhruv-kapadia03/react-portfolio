import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-12 mt-8 mx-auto max-w-6xl relative z-30"> 
      <h2 className="text-4xl font-extrabold text-gray-100 text-center mb-12">Let's Connect</h2>
      <div className="max-w-xl mx-auto bg-gray-800/80 p-8 rounded-lg shadow-xl border border-gray-700">
        {/* <p className='mt-2 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base text-center'>Let's work together. Feel free to reach out.</p> */}
        <p className='mt-2 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base text-center'>I'm actively looking for new opportunities. Feel free to reach out.</p>
        <p className='text-center mt-4 text-2xl font-semibold text-purple-400'>
          {/* <a href="mailto:your.email@example.com">your.email@example.com</a> */}
          <a href="mailto:dhruvk2910@gmail.com">dhruvk2910@gmail.com</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;