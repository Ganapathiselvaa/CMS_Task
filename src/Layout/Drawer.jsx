import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../logo.jpg";

const Drawer = ({ isOpen, toggleDrawer }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);
  const handleNavigation = (path) => {
    setActivePage(path);
    navigate(path);
  };
  const handleLogoClick = () => {
    navigate("/dashboard");
  };
  return (
    <div
      className={`fixed top-0 left-0 bg-emerald-500 text-white w-64 h-screen p-4 flex flex-col transition-transform duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button onClick={handleLogoClick}>
        <img src={logo} alt="Logo" className="logoStyle" />
      </button>
      <h1 className="text-2xl font-bold mb-6 text-center mt-4">CMS</h1>
      <nav className="flex-1">
        <div
          className={`flex items-center mb-4 menuListItem ${
            activePage === "/dashboard" ? "color1" : "color2"
          }`}
          onClick={() => handleNavigation("/dashboard")}
        >
          <span className="ml-2">Dashboard</span>
        </div>
        <div
          className={`flex items-center mb-4 menuListItem ${
            activePage === "/gps-report" ? "color1" : "color2"
          }`}
          onClick={() => handleNavigation("/gps-report")}
        >
          <span className="ml-2">GPS Report</span>
        </div>
        <div
          className={`flex items-center mb-4 menuListItem ${
            activePage === "/bbmp-staff" ? "color1" : "color2"
          }`}
          onClick={() => handleNavigation("/bbmp-staff")}
        >
          <span className="ml-2">BBMP Staff-wise</span>
        </div>
        <div
          className={`flex items-center mb-4 menuListItem ${
            activePage === "/aro-wise" ? "color1" : "color2"
          }`}
          onClick={() => handleNavigation("/aro-wise")}
        >
          <span className="ml-2">ARO-wise</span>
        </div>
      </nav>
    </div>
  );
};

export default Drawer;
