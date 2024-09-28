// Header.js
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

const Header = ({ handleUserNavigation, handleLogout }) => {
  return (
    <header className="flex justify-between items-center bg-white p-4 shadow">
      {/* <h1 className="text-xl font-semibold titleStyle">Dashboard</h1> */}
      <div className="ml-auto flex items-center space-x-4">
        <button
          onClick={handleUserNavigation} // Use this function for navigation
          className=""
        >
          <img
            src="./Profile.png"
            alt="User Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-300"
          />
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white w-10 h-10 rounded-full border-2 iconLogout"
        >
          <FaSignOutAlt className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
};

export default Header;
