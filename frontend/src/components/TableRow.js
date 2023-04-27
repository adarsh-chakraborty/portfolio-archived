import { Link } from 'react-router-dom';

const TableRow = ({
  index,
  title,
  imgSrc,
  description,
  featured,
  id,
  tools
}) => {
  return (
    <tr class="border-b border-gray-200 hover:bg-gray-100">
      <td class="py-3 px-6 text-left whitespace-nowrap">{index}</td>
      <td class="py-3 px-6 text-left">
        <img
          class="h-10 w-10 rounded-full object-cover"
          src={imgSrc}
          alt={title}
        />
      </td>
      <td class="py-3 px-6 text-left">{title}</td>
      <td class="py-3 px-6 text-left max-w-sm">{description}</td>
      <td class="py-3 px-6 max-w-[2rem] text-left">
        {tools.map((tool) => (
          <div
            className="text-sm font-Baloo text-emerald-600 font-semibold"
            key={tool}
          >
            {tool}
          </div>
        ))}
      </td>
      <td class="py-3 px-6 text-center">
        {featured ? (
          <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
            Yes
          </span>
        ) : (
          <span class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
            No
          </span>
        )}
      </td>
      <td class="py-3 px-6 text-center">
        <div className="flex gap-2">
          <Link
            to={`/project/${id}/edit`}
            className="bg-blue-500 text-white py-1 px-3 rounded-full text-xs"
          >
            Edit
          </Link>
          <Link
            to={`/project/${id}/delete`}
            class="bg-red-500 text-white py-1 px-3 rounded-full text-xs"
          >
            Delete
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
