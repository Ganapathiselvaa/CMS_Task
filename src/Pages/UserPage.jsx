import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import Drawer from "../Layout/Drawer";
import Header from "../Layout/Header";
import { FaBars, FaTimes } from "react-icons/fa";

const UserPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  // Toggle drawer open/close
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleUserNavigation = () => {
    navigate("/user");
  };

  const handleLogout = () => {
    toast((t) => (
      <div className="text-center">
        <p className="mb-4">Are you sure you want to logout?</p>
        <button
          onClick={() => {
            signOut(auth)
              .then(() => {
                toast.success("Logged out successfully!");
                navigate("/");
                window.location.reload();
              })
              .catch((error) => {
                console.error("Error during logout:", error);
                toast.error("Failed to log out. Please try again.");
              });
            toast.dismiss(t.id);
          }}
          className="bg-red-600 text-white px-2 py-1 rounded"
        >
          Yes
        </button>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="bg-gray-300 text-black px-2 py-1 rounded ml-2"
        >
          No
        </button>
      </div>
    ));
  };

  return (
    <div className="flex h-screen">
      {/* Toggle Button */}
      <button
        onClick={toggleDrawer}
        className="bg-blue-500 text-white px-4 py-2 rounded-md m-4 openCloseBtn"
      >
        {isOpen ? (
          <FaTimes className="h-4 w-4" />
        ) : (
          <FaBars className="h-4 w-4" />
        )}
      </button>

      {/* Drawer Component */}
      <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />

      {/* Main Content */}
      <div
        className={`flex flex-col flex-1 bg-gray-100 transition-all duration-300 ease-in-out ${
          isOpen ? "pl-64" : "pl-0"
        }`}
      >
        {/* Header Component */}
        <Header
          handleUserNavigation={handleUserNavigation}
          handleLogout={handleLogout}
        />

        <main className="flex-1 p-4 overflow-auto">
          <Toaster toastOptions={{ duration: 4000 }} />
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            {/* User Profile Photo */}
            <img
              src="./Profile.png" // Replace with the actual path to the profile image
              alt="User Profile"
              className="w-24 h-24 rounded-full mb-4 border-2 border-gray-300 p-2" // Adjust size and styling as needed
            />
            <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
            <div className="mb-4 flex justify-between">
              <label className="block text-sm font-medium mr-4">
                User Name:{" "}
              </label>
              <p className="text-gray-700 text-sm font-medium"> John Doe</p>
            </div>

            <div className="mb-4 flex justify-between">
              <label className="block text-sm font-medium mr-4">Email: </label>
              <p className="text-gray-700 text-sm font-medium">
                {" "}
                johndoe@example.com
              </p>
            </div>

            <div className="mb-4 flex justify-between">
              <label className="block text-sm font-medium mr-4">Zone: </label>
              <p className="text-gray-700 text-sm font-medium"> Zone A</p>
            </div>

            <div className="mb-4 flex justify-between">
              <label className="block text-sm font-medium mr-4">Ward: </label>
              <p className="text-gray-700 text-sm font-medium"> Ward 1</p>
            </div>

            <div className="mb-4 flex justify-between">
              <label className="block text-sm font-medium mr-4">Role: </label>
              <p className="text-gray-700 text-sm font-medium"> BBMP Staff</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserPage;
