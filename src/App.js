import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import UserPage from "./Pages/UserPage";
import GPSReport from "./Pages/GPSReport";
import BBMPStaff from "./Pages/BBMPStaff";
import AROWise from "./Pages/AROWise";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/gps-report" element={<GPSReport />} />
        <Route path="/bbmp-staff" element={<BBMPStaff />} />
        <Route path="/aro-wise" element={<AROWise />} />
      </Routes>
    </Router>
  );
};

export default App;
