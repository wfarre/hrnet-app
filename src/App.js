import "./assets/App.css";

import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import CurrentEmployees from "./pages/CurrentEmployees";

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/current-employees" element={<CurrentEmployees />} />
    </Routes>
  </div>
);

export default App;
