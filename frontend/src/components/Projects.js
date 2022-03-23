import React from 'react';
import Project from './Project';
import dummyProjects from '../dummyProjects.json';

const Projects = () => {
  return (
    <section className="mt-8 flex flex-col justify-center items-center">
      <div className="flex gap-2 justify-center items-baseline">
        <h1 className="text-2xl font-Baloo border-b-4  border-emerald-500">
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
    </section>
  );
};

export default Projects;
