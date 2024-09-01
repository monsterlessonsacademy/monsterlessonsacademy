import classNames from "classnames";
import { Fragment } from "react";
import "./left-sidebar.css";
import { Link } from "react-router-dom";

type LeftSidebarProps = {
  isLeftSidebarCollapsed: boolean;
  changeIsLeftSidebarCollapsed: (isSidebarCollapsed: boolean) => void;
};
const LeftSidebar = ({
  isLeftSidebarCollapsed,
  changeIsLeftSidebarCollapsed,
}: LeftSidebarProps) => {
  const items = [
    {
      routeLink: "",
      icon: "fal fa-home",
      label: "Dashboard",
    },
    {
      routeLink: "products",
      icon: "fal fa-box-open",
      label: "Products",
    },
    {
      routeLink: "pages",
      icon: "fal fa-file",
      label: "Pages",
    },
    {
      routeLink: "settings",
      icon: "fal fa-cog",
      label: "Settings",
    },
  ];
  const sidebarClasses = classNames({
    sidenav: true,
    "sidenav-collapsed": isLeftSidebarCollapsed,
  });
  const toggleCollapse = (): void => {
    changeIsLeftSidebarCollapsed(!isLeftSidebarCollapsed);
  };

  const closeSidenav = (): void => {
    changeIsLeftSidebarCollapsed(true);
  };
  return (
    <div className={sidebarClasses}>
      <div className="logo-container">
        <button className="logo" onClick={toggleCollapse}>
          <i className="fal fa-bars"></i>
        </button>
        {!isLeftSidebarCollapsed && (
          <Fragment>
            <div className="logo-text">App</div>
            <button className="btn-close" onClick={closeSidenav}>
              <i className="fal fa-times close-icon"></i>
            </button>
          </Fragment>
        )}
      </div>
      <div className="sidenav-nav">
        {items.map((item) => (
          <li key={item.label} className="sidenav-nav-item">
            <Link className="sidenav-nav-link" to={item.routeLink}>
              <i
                className={classNames({
                  "sidenav-link-icon": true,
                  [item.icon]: true,
                })}
              ></i>
              {!isLeftSidebarCollapsed && (
                <span className="sidenav-link-text">{item.label}</span>
              )}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
