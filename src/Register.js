import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='flex justify-center'>
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900">Sign in to our platform</h5>
          <div>
            <label for="email" className="mb-2 block text-sm font-medium text-gray-900">Your email</label>
            <input type="email" name="email" id="email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" placeholder="name@company.com" required />
          </div>
          <div>
            <label for="password" className="mb-2 block text-sm font-medium text-gray-900">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" required />
          </div>
          <div>
            <label for="password" className="mb-2 block text-sm font-medium text-gray-900">Confirmation</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" required />
          </div>
          <button type="submit" className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">Register</button>
          <div className="text-sm font-medium text-gray-500">
            Have an account? <Link to="/login" className="text-blue-700 hover:underline">Login</Link>
          </div>
        </form>
      </div>
    </div>


  );
}

export default Register;
