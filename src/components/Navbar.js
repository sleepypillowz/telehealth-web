import { NavLink } from 'react-router-dom';

import Notification from './molecules/Notification';
import Profile from './molecules/Profile';

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between rounded-lg bg-gray-100 px-4 py-0 shadow-md">
        <NavLink to="/" className='flex flex-row items-center'>
        <img className="h-16 w-16" src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo"/>
        <h1 className="items-center text-2xl font-bold">Malibiran Medical Clinic</h1>
        </NavLink>
        
        <ul className="flex flex-row gap-x-16">

          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/admin" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}>Admin</NavLink>
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
