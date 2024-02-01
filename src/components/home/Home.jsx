import React from 'react'
import ProjectCard from '../ProjectCard'

function Home() {
  return (
    <div className='p-24 pt-16'>
      <div className='flex flex-col md:flex-row overflow-hidden gap-24'>
        <div className='md:w-3/4'>
          <h1 className='font-sans text-4xl md:text-5xl md:leading-tight font-bold tracking-tight text-left pb-11 leading-tight text-gray-800'>
          Web Developer Transform Ideas <br /> into Digital Reality.
          </h1>
          <h3 className='text-left leading-relaxed text-gray-400'>
          I am a Frontend developer with expertise in React.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.
          </h3>
        </div>
        <div className='md:w-1/2 '>
          <img src='https://reactfolio.tharindu.dev/homepage.jpg' alt='A programmer working on code' className='object-cover object-center rounded-3xl origin-top-left rotate-3 ' />
        </div>
      </div>


      {/* adding icons start here */}
      
      <div className='flex gap-4 pt-10 pb-20'>
        <a href="https://twitter.com/tarakchakr67052" className='text-gray-600 text-sm tracking-tight flex gap-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill=""
                stroke=""
                strokeWidth=""
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M23 3a9.35 9.35 0 0 1-2.67.73 4.68 4.68 0 0 0 2.06-2.58 9.5 9.5 0 0 1-2.97 1.13A4.75 4.75 0 0 0 12 5c-2.61 0-4.73 2.12-4.73 4.73 0 .37.04.73.11 1.08A13.49 13.49 0 0 1 1 4.55a4.78 4.78 0 0 0 1.47 6.36 4.75 4.75 0 0 1-2.15-.59v.06c0 2.08 1.48 3.81 3.45 4.21a4.82 4.82 0 0 1-2.13.08c.6 1.75 2.33 3.03 4.38 3.06a9.6 9.6 0 0 1-5.6 1.83c-.36 0-.72-.02-1.08-.07a13.52 13.52 0 0 0 7.28 2.13c8.79 0 13.59-7.27 13.59-13.59 0-.21 0-.42-.02-.63A9.71 9.71 0 0 0 23 3z"></path>
                </svg>
        </a>
        <a href="https://github.com/Tarak-Chakraborty" className='text-gray-600 text-sm tracking-tight flex transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill=""
                stroke=""
                strokeWidth=""
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path
                    d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.88 8.14 6.84 9.46.5.09.68-.22.68-.48 0-.24-.01-.86-.01-1.69-2.5.46-3.03-1.21-3.03-1.21-.41-1.05-1-1.33-1-1.33-.82-.56.06-.55.06-.55.91.06 1.39.94 1.39.94.81 1.39 2.12.99 2.63.75.08-.56.31-.94.56-1.16-1.96-.22-4.02-.98-4.02-4.36 0-.96.34-1.75.89-2.37-.09-.22-.38-1.12.08-2.33 0 0 .73-.24 2.4.9.7-.2 1.44-.3 2.18-.3.74 0 1.48.1 2.18.3 1.67-1.14 2.4-.9 2.4-.9.46 1.21.17 2.11.08 2.33.55.62.89 1.41.89 2.37 0 3.39-2.06 4.14-4.02 4.36.32.27.61.81.61 1.64 0 1.18-.01 2.13-.01 2.42 0 .27.18.58.69.48A12.013 12.013 0 0 0 22 12c0-5.52-4.48-10-10-10z"
                    
                ></path>
                </svg>
        </a>
        <a href="https://www.linkedin.com/in/tarak-chakraborty-792075287/" className='text-gray-600 text-sm tracking-tight flex transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="25"
                height="25"
                fill=""
                >
                <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3C448 46.5 433.6 32 416 32zM135.7 416H69V202.3h66.7V416zm-33.3-240c-21.8 0-39.5-17.7-39.5-39.5s17.7-39.5 39.5-39.5c21.8 0 39.5 17.7 39.5 39.5s-17.7 39.5-39.5 39.5zm282.7 240h-66.7V308c0-24.8-.5-56.7-34.5-56.7-34.5 0-39.8 27-39.8 54.9V416h-66.7V202.3h63.5v29.3h.9c8.9-16.8 30.6-34.5 62.8-34.5 67.3 0 79.9 44.4 79.9 101.9V416z"
                ></path>
                </svg>
            </a>
        <a href="https://www.instagram.com/tarakchakraborty61/" className='text-gray-600 text-sm tracking-tight flex transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="25"
                height="25"
                fill=""
                >
                <path
                    d="M224 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
                </svg>
        </a>
        <a href="mailto:chakrabortytarak83@gmail.com" className='text-gray-600 text-sm tracking-tight flex transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width="27"
              height="27"
              fill=""
            >
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
            </svg>
        </a>
      </div>

      <ProjectCard/>
    </div>
  )
}

export default Home