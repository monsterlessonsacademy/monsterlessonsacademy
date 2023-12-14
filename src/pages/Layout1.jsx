import { Outlet } from "react-router-dom";

const Layout1 = () => {
  return (
    <div style={{ background: "chocolate" }}>
      <h2>It's layout 1</h2>
      <Outlet />
    </div>
  );
};

export default Layout1;
