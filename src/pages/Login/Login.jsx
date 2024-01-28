import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const handleSignIn = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    setError(' ');
    setSuccess(' ');
    signIn(email, password)
      .then(() => {
        setSuccess('Log In Success');
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        setError(error.message);
      });
  };
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="border bg-[#F3F3F3] w-1/2 mx-auto py-16 px-16 mt-6">
        <h1 className="text-2xl text-center font-bold text-[#403F3F] border-b pb-6 border-blue-500">
          Login your account
        </h1>
        <form onSubmit={handleSignIn} className="mt-7">
          <div className="space-y-3">
            <label className="block text-gray-600 text-xl" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-5 py-2"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="space-y-3 mt-7">
            <label className="block text-gray-600 text-xl" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-5 py-2"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="bg-[#403F3F] w-full py-2 text-white font-semibold"
            >
              Log In
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="font-medium text-gray-600">
              Dont’t Have An Account ?{' '}
              <Link to="/register" className="text-red-500 font-semibold">
                Register
              </Link>
            </p>
          </div>
          <div className="text-center mt-3">
            {error && <p className="text-red-500">{error}</p>}{' '}
            {success && <p className="text-green-600">{success}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
