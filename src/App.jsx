import { Link, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Layout1 from "./pages/Layout1";
import Layout2 from "./pages/Layout2";
import Article from "./pages/Article";

const App = () => {
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <Link to="/">Dashboard</Link>
      <Link to="/articles/foo">Article</Link>
      <Routes>
        <Route element={<Layout1 />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route element={<Layout2 />}>
          <Route path="/articles/:slug" element={<Article />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
