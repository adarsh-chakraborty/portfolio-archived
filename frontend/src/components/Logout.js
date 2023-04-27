import { useState } from 'react';

function Logout() {
  const [showModal, setShowModal] = useState(false);

  function handleLogout() {
    // perform logout logic here
  }

  return (
    <div className="max-w-md mx-auto">
      <button
        type="button"
        className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={() => setShowModal(true)}
      >
        Logout
      </button>
      {showModal && (
        <div className="fixed inset-0 z-100 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className="bg-white rounded-md shadow-md p-6">
              <p className="text-lg font-semibold mb-4">
                Are you sure you want to logout?
              </p>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md shadow-md hover:bg-gray-400 mr-2"
                  onClick={() => setShowModal(false)}
                >
                  No
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600"
                  onClick={handleLogout}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Logout;
