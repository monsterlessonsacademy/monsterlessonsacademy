import { Outlet } from "react-router-dom";
import "./main.css";
import classNames from "classnames";

type MainProps = {
  isLeftSidebarCollapsed: boolean;
  screenWidth: number;
};

const Main = ({ isLeftSidebarCollapsed, screenWidth }: MainProps) => {
  const classes = classNames({
    body: true,
    "body-trimmed": !isLeftSidebarCollapsed && screenWidth > 768,
  });
  return (
    <div className={classes}>
      <Outlet />
    </div>
  );
};

export default Main;
