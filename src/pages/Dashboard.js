import Logout from '../components/Logout';
import Table from '../components/Table';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center pt-8">
          <h1 className="text-4xl font-bold mb-4 md:mb-0 p-2 bg-gray-800 rounded-lg">
            Dashboard
          </h1>
          <div className="flex gap-2 md:gap-5">
            <Link
              to="/new"
              className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg py-2 px-4 text-sm md:text-base"
            >
              Add New Project
            </Link>
            <Link
              to="/messages"
              className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg py-2 px-4 text-sm md:text-base"
            >
              Messages (0)
            </Link>
            <Logout />
          </div>
        </div>

        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
