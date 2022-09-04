import "./App.css";

import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import CurrentEmployees from "./pages/CurrentEmployees";

export const LocationDisplay = () => {
  const location = useLocation();
  console.log(location.pathname);

  return <div data-testid="location-display">{location.pathname}</div>;
};

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/current-employees" element={<CurrentEmployees />} />
    </Routes>
    <LocationDisplay />
  </div>
);

export default App;
