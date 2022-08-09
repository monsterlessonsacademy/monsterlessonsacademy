import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
