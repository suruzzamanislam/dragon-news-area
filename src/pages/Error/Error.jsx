import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <div>
        <h1>Page Not Found</h1>
        <h1>
          Go Back{' '}
          <Link className="text-blue-600 font-black" to="/">
            Home
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Error;
