import React from 'react';
import Project from './Project';

const Projects = () => {
  return (
    <section className="mt-8 flex flex-col justify-center items-center bg-red-100">
      <div className="flex gap-2 justify-center items-baseline">
        <h1 className="text-3xl font-Baloo border-b-4  border-emerald-500">
          My Projects
        </h1>
      </div>
      <div className="mt-2 grid grid-cols-2">
        <Project
          title="Quiz App"
          description="A Simple Quiz app"
          frameworks={['nodeJs', 'Heroku']}
        />
        <Project
          title="Quiz App"
          description="A Simple Quiz app that does"
          frameworks={['nodeJs', 'Heroku']}
        />
      </div>
    </section>
  );
};

export default Projects;
