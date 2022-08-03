import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import Protected from "./Protected";
import Public from "./Public";
import Auth from "./Auth";

const App = () => {
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <Link to="/">Public</Link>
      <Link to="/protected">Protected</Link>
      <Routes>
        <Route path="/" element={<Public />} />
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
