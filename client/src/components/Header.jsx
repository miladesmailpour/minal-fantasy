import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css"

const isLoggedIn = false;

function Header() {
  return (
    <header>
      <div>
        <h1 className="app-name">Minal Fantasy</h1>
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
                // to="/resume"
                to="/leaderboard"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Leaderboard
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
            <button className="minecraft-btn mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200">Log Out</button>
          ) : (
            <div>
              <button className="minecraft-btn mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200">Sign Up</button>
              <button className="minecraft-btn mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200">Log In</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
