import React, { useState, useEffect } from 'react';
import Project from '../components/Project';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import axios from '../api/axios';
import loadingSvg from '../components/loading.svg';
import backupAllProjects from '../data/projects.json';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('/projects');
        setProjects(res.data);
      } catch (err) {
        setProjects(backupAllProjects);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="h-full w-full flex justify-center bg-gray-100">
      <div className="w-10/12 mt-14 ">
        <div className="mt-8 flex flex-col justify-center items-center gap-6">
          <h1 className="font-Poppins w-9/12 2xl:w-7/12 2xl:pl-4 font-bold text-3xl align-start text-neutral-700">
            Projects
          </h1>
          {projects.length === 0 ? (
            <div className="flex flex-col items-center">
              <img
                src={loadingSvg}
                alt="Spinner-1s-200px"
                border="0"
                className="w-[6rem]"
              />
              <span className="font-semibold font-Poppins text-emerald-900">
                Loading Projects...
              </span>
            </div>
          ) : (
            projects.map((project) => (
              <Project
                img={project.img}
                title={project.title}
                description={project.description}
                gitUrl={project.gitUrl}
                liveUrl={project.liveUrl}
                tools={project.tools}
                key={project._id}
                full
              />
            ))
          )}
          <div className="py-8 px-4 flex items-center text-neutral-700">
            <button
              className="font-semibold font-Poppins bg-neutral-300 w-11 h-11 rounded-full flex justify-center items-center hover:bg-neutral-600 hover:text-neutral-300 transition-colors duration-300 ease-in"
              onClick={() => {
                navigate(-1);
              }}
            >
              <IoMdArrowRoundBack className="w-9 h-9" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
