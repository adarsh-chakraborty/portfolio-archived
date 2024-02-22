import { Link } from 'react-router-dom';
const Messages = () => {
  return (
    <div className="h-screen w-screen bg-gray-100">
      <div className="container mx-auto">
        <div className="flex justify-around pt-8">
          <h1 className="text-4xl font-bold font-Poppins">Messages</h1>
        </div>

        <div className="mt-8 text-center bg-white rounded-md shadow-md p-6 max-w-2xl mx-auto">
          <p>Your messages will appear here.</p>
          <br />
          <Link
            to="/dashboard"
            className="bg-white shadow-md hover:shadow-lg rounded-lg mx-4 py-2 px-4"
          >
            Go Back to Dashboard.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Messages;
