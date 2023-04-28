import Logout from '../components/Logout';
import Table from '../components/Table';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div className="h-screen w-screen bg-gray-100">
      <div className="container mx-auto">
        <div className="flex justify-around pt-8">
          <h1 className="text-4xl font-bold font-Poppins">Dashboard</h1>
          <div className="flex gap-5">
            <Link
              to="/new"
              className="bg-white shadow-md hover:shadow-lg rounded-lg py-2 px-4"
            >
              Add New Project
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
