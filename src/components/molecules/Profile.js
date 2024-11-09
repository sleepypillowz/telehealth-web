import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block">
      <button onClick={toggleDropdown}>
        <div className="relative h-8 w-8 rounded-full">
          <svg className="text-black-400 absolute -left-1 h-8 w-8" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd">
            </path>
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 rounded border border-gray-200 bg-white shadow-lg">
          <ul>
            <li>
              <Link to="/Login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Login</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
