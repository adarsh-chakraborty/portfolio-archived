import axios from '../api/axios';
import AppContext from '../context/app-context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const ctx = useContext(AppContext);
  const navigate = useNavigate();
  async function handleLogout() {
    try {
      await axios.get('/logout');
    } catch (err) {
      console.log(err);
    }
    ctx.logout();
    navigate('/login');
  }

  return (
    <button
      className="bg-white shadow-md hover:shadow-lg rounded-lg py-2 px-4"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default Logout;
