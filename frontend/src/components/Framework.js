import React from 'react';

const Framework = ({ framework }) => {
  return (
    <li className="bg-emerald-100 rounded-3xl px-2 py-2 text-sm font-semibold font-Baloo text-emerald-900 cursor-pointer hover:bg-emerald-200 transition-colors duration-200 ease-in">
      {framework}
    </li>
  );
};

export default Framework;
