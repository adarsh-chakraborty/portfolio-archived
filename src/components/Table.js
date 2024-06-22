import TableRow from './TableRow';
import { useEffect, useState, useContext } from 'react';
import AppContext from '../context/app-context';
import axios from '../api/axios';

const fetchProjects = async () => {
  const res = await axios.get('/projects');
  return res.data;
};

const Table = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const ctx = useContext(AppContext);

  const deleteHandler = async (title, projectId) => {
    if (window.confirm(`Are you sure you want to delete ${title}?`)) {
      try {
        const res = await axios.delete(`/projects/${projectId}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ctx.token}`
          }
        });
        const updatedProjects = await fetchProjects();
        setFeaturedProjects(updatedProjects);
      } catch (err) {
        if (err?.response?.data?.error) {
          alert(err.response.data.error);
        }
      }
    }
  };

  useEffect(() => {
    let isMounted = true;
    fetchProjects().then((data) => {
      if (isMounted) {
        setFeaturedProjects(data);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="bg-gray-900 shadow-md rounded my-6">
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-800 text-gray-400 uppercase text-sm leading-normal">
            <th className="py-3 px-4 md:px-6 text-left">S.No</th>
            <th className="py-3 px-4 md:px-6 text-left">Project</th>
            <th className="py-3 px-4 md:px-6 text-left">Tools</th>
            <th className="py-3 px-4 md:px-6 text-center">Featured</th>
            <th className="py-3 px-4 md:px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-300 text-sm font-light">
          {featuredProjects.map((project, index) => (
            <TableRow
              key={project._id}
              index={index + 1}
              title={project.title}
              imgSrc={project.img}
              description={project.description}
              featured={project.featured}
              id={project._id}
              tools={project.tools}
              deleteHandler={deleteHandler}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
