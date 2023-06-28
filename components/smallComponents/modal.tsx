import { useContext } from "react";
import React from "react";
import Contact from "./Contact";
import { ResumeContext } from "../Context/resumeContext";

const Modal = () => {
  const context = useContext(ResumeContext);
  return (
    <div className="bg-[rgba(0,0,0,0.5)] flex justify-center align-middletext-white w-[100%] h-[100%] fixed z-10">
      <div className="md:w-[60%] w-[95%] relative bg-white self-center flex justify-center rounded-lg shadow-lg p-4">
        <button
          className="absolute top-3 right-3"
          onClick={() => context.setShowModal(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <Contact />
      </div>
    </div>
  );
};

export default Modal;
