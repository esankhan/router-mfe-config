import React from "react";
import { Routes, Route, useLocation } from "react-router";
import Products from "./pages/Products";
import Orders from "./pages/Orders";

const App: React.FC = () => {
  return (
    <div>
      <p>This is Remote 2 App</p>
      <Routes>
        <Route index element={<Products />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default App;
