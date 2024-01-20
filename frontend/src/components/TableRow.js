// TableRow.jsx

import { Link } from 'react-router-dom';

const TableRow = ({
  index,
  title,
  imgSrc,
  description,
  featured,
  id,
  tools,
  deleteHandler
}) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-2 px-4 md:py-3 md:px-6 text-left whitespace-nowrap">{index}</td>
      <td className="py-2 px-4 md:py-3 md:px-6 text-left">
        <div className="flex items-center">
          <div className="relative group">
            <img
              className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover transition-transform transform group-hover:scale-110"
              src={imgSrc}
              alt={title}
            />
          </div>
          <div className="ml-2 md:ml-4">
            <p className="text-sm md:text-base font-bold">{title}</p>
            <p className="text-xs md:text-sm max-w-[10rem]">{description}</p>
          </div>
        </div>
      </td>
      <td className="py-2 px-4 md:py-3 md:px-6 text-left">
        <ul className="list-disc list-inside">
          {tools.map((tool, toolIndex) => (
            <li
              className="text-xs md:text-sm font-Baloo text-emerald-600 font-semibold mb-1"
              key={toolIndex}
            >
              {tool}
            </li>
          ))}
        </ul>
      </td>
      <td className="py-2 px-4 md:py-3 md:px-6 text-center">
        {featured ? (
          <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
            Yes
          </span>
        ) : (
          <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
            No
          </span>
        )}
      </td>
      <td className="py-2 px-4 md:py-3 md:px-6 text-center">
        <div className="flex gap-2">
          <Link
            to={`/project/${id}/edit`}
            className="bg-blue-500 text-white py-1 px-3 rounded-full text-xs md:w-auto"
          >
            Edit
          </Link>
          <button
            className="bg-red-500 text-white py-1 px-3 rounded-full text-xs md:w-auto"
            onClick={() => deleteHandler(title, id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
