import Contact from '../pages/Contact';
import { useState } from 'react';
import Modal from './Modal';
import ReactGA from "react-ga";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    ReactGA.event({
      category: 'User Interaction',
      action: 'Clicked Contact on Navbar',
      label: 'navbar contact button',
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="w-full flex justify-around font-Poppins mt-4">
      <div className="text-5xl text-blue-800 font-Oleo">A</div>

      <ul className="flex gap-4 ml-14 text-neutral-900 ">
        <li
          className="group cursor-pointer hover:text-sky-600 transition duration-300"
          onClick={() => {
            document
              .getElementById('projects')
              .scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Projects
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </li>

        <li
          className="group cursor-pointer hover:text-sky-600 transition duration-300"
          onClick={() => {
            document
              .getElementById('tech')
              .scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Tech Stack
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </li>
        <li
          className="group cursor-pointer hover:text-sky-600 transition duration-300"
          onClick={handleOpenModal}
        >
          Contact
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </li>
      </ul>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Contact onClose={handleCloseModal} />
      </Modal>
    </nav>
  );
};

export default Navbar;
