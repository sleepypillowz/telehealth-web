import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex justify-center pt-32'>
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow">
        <htmlForm className="space-y-6" action="#">
          <h1 className="text-xl font-medium text-gray-900">Log in to our platform</h1>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">Your email</label>
            <input type="email" name="email" id="email" placeholder="name@company.com" required autoFocus />
          </div>
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-900">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" required />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input id="remember" type="checkbox" value="" className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300" required />
              </div>
              <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">Remember me</label>
            </div>
            <Link to="#" className="ms-auto text-sm text-blue-700 hover:underline">Lost Password?</Link>
          </div>
          <button type="submit" className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">Login</button>
          <div className="text-sm font-medium text-gray-500">
            Not registered? <Link to="/register" className="text-blue-700 hover:underline">Create account</Link>
          </div>
        </htmlForm>
      </div>
    </div>


  );
}

export default Login;
