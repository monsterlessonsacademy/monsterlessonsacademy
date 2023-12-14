import { Outlet } from "react-router-dom";

const Layout2 = () => {
  return (
    <div style={{ background: "teal" }}>
      <h2>It's layout 2</h2>
      <Outlet />
    </div>
  );
};

export default Layout2;
