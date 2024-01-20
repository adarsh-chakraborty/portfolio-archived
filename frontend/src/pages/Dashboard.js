// Dashboard.jsx

import Logout from '../components/Logout';
import Table from '../components/Table';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-around items-center md:items-start pt-8">
          <h1 className="text-4xl font-bold font-Poppins mb-4 md:mb-0 p-2 bg-white rounded-lg">
            Dashboard
          </h1>
          <div className="flex gap-2 md:gap-5">
            <Link
              to="/new"
              className="bg-white shadow-md hover:shadow-lg rounded-lg py-2 px-4 text-sm md:text-base"
            >
              Add New Project
            </Link>
            <Link
              to="/messages"
              className="bg-white shadow-md hover:shadow-lg rounded-lg py-2 px-4 text-sm md:text-base"
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
