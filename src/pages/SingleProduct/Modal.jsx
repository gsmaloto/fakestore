import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
const Modal = ({ setIsOpen, handleClose, image }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleClose() {
    setIsOpen(false);
  }
  return (
    <div
      className="absolute top-0 z-[100] h-screen w-screen bg-black bg-opacity-60 pt-0 grid place-content-center"
      onClick={handleClose}
    >
      <div className="relative">
        <p className="text-4xl absolute top-4 right-4">
          <MdClose className="hover:text-gray-400 cursor-pointer" />
        </p>
        <div className="bg-white mx-auto grid place-items-center">
          <img src={image} alt="" className="w-2/3" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
