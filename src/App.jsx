import { Link, Route, Routes } from "react-router-dom";
import Protected from "./Protected";
import Dashboard from "./Dashboard";
import Auth from "./Auth";

const App = () => {
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <Link to="/">Dashboard</Link>
      <Link to="/protected">Protected</Link>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/protected"
          element={
            <Auth>
              <Protected />
            </Auth>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
