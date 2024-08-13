import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="m-8 flex items-center justify-between rounded-full bg-gray-100 p-8 shadow-md">
        <h1 className="pl-16 text-2xl font-bold">Telehealth</h1>


        <ul className="flex flex-row gap-x-16 pl-32">

          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}>About</NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/chat" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}>Chat</NavLink>
          </li>
        </ul>

        <ul className="flex flex-row items-center gap-x-16 pr-16">
          <li>
            <button>
              <svg className="h-6 w-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 20 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"></path>
              </svg>
            </button>
          </li>
          <li>
            <button>
              <svg type="button" className="h-6 w-6 text-gray-800 dark:text-white" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 21">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z">
                </path>
              </svg>
            </button>
          </li>
          <li>
            <div className="bg-gray-100 dark:bg-gray-600 relative h-8 w-8 rounded-full">
              <svg className="absolute -left-1 h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd">
                </path>
              </svg>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
