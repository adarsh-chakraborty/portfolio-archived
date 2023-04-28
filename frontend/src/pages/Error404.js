import { Link } from 'react-router-dom';
const Error404 = () => {
  return (
    <div className="h-screen w-screen bg-gray-100">
      <div className="container mx-auto">
        <div className="flex justify-around pt-8">
          <h1 className="text-4xl font-bold font-Poppins">Error 404</h1>
        </div>

        <div className="mt-8 text-center bg-white rounded-md shadow-md p-6 max-w-2xl mx-auto">
          The Page you're looking for is not found.
          <Link
            to="/"
            className="bg-white shadow-md hover:shadow-lg rounded-lg mx-4 py-2 px-4"
          >
            Go Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
