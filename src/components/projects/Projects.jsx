import React from 'react'
import ProjectCard from '../ProjectCard'

function Contact() {
  return (
    // main div
    <div  className='p-24 pt-16'>
      {/* child div */}
      <div className='mb-20 w-10/12'>
        <h1 className='font-sans text-5xl font-bold tracking-tight text-left pb-11 leading-tight text-gray-800'>
        Things I’ve made trying to put my dent in the universe.
        </h1>
        <h3 className='text-left leading-relaxed text-gray-400'>
        Dedicated to leveraging technology for impactful solutions, I'm a passionate web developer propelled by an unyielding pursuit of growth and innovation. Proficient in React, JavaScript, and a diverse array of programming languages, I thrive on challenges that expand my knowledge boundaries. For me, each project isn't just a finished product; it's a testament to perpetual learning and adaptability.
        </h3>
      </div>
      {/* second child div */}
      <div>
        <ProjectCard />
      </div>
    </div>
  )
}

export default Contact