import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
const About = React.lazy(() => import("./About"));

const App = () => {
  return (
    <div className="container">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <About />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
