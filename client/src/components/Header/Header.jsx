import React, { useState } from "react";
import "../Header/header.css";
import { NavLink } from "react-router-dom";

const isLoggedIn = false;

function Header({ setIsModalOpen }) {
  return (
    <header>
      <div>
        <nav>
        <h1 className="app-name">Minal Fantasy</h1>
          <ul className="nav-sections">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "deactive")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/play"
                className={({ isActive }) => (isActive ? "active" : "deactive")}
              >
                Play
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/leaderboard"
                className={({ isActive }) => (isActive ? "active" : "deactive")}
              >
                Leaderboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/store"
                className={({ isActive }) => (isActive ? "active" : "deactive")}
              >
                Store
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "deactive")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "deactive")}
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
              <button
                className="minecraft-btn mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                Log In
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
