import React from 'react';

function Header() {
  return (
    <div>
      <div className='border rounded-full w-fit border-teal-500 p-0.5 mx-24'>
      <div className='w-14 h-14 rounded-full overflow-hidden shadow-lg'>
          <img src={'https://reactfolio.tharindu.dev/logo.png'} alt="Description of the image" className="object-cover w-full h-full " />
      </div>
      </div>
      <div className="bg-gray-50 shadow-lg hover:shadow-xl transition duration-200 rounded-full w-fit px-7 max-w-screen-lg mx-auto py-3 -mt-12">
        <div className="flex items-center space-x-4">
          <ul className="flex items-center space-x-8">
            <li>
              <a href="/" className="text-black hover:text-teal-500 transition duration-300 text-sm font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-black hover:text-teal-500 transition duration-300 text-sm font-semibold">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="text-black hover:text-teal-600 transition duration-300 text-sm font-semibold">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="text-black hover:text-teal-600 transition duration-300 text-sm font-semibold">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
