import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "./LoginPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
};

export default App;
