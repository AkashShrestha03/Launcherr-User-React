import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

// CSS imports

import "./assets/css/bootstrap-extended.css";
import "./assets/css/icons.css";
import "./assets/css/pace.min.css";
import "./assets/css/style.css";

// JS Plugins

import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import Signin from "./pages/Sigin";

const App = () => {
  const [toggled, setToggled] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const { user } = useSelector((state) => state.user);

  return (
    <div
      className={`wrapper ${toggled ? "toggled" : ""} ${
        isSidebarHovered ? "sidebar-hovered" : ""
      } ${isToggled ? "toggled" : ""}`}
    >
      {user ? (
        <>
          <Header
            onToggle={(isToggled) => setIsToggled(isToggled)}
            toggle={isToggled}
          />
          <Sidebar
            onToggle={(toggled) => setToggled(toggled)}
            Toggled={toggled}
            mobileToggle={isToggled}
            mobile={(isToggled) => setIsToggled(isToggled)}
            onMoveEnter={(isSidebarHovered) =>
              setIsSidebarHovered(isSidebarHovered)
            }
            onMoveExit={(isSidebarHovered) =>
              setIsSidebarHovered(isSidebarHovered)
            }
          />
          <div class="page-content-wrapper">
            <main className="page-content">
              <Outlet />
            </main>
          </div>
        </>
      ) : (
        <Signin />
      )}
    </div>
  );
};

export default App;
