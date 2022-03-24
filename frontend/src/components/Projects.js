import React from 'react';
import Project from './Project';
import dummyProjects from '../dummyProjects.json';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className="mt-8 flex flex-col justify-center items-center">
      <div className="flex gap-2 justify-center items-baseline">
        <h1 className="text-2xl font-Baloo font-bold border-b-4  border-emerald-500">
          My Projects
        </h1>
      </div>
      <div className="mt-8 flex flex-col w-full justify-center items-center gap-6">
        {dummyProjects.map((project) => (
          <Project
            img={project.img}
            title={project.title}
            description={project.description}
            gitUrl={project.gitUrl}
            liveUrl={project.liveUrl}
            tools={project.tools}
            key={project._id}
          />
        ))}
      </div>

      <div className="group mt-2 w-1/2 px-8 flex items-center   transition-all duration-300 ease-in-out">
        <div className="bg-gray-300 h-1 w-3/6 rounded-md shadow-lg group-hover:bg-gray-500 transform group-hover:-translate-x-7 transition-all duration-300 ease-in-out"></div>
        <div className="min-w-max px-4 font-Lobster text-sm text-gray-400 group-hover:font-bold  group-hover:text-neutral-600 group-hover:underline underline-offset-4 group-hover:scale-125 transition-all duration-150 ease-in-out">
          <Link to="/projects">See all projects</Link>
        </div>
        <div className="bg-gray-300 h-1 w-3/6 rounded-md shadow-lg group-hover:bg-gray-500 group-hover:translate-x-7 transform transition-all duration-300 ease-in-out"></div>
      </div>
    </section>
  );
};

export default Projects;
