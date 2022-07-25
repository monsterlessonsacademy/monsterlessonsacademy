import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { hasAboutPageFeature } from "./featureFlag";

const App = () => {
  return (
    <div className="container">
      <div>
        <Link to="/">Home</Link>
        {hasAboutPageFeature && <Link to="/about">About</Link>}
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
