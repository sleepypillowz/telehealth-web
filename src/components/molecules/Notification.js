import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown}>
        <svg type="button" className="h-6 w-6 text-gray-800 dark:text-white" aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 21">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z">
          </path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded border border-gray-200 bg-white shadow-lg">
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
