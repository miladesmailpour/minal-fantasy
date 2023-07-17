import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { MUTATION_LOGIN, MUTATION_ADDUSER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

const isLoggedIn = false;

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [rememberMe, setRememberMe] = useState(false); // Add rememberMe state
    const [login, {  loginError, loginData }] = useMutation(MUTATION_LOGIN);
    const [signUp, { signUpError, signUpData }] = useMutation(MUTATION_ADDUSER);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
    };
  
    const handleLastNameChange = (e) => {
      setLastName(e.target.value);
    };

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
      };
  
    const handleRememberMeChange = (e) => {
      setRememberMe(e.target.checked);
    }; // Add handleRememberMeChange function
  
    const handleLogIn =  async (e) => {
      e.preventDefault();

    try {
        const { data } = await login({
          variables: { email, password },
        });
        console.log(data)
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
      // Reset form fields
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
      setUserName('');
      // Close the modal
      toggleModal();
    };

    const switchToLogIn = () => {
        setIsSignUp(false);
      };

      const handleSignUp = async (e) => {
        e.preventDefault();
        const input = { firstName, lastName, email, password }
        console.log(firstName,lastName,email,password)
        try {
          const { data } = await signUp({
            variables: { input },
          });
    console.log(data.createUser);
          Auth.login(data.createUser.token);
        } catch (e) {
          console.error(e);
        }
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
              
              <button
                
                className="minecraft-btn mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200"
                
                onClick={toggleModal}
              >
                Log In
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
        {isSignUp ? (
          <div>
            <h2 className="modal-title">Sign up</h2>
            <form onSubmit={handleSignUp} className="signup-form">
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
                <label htmlFor="userName" className="modal-label">
                  User Name
                </label>
                <input
                  type="text"
                  id="userName"
                  className="modal-input"
                  placeholder="Enter your desired user name"
                  value={userName}
                  onChange={handleUserNameChange}
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
              <button type="submit" className="modal-submit">
                Sign up
              </button>
            </form>
            <div className="modal-form-group modal-links">
              <button type="button" className="modal-submit" onClick={switchToLogIn}>
                go back
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="modal-title">Log in</h2>
            <form onSubmit={handleLogIn} className="login-form">
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
              <button type="submit" className="modal-submit">
                Log in
              </button>
            </form>
            <div className="modal-form-group modal-links">
              <button type="button" className="modal-submit" onClick={() => console.log('Forgot password?')}>
                4got pw?
              </button>
              <span className="modal-link-separator">//</span>
              <button
                type="button"
                className="modal-submit"
                onClick={() => {
                  setIsSignUp(true);
                }}
              >
                need account? sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
)}

      </div>
    </header>
  );
}

export default Header;
