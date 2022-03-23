import React from 'react';
import Framework from './Framework';
import { BsCodeSlash } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';

const Project = ({ img, title, description, tools, gitUrl, liveUrl }) => {
  return (
    <div className="max-w-5xl bg-gray-50  rounded-md shadow-lg p-8 flex">
      <div className="overflow-hidden max-w-md h-60  rounded-lg shadow-sm">
        <img src={img} alt={title}></img>
      </div>
      <div className="mt-4 flex flex-col gap-2 items-center">
        <h1 className="font-bold font-Poppins text-xl">{title}</h1>
        <p className="mt-4 mx-2 text-sm text-gray-700">{description}</p>
        <ul className="mt-4 px-4 flex flex-wrap items-center justify-center gap-2 max-w-md">
          {tools.map((item, i) => (
            <Framework framework={item} key={i} />
          ))}
        </ul>
        <div className="mt-4 flex gap-4">
          <a href={gitUrl} target="_blank">
            <BsCodeSlash className="w-11 h-11 text-emerald-800  border-2 border-emerald-500 rounded-full p-2" />
          </a>
          <a href={liveUrl} target="_blank">
            <FiExternalLink className="w-11 h-11 text-emerald-800 border-2 border-emerald-500 rounded-full p-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
