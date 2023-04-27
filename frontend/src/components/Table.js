import TableRow from './TableRow';
import { useEffect, useState } from 'react';

const Table = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    let isMounted = true;
    fetch('http://localhost:5000/projects')
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setFeaturedProjects(data);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div class="bg-white shadow-md rounded my-6">
      <table class="min-w-max w-full table-auto">
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th class="py-3 px-6 text-left">S.No</th>
            <th class="py-3 px-6 text-left">Image</th>
            <th class="py-3 px-6 text-left">Project Title</th>
            <th class="py-3 px-6 text-left">Description</th>
            <th class="py-3 px-6 text-center">Tools</th>
            <th class="py-3 px-6 text-center">Featured</th>
            <th class="py-3 px-6 text-center">Edit / Delete</th>
          </tr>
        </thead>
        <tbody class="text-gray-600 text-sm font-light">
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
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
