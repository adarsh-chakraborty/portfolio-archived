import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import Navbar from './Navbar';
import { isMobile } from 'react-device-detect';
import Contact from '../pages/Contact';
import Modal from './Modal';

const Hero = () => {
  const [showCatGif, setShowCatGif] = useState(false);
  const [catPosition, setCatPosition] = useState({ x: 0, y: 0 });


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleHoverText = () => {
    if (!isMobile) {
      setShowCatGif(true);
    }
  };

  const handleLeaveText = () => {
    setShowCatGif(false);
  };

  const letsTalkHandler = () => {
    ReactGA.event({
      category: 'Contact',
      action: "Clicked Let's Talk Button",
      label: 'contact',
    });
    handleOpenModal();
  }

  

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (showCatGif) {
        const offsetX = 30; // Adjust this value to your preference
        const offsetY = -30; // Adjust this value to your preference
        setCatPosition({
          x: event.clientX + offsetX,
          y: event.clientY + offsetY,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [showCatGif]);

  return (
    <div className="relative bg-[#f5f6f7] bg-bbblurry bg-cover font-Poppins border-t-[10px] border-[#0e59b4]">
      <Navbar />

      <div className="h-full md:h-screen mx-auto flex flex-col items-center 2xl:gap-4">
        <section
          className="text-left border-b-4 border-[#306cc4] mt-28 2xl:mt-40 cursor-pointer relative"
          onMouseEnter={handleHoverText}
          onMouseLeave={handleLeaveText}
        >
          <div className="text-3xl md:text-[4rem] font-extrabold text-neutral-900">
            Hi. I am
          </div>
          <div className="text-[#0e59b4] font-bold text-[2rem] md:text-[4rem] relative z-10">
            Adarsh Chakraborty
          </div>

          {showCatGif && (
            <div
              className="fixed"
              style={{
                left: catPosition.x,
                top: catPosition.y,
                transform: 'translate(-50%, -50%)',
                zIndex: 9999,
                pointerEvents: 'none',
              }}
            >
              <img
                src="https://fireship.io/img/cat.gif"
                alt="Cat Gif"
                width="125"
              />
            </div>
          )}
        </section>

        <div className="mt-[2.25rem] text-lg text-center px-4">
          I am a full stack developer with experience in building web
          applications {`</>`}.
        </div>
        <div className="mt-14 mb-12">
          <button className="px-6 py-3 bg-[#1270e3] hover:bg-blue-700 transition-colors ease-out text-blue-50 rounded-[5px]" onClick={letsTalkHandler}>
            Let's Talk
          </button>
          
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Contact onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default Hero;
