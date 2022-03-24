import React from 'react';
import { SiMongodb } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiSocketdotio } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';

const classes = 'w-14 h-14 p-1 text-emerald-900 bg-emerald-100 rounded-full';
const icons = {
  MongoDB: <SiMongodb className={`${classes}`} />,
  React: <FaReact className={`${classes}`} />,
  Node: <FaNodeJs className={`${classes}`} />,
  Express: <SiExpress className={`${classes}`} />,
  SocketIO: <SiSocketdotio className={`${classes}`} />,
  NextJS: <SiNextdotjs className={`${classes}`} />,
  Git: <BsGithub className={`${classes}`} />,
  Tailwindcss: <SiTailwindcss className={`${classes}`} />
};

const Tech = ({ skill }) => {
  return (
    <div className="group bg-gray-50 transition-transform duration-150 ease-out cursor-pointer w-36 h-32 overflow-hidden rounded-2xl shadow-lg p-1 relative flex flex-col items-center justify-center">
      <h1 className="text-emerald-800 font-bold text-lg ">{skill}</h1>
      {icons[skill]}
      <div className="h-2 bg-emerald-800 w-full hidden group-hover:block absolute bottom-0 group-hover:animate-highlight"></div>
    </div>
  );
};

export default Tech;
