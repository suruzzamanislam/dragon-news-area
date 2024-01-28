import { useContext, useState } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [error, setError] = useState(null);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    if (!checked) {
      alert('Plese agree terms and condition');
      return;
    }
    createUser(email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        navigate('/');
      })
      .catch(error => {
        setError(error.message);
      });
  };
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="border bg-[#F3F3F3] w-1/2 mx-auto py-6 px-16 mt-6">
        <h1 className="text-2xl text-center font-bold text-[#403F3F] border-b pb-6 border-blue-500">
          Register your account
        </h1>
        <form onSubmit={handleSubmit} className="mt-7">
          <div className="space-y-3">
            <label className="block text-gray-600 text-xl" htmlFor="name">
              Your Name
            </label>
            <input
              className="w-full px-5 py-2"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="space-y-3 mt-7">
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
          <div className="my-5">
            <label className="cursor-pointer flex items-center gap-x-3">
              <input
                onClick={() => setChecked(!checked)}
                type="checkbox"
                checked={checked ? 'checked' : ''}
                className="checkbox checkbox-secondary"
              />
              <span className="label-text font-medium">
                Accept Term & Conditions
              </span>
            </label>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-[#403F3F] w-full py-2 text-white font-semibold"
            >
              Register
            </button>
          </div>
          <div className="text-center mt-3">
            {error && <p className="text-red-500">{error}</p>}{' '}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
