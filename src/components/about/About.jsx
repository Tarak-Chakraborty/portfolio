import React from 'react';
import Links from '../Links'

function About() {
  return (
    <div className='p-24 pt-16'>
      <div className='flex flex-col md:flex-row overflow-hidden gap-24 pb-8'>
        <div className='md:w-3/4'>
          <h1 className='font-sans text-4xl md:text-5xl md:leading-tight font-bold tracking-tight text-left pb-11 leading-tight text-gray-800'>
            I'm Tarak Chakraborty from India, designing the future.
          </h1>
          <h3 className='text-left leading-relaxed text-gray-400'>
            Dedicated to leveraging technology for impactful solutions, I'm a passionate web developer propelled by an unyielding pursuit of growth and innovation. Proficient in React, JavaScript, and a diverse array of programming languages, I thrive on challenges that expand my knowledge boundaries. For me, each project isn't just a finished product; it's a testament to perpetual learning and adaptability.
          </h3>
        </div>
        <div className='md:w-1/2'>
          <img src='https://reactfolio.tharindu.dev/about.jpg' alt='A programmer working on code' className='object-cover object-center rounded-3xl origin-top-left rotate-3 ' />
        </div>
      </div>
      <div className=' w-fit ml-auto mr-32 '>
        <Links />
      </div>

    </div>
  );
}

export default About;
