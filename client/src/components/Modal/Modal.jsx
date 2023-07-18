import React, { useState } from "react";
import "./Modal.css";
import LogIn from "./LogIn";
import Rules from "./Rules";
import SignUp from "./SignUp";

export default function Modal({
  isModalOpen,
  setIsModalOpen,
  modalContent,
  setModalContent,
}) {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    email: "",
  });

  if (!isModalOpen) return null;

  return (
    <div className="modalShade">
      <div className="modalWindow">
        <div className="modal-content">
          <button
            className="modal-close"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {modalContent === "signup" && (
            <SignUp
              formValues={formValues}
              setFormValues={setFormValues}
              setModalContent={setModalContent}
              setIsModalOpen={setIsModalOpen}
            />
          )}
          {modalContent === "login" && (
            <LogIn
              formValues={formValues}
              setFormValues={setFormValues}
              setModalContent={setModalContent}
              setIsModalOpen={setIsModalOpen}
            />
          )}
          {modalContent === "rules" && (<Rules />)}
        </div>
      </div>
    </div>
  );
}
