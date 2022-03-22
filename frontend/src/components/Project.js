import React from 'react';
import Framework from './Framework';

const Project = ({ title, description, frameworks = [] }) => {
  return (
    <div className="w-80 flex flex-col items-center justify-center border border-emerald-700 rounded-md p-2 m-2">
      <h1 className="text-2xl  font-extrabold text-emerald-900">{title}</h1>
      <p className=" mx-2 pt-2 text-sm">{description}</p>
      {frameworks.length > 0 && <div>Tools and frameworks used -</div>}
      <ul>
        {frameworks.map((item) => (
          <Framework framework={item} />
        ))}
      </ul>
    </div>
  );
};

export default Project;
