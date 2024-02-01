import React from 'react';

function Footer() {
  return (
    <footer className='border-t-2 border-slate-400 py-8'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
        <ul className='flex items-center space-x-20 px-24'>
          <li>
            <a href='/' className='text-gray-500 hover:text-teal-600 transition duration-300 text-sm font-semibold'>
              Home
            </a>
          </li>
          <li>
            <a href='/about' className='text-gray-500 hover:text-teal-600 transition duration-300 text-sm font-semibold'>
              About
            </a>
          </li>
          <li>
            <a
              href='/projects'
              className='text-gray-500 hover:text-teal-600 transition duration-300 text-sm font-semibold'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='/contact'
              className='text-gray-500 hover:text-teal-600 transition duration-300 text-sm font-semibold'
            >
              Contact
            </a>
          </li>
        </ul>
        <div className='mt-4 md:mt-0 px-24'>
          <h3 className='text-gray-400 text-sm'>© 2024 Tarak.dev. All Rights Reserved.</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;