import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='flex justify-center pt-32'>
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow">
        <htmlForm className="space-y-6" action="#">
          <h1 className="text-xl font-medium text-gray-900">Sign in to our platform</h1>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">Your email</label>
            <input type="email" name="email" id="email" placeholder="name@company.com" required autoFocus />
          </div>
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-900">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" required />
          </div>
          <div>
            <label htmlFor="Confirmation" className="mb-2 block text-sm font-medium text-gray-900">Confirmation</label>
            <input type="password" name="Confirmation" id="Confirmation" placeholder="••••••••" required />
          </div>
          <button type="submit" className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">Register</button>
          <div className="text-sm font-medium text-gray-500">
            Have an account? <Link to="/login" className="text-blue-700 hover:underline">Login</Link>
          </div>
        </htmlForm>
      </div>
    </div>


  );
}

export default Register;
