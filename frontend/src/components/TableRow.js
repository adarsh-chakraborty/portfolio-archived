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
      <td className="py-3 px-6 text-left whitespace-nowrap">{index}</td>
      <td className="py-3 px-6 text-left">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={imgSrc}
          alt={title}
        />
      </td>
      <td className="py-3 px-6 text-left">{title}</td>
      <td className="py-3 px-6 text-left max-w-sm">{description}</td>
      <td className="py-3 px-6 max-w-[2rem] text-left">
        {tools.map((tool) => (
          <div
            classNameName="text-sm font-Baloo text-emerald-600 font-semibold"
            key={tool}
          >
            {tool}
          </div>
        ))}
      </td>
      <td className="py-3 px-6 text-center">
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
      <td className="py-3 px-6 text-center">
        <div classNameName="flex gap-2">
          <Link
            to={`/project/${id}/edit`}
            classNameName="bg-blue-500 text-white py-1 px-3 rounded-full text-xs"
          >
            Edit
          </Link>
          <button
            className="bg-red-500 text-white py-1 px-3 rounded-full text-xs"
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
