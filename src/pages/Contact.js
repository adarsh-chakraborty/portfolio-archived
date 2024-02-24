import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import axios from '../api/axios';
import ReactGA from "react-ga4";

function Contact({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(null);
  
  const [isSubmitting, setIsSubmitting ] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const successAudio = new Audio('/media/success.mp3');
  const errorAudio = new Audio('/media/error.mp3');


  const playSuccessAudio = () => {
    successAudio.play();
  }

  const stopSuccessAudio = () => {
    successAudio.pause();
  }

  const playErrorAudio = () => {
    errorAudio.play();
  }

  const stopErrorAudio = () => {
    errorAudio.pause();
  }

  const closeForm = () => {
    console.log("Form closed")
    clearTimeout(timeoutId);
    successAudio.currentTime = 0; // Reset the audio playback to the beginning
    successAudio.pause(); // Pause the audio
    stopErrorAudio(); // Stop the error audio as well, if it's playing
    onClose(); // Call the onClose function to close the form
  };

  

  
  const validatePayload = (payload) => {
    let errors = {};
  
    // Validate name
    if (!payload.name || payload.name.trim() === '') {
      errors.name = 'Name is required';
    }
  
    // Validate email
    if (!payload.email || payload.email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(payload.email)) {
      errors.email = 'Invalid email format';
    }
  
    // Validate message
    if (!payload.message || payload.message.trim() === '') {
      errors.message = 'Message is required';
    }
  
    return errors;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      message
    };

    const validationErrors = validatePayload(payload);
    setError(validationErrors);

    if (Object.keys(validationErrors).length !== 0) {
      playErrorAudio();
      return;
      
    }

    try {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      setIsSubmitting(true);
      const res = await axios.post('/message', payload);
      setSuccess(res.data.message);
      playSuccessAudio();
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);

      
      const newTimeoutId = setTimeout(() => {
        setSuccess(null);
        stopSuccessAudio();
        closeForm();
      }, 11000);

      setTimeoutId(newTimeoutId);



      ReactGA.event({
        category: 'Contact Form Submit',
        action: 'Submitted Contact form',
        label: 'contact form',
      });


    } catch (err) {
      console.log(err);
      setError(err.response.data.error ?? err.message);
      playErrorAudio();
      setIsSubmitting(false);

      setTimeout(() => {
        
        setError({});
        stopErrorAudio();
      }, 5500);
    }

    
  };
  return (
    <div className="relative font-Poppins flex flex-col items-center justify-center  bg-gray-100 border-t-8 border-blue-900 w-full rounded-[5px]">
      
      {success && (
        <div>
          <div className='flex gap-2 items-center justify-center overflow-hidden '>
          <img src='/media/catss.gif' alt='success' width="200px" className='mt-12 aspect-square'/>
          <img src='/media/cat-dance.gif' alt='success' width="200px" className='mt-12 aspect-square'/>
         
          </div>
          <div className="  bg-green-100 border border-green-400 text-green-700 mt-4 px-4 w-fit text-sm text-center mx-12 py-3 rounded">
            {success} 
          </div>
          
          <div className='flex gap-2 items-center justify-center overflow-hidden '>
          <img src='/media/cat-cats.gif' alt='success' width="200px" className='my-4 aspect-square'/>
          <img src='/media/cool-fun.gif' alt='success' width="200px" className='my-4 aspect-square'/>
          </div>
        </div>
        
      )}
      <div className="absolute right-5 top-2 cursor-pointer " onClick={closeForm}>
        <AiOutlineClose />
      </div>
      {!success && <>
      <div className=" px-4 py-5">
        <h2 className="mb-4 text-2xl font-semibold text-center text-blue-800">
          Leave a message
        </h2>
        <form className="space-y-6 min-h-" onSubmit={submitHandler}>
      <div className="flex flex-wrap mb-6">
        <div className="w-full">
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className={`block w-full p-3 rounded-md bg-gray-50 border border-gray-300 focus:outline-none focus:bg-blue-50 focus:border-blue-800 ${
              error?.name ? 'border-red-500' : ''
            }`}
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error?.name && (
            <p className="text-sm text-red-500">{error?.name}</p>
          )}
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
            className={`block w-full p-3 rounded-md bg-gray-50 border border-gray-300 focus:outline-none focus:bg-blue-50 focus:border-blue-800 ${
              error?.email ? 'border-red-500' : ''
            }`}
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error?.email && (
            <p className="text-sm text-red-500">{error?.email}</p>
          )}
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
            className={`block w-full p-3 rounded-md bg-gray-50 border border-gray-300 focus:outline-none focus:bg-blue-50 focus:border-blue-800 ${
              error?.message ? 'border-red-500' : ''
            }`}
            id="message"
            name="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {error?.message && (
            <p className="text-sm text-red-500">{error?.message}</p>
          )}
        </div>
      </div>
      <div className="flex gap-8">
        <button
        disabled={isSubmitting}
          className={`ml-8 px-4 py-2 font-semibold text-white bg-blue-800 ${isSubmitting ? "bg-blue-400" : ""} rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
          
        >
          {isSubmitting ? "🐱 Submitting.." : "🐱 Submit"}
        </button>
        <button
          type="button"
          onClick={closeForm}
          className="px-4 py-2 font-semibold text-white bg-gray-700 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          ❌ Back
        </button>
      </div>
    </form>
      </div>
      </>}
    </div>
  );
}

export default Contact;
