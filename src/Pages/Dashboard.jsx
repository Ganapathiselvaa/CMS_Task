// Dashboard.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import Drawer from "../Layout/Drawer";
import Header from "../Layout/Header";
import DataTable from "../Layout/DataTable";
import { FaBars, FaTimes } from "react-icons/fa";

const Dashboard = () => {
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

      {/* Main content */}
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
          <h1 className="text-xl font-semibold mb-4">Dashboard</h1>
          <DataTable />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
