import classNames from "classnames";
import { Outlet } from "react-router-dom";
import "./main.css";

type MainProps = {
  isLeftSidebarCollapsed: boolean;
  screenWidth: number;
};

const Main = ({ isLeftSidebarCollapsed, screenWidth }: MainProps) => {
  const getSizeClass = () => {
    if (isLeftSidebarCollapsed) {
      return "";
    }
    return screenWidth > 768 ? "body-trimmed" : "body-md-screen";
  };
  const classes = classNames({
    body: true,
    [getSizeClass()]: true,
  });

  return (
    <div className={classes}>
      <Outlet />
    </div>
  );
};

export default Main;
