import { NavLink } from 'react-router-dom';

import Notification from './molecules/Notification';
import Profile from './molecules/Profile';

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between rounded-lg bg-gray-100 p-8 shadow-md">
        <h1 className="pl-16 text-2xl font-bold">Telehealth</h1>


        <ul className="flex flex-row gap-x-16">

          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/patients" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}>Patients</NavLink>
          </li>
          <li>
            <NavLink to="/appointment" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}>Appointment</NavLink>
          </li>
          <li>
            <NavLink to="/diagnosis" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}>Diagnosis</NavLink>
          </li>
          <li>
            <NavLink to="/medicines" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}>Medicines</NavLink>
          </li>
        </ul>

        <ul className="flex flex-row items-center gap-x-16 pr-16">
          <li>

          </li>
          <li><Notification /></li>
          <li><Profile /></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
