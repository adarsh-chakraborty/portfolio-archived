import React from 'react';
import Framework from './Framework';
import { BsCodeSlash } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';

const Project = ({ img, title, description, tools, gitUrl, liveUrl }) => {
  return (
    <div className="w-8/12 max-w-4xl bg-gray-50  rounded-md shadow-lg p-8 flex">
      <div className="group overflow-hidden w-[61.5rem] h-[15rem] rounded-lg shadow-md cursor-pointer relative m-auto">
        <img
          src={img}
          alt={title}
          className="group-hover:scale-110 h-full max-w-full transform  w-full transition-all duration-300 block object-cover"
        ></img>
      </div>
      <div className="mt-4 w-full flex flex-col gap-2 items-center">
        <h1 className="font-bold font-Poppins text-xl">{title}</h1>
        <p className="mt-4 mx-4 px-8 text-sm text-gray-700">{description}</p>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-2 max-w-md">
          {tools.map((item, i) => (
            <Framework framework={item} key={i} />
          ))}
        </ul>
        <div className="mt-4 flex gap-4">
          <div className="">
            <a href={gitUrl} target="_blank">
              <BsCodeSlash className="w-11 h-11 text-emerald-800  border-2 border-emerald-500 rounded-full p-2" />
            </a>
          </div>
          <a href={liveUrl} target="_blank">
            <FiExternalLink className="w-11 h-11 text-emerald-800 border-2 border-emerald-500 rounded-full p-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
