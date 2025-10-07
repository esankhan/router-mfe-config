import React from "react";
import { Routes, Route, useLocation } from "react-router";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";

const App: React.FC = () => {
  return (
    <div>
      <p>This is Remote 3 App</p>
      <Routes>
        <Route index element={<Settings />} />
        <Route path="analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
};

export default App;
