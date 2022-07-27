import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { hasAboutPageFeature } from "./featureFlag";

const App = () => {
  const [features, setFeatures] = useState([]);
  const hasAboutPageFeature = features.includes("aboutPage");
  useEffect(() => {
    fetch("http://localhost:3001/features")
      .then((res) => res.json())
      .then((features) => {
        setFeatures(features);
      });
  }, []);
  return (
    <div className="container">
      <div>
        <Link to="/">Home</Link>
        {hasAboutPageFeature && <Link to="/about">About</Link>}
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={<About hasAboutPageFeature={hasAboutPageFeature} />}
        />
      </Routes>
    </div>
  );
};

export default App;
