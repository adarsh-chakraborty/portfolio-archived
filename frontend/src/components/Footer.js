import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="mt-16 pt-8   w-full bg-gray-200 shadow-inner flex flex-col items-center justify-center">
      <h1 className="font-semibold text-2xl font-Poppins">
        Adarsh Chakraborty
      </h1>
      <a href="mailto://adarshc@duck.com" className="font-Poppins">
        adarshc@duck.com
      </a>
      <div className="mt-2 flex gap-2">
        <a
          href="https://www.facebook.com/adarshwastaken/"
          target="_blank"
          rel="noreferrer"
          className="group p-2"
        >
          <BsFacebook className="w-7 h-7 text-neutral-800 group-hover:animate-bounce" />
        </a>
        <a
          href="https://www.instagram.com/adarshchakraborty/"
          target="_blank"
          rel="noreferrer"
          className="group p-2"
        >
          <BsInstagram className="w-7 h-7 text-neutral-800 group-hover:animate-bounce" />
        </a>
        <a
          href="https://www.linkedin.com/in/adarsh-chakraborty"
          target="_blank"
          rel="noreferrer"
          className="group p-2"
        >
          <BsLinkedin className="w-7 h-7 text-neutral-800 group-hover:animate-bounce" />
        </a>
        <a
          href="https://www.github.com/adarsh-chakraborty"
          target="_blank"
          rel="noreferrer"
          className="group p-2"
        >
          <BsGithub className="w-7 h-7 text-neutral-800 group-hover:animate-bounce" />
        </a>
      </div>
      <div className="pt-8 text-sm text-neutral-900 font-semibold font-Baloo">
        &copy; 2021. Login
      </div>
    </footer>
  );
};

export default Footer;
