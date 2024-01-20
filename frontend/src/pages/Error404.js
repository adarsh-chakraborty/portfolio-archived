import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Error 404</h1>
        <p className="text-gray-600 mb-6">
          The page you're looking for is not found.
        </p>
        <Link
          to="/"
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Go Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error404;
