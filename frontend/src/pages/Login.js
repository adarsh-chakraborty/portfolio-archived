import React from 'react';
import axios from '../api/axios';
import { useState } from 'react';
import { useContext } from 'react';
import AppContext from '../context/app-context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const ctx = useContext(AppContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (e) => {
    setError('');
    e.preventDefault();
    try {
      const res = await axios.post('/login', {
        username,
        password
      });

      const token = res.data.token;
      ctx.login(token);
      navigate('/dashboard');
    } catch (err) {
      const errMsg = err?.response?.data?.error
        ? err.response.data.error
        : 'Some error occured. Try again later.';
      setError(errMsg);
      console.log(err);
    }
  };
  return (
    <div className="h-screen flex flex-col  items-center bg-gray-100">
      <h1 className="text-3xl font-Poppins border-b-2 border-blue-700 p-1 mt-14">
        Login
      </h1>

      <div className="flex flex-col items-center py-6">
        <div className="block font-semibold text-red-600 p-2">{error}</div>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={submitHandler}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
