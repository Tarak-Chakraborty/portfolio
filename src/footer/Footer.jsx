import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className='border-t-2 border-slate-400 py-8'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
        <ul className='flex items-center space-x-20 px-24'>
          <li>
            <Link to='/' className='text-gray-500 hover:text-teal-600 transition duration-300 text-sm font-semibold'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' className='text-gray-500 hover:text-teal-600 transition duration-300 text-sm font-semibold'>
              About
            </Link>
          </li>
          <li>
            <Link to='/projects' className='text-gray-500 hover:text-teal-600 transition duration-300 text-sm font-semibold'>
              Projects
            </Link>
          </li>
          <li>
            <Link to='/contact' className='text-gray-500 hover:text-teal-600 transition duration-300 text-sm font-semibold'>
              Contact
            </Link>
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