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
// const icons = {
//   MongoDB: (
//     <img
//       className="w-14 h-14 p-1 "
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
//     />
//   ),
//   React: (
//     <img
//       className="w-14 h-14 p-1 "
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
//     />
//   ),
//   Node: (
//     <img
//       className="w-14 h-14 p-1 "
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
//     />
//   ),
//   Express: (
//     <img
//       className="w-14 h-14 p-1 "
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
//     />
//   ),
//   SocketIO: (
//     <img
//       className="w-14 h-14 p-1 "
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
//     />
//   ),
//   NextJS: (
//     <img
//       className="w-14 h-14 p-1 "
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
//     />
//   ),
//   Git: (
//     <img
//       className="w-14 h-14 p-1 "
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
//     />
//   ),
//   Tailwindcss: (
//     <img
//       className="w-14 h-14 p-1 "
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
//     />
//   )
// };

const Tech = ({ skill }) => {
  return (
    <div className="group bg-gray-50 transition-transform duration-150 ease-out cursor-pointer w-36 h-32 overflow-hidden rounded-2xl shadow-lg p-1 relative flex flex-col items-center justify-center">
      {icons[skill]}
      <h1 className="text-emerald-900 font-bold font-Poppins mt-2">{skill}</h1>
      <div className="h-2 bg-emerald-800 w-full hidden group-hover:block absolute bottom-0 group-hover:animate-highlight"></div>
    </div>
  );
};

export default Tech;
