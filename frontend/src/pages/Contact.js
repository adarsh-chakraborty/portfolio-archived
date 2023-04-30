import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import axios from '../api/axios';

function Contact({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      message
    };

    try {
      const res = await axios.post('/contact', payload);
      setSuccess(res.data.message);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setSuccess(null);

        onClose();
      }, 2000);
    } catch (err) {
      console.log(err);
      setError(err.response.data.error ?? err.message);
      setTimeout(() => {
        setError(null);
      }, 2500);
    }
  };
  return (
    <div className="relative font-Poppins flex flex-col items-center justify-center  bg-gray-100 border-t-8 border-blue-900 w-full rounded-[5px]">
      {error && (
        <div className="absolute top-0 bg-red-100 border border-red-400 text-red-700 mt-2 px-4 w-3/5 text-center mx-12 py-3 rounded ">
          {error}
        </div>
      )}
      {success && (
        <div className="absolute top-0 bg-green-100 border border-green-400 text-green-700 mt-2 px-4 w-fit text-sm text-center mx-12 py-3 rounded">
          {success}
        </div>
      )}
      <div className="absolute right-5 top-2 cursor-pointer " onClick={onClose}>
        <AiOutlineClose />
      </div>

      <div className=" px-4 py-5">
        <h2 className="mb-4 text-2xl font-semibold text-center text-blue-800">
          Leave a message
        </h2>
        <form className="space-y-6" onSubmit={submitHandler}>
          <div className="flex flex-wrap mb-6">
            <div className="w-full">
              <label
                className="block mb-2 text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="block w-full p-3 rounded-md bg-gray-50 border border-gray-300 focus:outline-none focus:bg-blue-50 focus:border-blue-800"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="w-full">
              <label
                className="block mb-2 text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="block w-full p-3 rounded-md bg-gray-50 border border-gray-300 focus:outline-none focus:bg-blue-50 focus:border-blue-800"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="w-full">
              <label
                className="block mb-2 text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="block w-full p-3 rounded-md bg-gray-50 border border-gray-300 focus:outline-none focus:bg-blue-50 focus:border-blue-800"
                id="message"
                name="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
          </div>
          <div className="flex gap-8">
            <button
              className="ml-8 px-4 py-2 font-semibold text-white bg-blue-800 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              type="submit"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 font-semibold text-white bg-blue-800 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
