import { createPortal } from 'react-dom';
const Modal = ({ isOpen, onClose, children }) => {
  const handleBackdropClick = (event) => {
    console.log(event.target);
    if (event.target.id === 'backdrop') {
      onClose();
    }
  };
  const modal = (
    <>
      <div
        className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
          isOpen ? 'z-50 opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
      <div
        className={`fixed inset-0 overflow-y-auto transition-all ${
          isOpen ? 'z-50' : '-translate-y-full'
        }`}
      >
        <div
          className="flex items-center justify-center min-h-screen"
          id="backdrop"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-lg w-full max-w-md mx-4 ">
            {children}
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(modal, document.body);
};

export default Modal;
