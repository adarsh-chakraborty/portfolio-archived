import React from 'react';
import Framework from './Framework';

import './Project.css';

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

        {/* //
        <div className="mt-4 flex gap-4">
          <a href={gitUrl} target="_blank">
            <BsCodeSlash className="w-11 h-11 text-emerald-800  border-2 border-emerald-500 rounded-full p-2" />
          </a>
          <a href={liveUrl} target="_blank">
            <FiExternalLink className="w-11 h-11 text-emerald-800 border-2 border-emerald-500 rounded-full p-2" />
          </a>
        </div>
      </div>
        // */}

        <div className="mt-4 flex gap-6">
          <a href={gitUrl} target="_blank" rel="noreferrer">
            <div className="group flex items-center justify-center gap-4 relative border-2 border-emerald-500  rounded-full h-11 w-11 cursor-pointer group-hover:border-0">
              <div className="absolute h-11 w-11 bg-emerald-600 border-2 border-emerald-600 rounded-full z-0 hidden group-hover:block group-hover:animate-grow"></div>
              <div className="z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-emerald-500 group-hover:text-emerald-100 transition-colors duration-200 ease-in"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
            </div>
          </a>

          <a href={liveUrl} target="_blank" rel="noreferrer">
            <div className="group flex items-center justify-center gap-4 relative border-2 border-emerald-500  rounded-full h-11 w-11 cursor-pointer group-hover:border-0">
              <div className="absolute h-11 w-11 bg-emerald-600 border-2 border-emerald-600 rounded-full z-0 hidden group-hover:block group-hover:animate-grow"></div>
              <div className="z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-emerald-500 group-hover:text-emerald-100 transition-colors duration-200 ease-in"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
