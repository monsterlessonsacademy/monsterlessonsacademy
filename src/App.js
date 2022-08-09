import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Layout from "./Layout";
import Protected from "./Protected";
import Article from "./Article";
import Auth from "./Auth";

const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <Link to="/">Dashboard</Link>
      <Link to="/protected">Protected</Link>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route
            path="/protected"
            element={
              <Auth>
                <Protected />
              </Auth>
            }
          />
          <Route path="*" element={<div>404</div>} />
          <Route path="/articles/:slug" element={<Article />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
