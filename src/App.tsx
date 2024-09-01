import { Fragment, useEffect, useState } from "react";
import LeftSidebar from "./left-sidebar/LeftSidebar";
import Main from "./main/Main";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Pages from "./Pages";
import Products from "./Products";

const App = () => {
  const [isLeftSidebarCollapsed, setIsLeftSidebarCollapsed] =
    useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const updateSize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        setIsLeftSidebarCollapsed(true);
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <Fragment>
      <LeftSidebar
        isLeftSidebarCollapsed={isLeftSidebarCollapsed}
        changeIsLeftSidebarCollapsed={(value) =>
          setIsLeftSidebarCollapsed(value)
        }
      />
      <Routes>
        <Route
          element={
            <Main
              isLeftSidebarCollapsed={isLeftSidebarCollapsed}
              screenWidth={screenWidth}
            />
          }
        >
          <Route path="" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
