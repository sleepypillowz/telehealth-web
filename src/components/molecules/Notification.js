import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, message: 'New appointment scheduled for John Doe.' },
    { id: 2, message: 'Patient report for Jane Smith is ready.' },
    { id: 3, message: 'New prescription available for Michael Johnson.' },
  ]);
  const unreadCount = notifications.length;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between p-6">
      {/* Notification Bell Icon */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="relative flex items-center text-white focus:outline-none"
        >
          <FaBell className="text-2xl text-black" />
          
          {/* Notification Badge */}
          {unreadCount > 0 && (
            <span className="absolute right-0 top-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              {unreadCount}
            </span>
          )}
        </button>

        {/* Notification Dropdown */}
        {isOpen && (
          <div className="absolute right-0 z-10 max-h-60 w-80 overflow-y-auto rounded-lg bg-white p-4 shadow-lg">
            <h3 className="text-lg font-semibold">Notifications</h3>
            <ul className="mt-4 space-y-2">
              {notifications.map((notification) => (
                <li key={notification.id} className="border-b p-2 last:border-b-0">
                  <p className="text-gray-700">{notification.message}</p>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full text-center text-blue-600 hover:underline"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
