import { Navigate } from "react-router-dom";

const About = ({ hasAboutPageFeature }) => {
  if (!hasAboutPageFeature) {
    return <Navigate to="/" />;
  }
  return <h1>About</h1>;
};

export default About;
