import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-16 pt-8   w-full bg-gray-200 shadow-inner flex flex-col items-center justify-center pb-2">
      <h1 className="font-semibold text-3xl font-Poppins">
        Adarsh Chakraborty
      </h1>
      <a href="mailto:adarshc@duck.com" className="font-Poppins">
        adarshc@duck.com
      </a>
      <div className="mt-5 flex gap-2">
        <a
          href="https://www.facebook.com/adarshwastaken/"
          target="_blank"
          rel="noreferrer"
          className="group p-2 bg-gray-50 shadow-md rounded-md"
        >
          <BsFacebook className="w-7 h-7 text-blue-800 group-hover:animate-bounce" />
        </a>
        <a
          href="https://www.instagram.com/adarshchakraborty/"
          target="_blank"
          rel="noreferrer"
          className="group p-2 bg-gray-50 shadow-md rounded-md"
        >
          <BsInstagram className="w-7 h-7 text-blue-800 group-hover:animate-bounce" />
        </a>
        <a
          href="https://www.linkedin.com/in/adarsh-chakraborty"
          target="_blank"
          rel="noreferrer"
          className="group p-2 bg-gray-50 shadow-md rounded-md"
        >
          <BsLinkedin className="w-7 h-7 text-blue-800 group-hover:animate-bounce" />
        </a>
        <a
          href="https://www.github.com/adarsh-chakraborty"
          target="_blank"
          rel="noreferrer"
          className="group p-2 bg-gray-50 shadow-md rounded-md"
        >
          <BsGithub className="w-7 h-7 text-blue-800 group-hover:animate-bounce" />
        </a>
      </div>
      <div className="pt-8 text-base text-neutral-900 font-semibold font-Baloo">
        &copy; 2023.{' '}
        <Link to="/login" className="text-neutral-900 font-semibold underline">
          Login
        </Link>
        .
      </div>
    </footer>
  );
};

export default Footer;
