import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const isLoggedIn = false;

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
  
    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
  
    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
    };
  
    const handleLastNameChange = (e) => {
      setLastName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleRememberMeChange = (e) => {
      setRememberMe(e.target.checked);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Remember me:", rememberMe);
      // Reset form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setRememberMe(false);
      // Close the modal
      toggleModal();
    };


  return (
    <header>
      <div>
        <h1 className="app-name">Minal Fantasy</h1>
        <nav>
          <ul className="nav-sections">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/play"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Play
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/leaderboard"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Leaderboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/store"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Store
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {isLoggedIn ? (
            <button className="minecraft-btn mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200">
              Log Out
            </button>
          ) : (
            <div>
              {/* <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="minecraft-btn mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200"
                type="button"
              >
                Sign Up
              </button>
              <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="minecraft-btn mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200"
                type="button"
              >
                Log In
              </button> */}
              
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={toggleModal}>
        Log in
      </button>

            </div>
          )}
        </nav>
        {isOpen && (
             <div className="modal-overlay">
             <div className="modal-container">
               <button className="modal-close" onClick={toggleModal}>
                 <svg
                   className="w-6 h-6"
                   fill="none"
                   stroke="currentColor"
                   viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                 </svg>
               </button>
               <div className="modal-content">
                 <h2 className="modal-title">Log in</h2>
                 <form onSubmit={handleSubmit}>
                   <div className="modal-form-group">
                     <label htmlFor="firstName" className="modal-label">
                       First Name
                     </label>
                     <input
                       type="text"
                       id="firstName"
                       className="modal-input"
                       placeholder="Enter your first name"
                       value={firstName}
                       onChange={handleFirstNameChange}
                       required
                     />
                   </div>
                   <div className="modal-form-group">
                     <label htmlFor="lastName" className="modal-label">
                       Last Name
                     </label>
                     <input
                       type="text"
                       id="lastName"
                       className="modal-input"
                       placeholder="Enter your last name"
                       value={lastName}
                       onChange={handleLastNameChange}
                       required
                     />
                   </div>
                   <div className="modal-form-group">
                     <label htmlFor="email" className="modal-label">
                       Email
                     </label>
                     <input
                       type="email"
                       id="email"
                       className="modal-input"
                       placeholder="Enter your email"
                       value={email}
                       onChange={handleEmailChange}
                       required
                     />
                   </div>
                   <div className="modal-form-group">
                     <label htmlFor="password" className="modal-label">
                       Password
                     </label>
                     <input
                       type="password"
                       id="password"
                       className="modal-input"
                       placeholder="Enter your password"
                       value={password}
                       onChange={handlePasswordChange}
                       required
                     />
                   </div>
                   <div className="modal-form-group modal-checkbox">
                     <input
                       type="checkbox"
                       id="rememberMe"
                       className="modal-checkbox-input"
                       checked={rememberMe}
                       onChange={handleRememberMeChange}
                     />
                     <label htmlFor="rememberMe" className="modal-checkbox-label">
                       Remember me
                     </label>
                   </div>
                   <div className="modal-form-group modal-links">
                     <a href="#" className="modal-link">
                       Forgot password?
                     </a>
                     <span className="modal-link-separator">|</span>
                     <a href="#" className="modal-link">
                       Don't have an account? Sign up here
                     </a>
                   </div>
                   <button type="submit" className="modal-submit">
                     Log in
                   </button>
                 </form>
               </div>
             </div>
           </div>
      )}
    
        {/* <div>
          <div
            id="authentication-modal"
            tabindex="-1"
            aria-hidden="true"
            className={`${
                toggleModal
                  ? `fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-black bg-opacity-50`
                  : `hidden`
              }`}
          >
            <div className="relative w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  onClick={showModal}
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Sign in to our platform
                  </h3>
                  <form className="space-y-6" action="#">
                    <div>
                      <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        required
                      ></input>
                    </div>
                    <div>
                      <label
                        for="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      ></input>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            required
                          ></input>
                        </div>
                        <label
                          for="remember"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                      <a
                        href="#"
                        className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                      >
                        Lost Password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Login to your account
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                      Not registered?{" "}
                      <a
                        href="#"
                        className="text-blue-700 hover:underline dark:text-blue-500"
                      >
                        Create account
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </header>
  );
}

export default Header;
