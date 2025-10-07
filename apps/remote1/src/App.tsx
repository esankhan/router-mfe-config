import React from "react";
import { Routes, Route, useLocation } from "react-router";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

const App: React.FC = () => {
  return (
    <div>
      <p>THis is q</p>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
