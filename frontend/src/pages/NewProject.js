import { Link } from 'react-router-dom';

const NewProject = () => {
  return (
    <div className="h-screen w-screen bg-gray-100">
      <div className="container mx-auto">
        <div className="flex justify-around pt-8">
          <h1 className="text-4xl font-bold font-Poppins">Add New Project</h1>
          <div className="flex gap-5">
            <Link
              to="/dashboard"
              className="bg-white shadow-md hover:shadow-lg rounded-lg py-2 px-4"
            >
              Back to Dashboard
            </Link>
            <button className="bg-white shadow-md hover:shadow-lg rounded-lg py-2 px-4">
              Logout
            </button>
          </div>
        </div>

        <div class="mt-8 bg-white rounded-md shadow-md p-6 max-w-2xl mx-auto">
          <form>
            <div class="mb-4">
              <label
                for="project_title"
                class="block text-gray-700 font-medium mb-2"
              >
                Project Title
              </label>
              <input
                type="text"
                id="project_title"
                name="project_title"
                class="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div class="mb-4">
              <label
                for="project_description"
                class="block text-gray-700 font-medium mb-2"
              >
                Project Description
              </label>
              <textarea
                id="project_description"
                name="project_description"
                class="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              ></textarea>
            </div>
            <div class="mb-4">
              <label
                for="project_image"
                class="block text-gray-700 font-medium mb-2"
              >
                Project Image
              </label>
              <input
                type="text"
                id="project_image"
                name="project_image"
                class="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div class="mb-4 flex items-center">
              <label
                for="featured"
                class="block text-gray-700 font-medium mr-4"
              >
                Featured
              </label>
              <label for="toggle" class="flex items-center cursor-pointer">
                <div class="relative">
                  <input
                    type="checkbox"
                    id="toggle"
                    name="featured"
                    class="sr-only"
                  />
                  <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
                  <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                </div>
              </label>
            </div>
            <div class="mb-4">
              <label for="git_url" class="block text-gray-700 font-medium mb-2">
                Git URL
              </label>
              <input
                type="text"
                id="git_url"
                name="git_url"
                class="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div class="mb-4">
              <label
                for="live_url"
                class="block text-gray-700 font-medium mb-2"
              >
                Live URL
              </label>
              <input
                type="text"
                id="live_url"
                name="live_url"
                class="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div class="mb-4">
              <label for="tools" class="block text-gray-700 font-medium mb-2">
                Tools
              </label>
              <input
                type="text"
                id="tools"
                name="tools"
                class="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <p class="text-gray-500 text-sm mt-2">
                Enter the tools used in the project separated by commas (e.g.
                HTML, CSS, JavaScript)
              </p>
            </div>
            <div class="mt-6">
              <button
                type="submit"
                class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
