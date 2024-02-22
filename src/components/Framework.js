import React from 'react';

const Framework = ({ framework }) => {
  return (
    <li className="bg-blue-100 rounded-3xl px-2 py-2 text-sm font-semibold font-Baloo text-blue-900 cursor-pointer hover:bg-blue-200 transition-colors duration-200 ease-in">
      {framework}
    </li>
  );
};

export default Framework;
