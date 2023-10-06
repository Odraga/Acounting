import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./components/common/Sidebar";
import { routes } from "./Routes/routes";
import Home from "./components/Home/Home";

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []);

  return (
    <>
      {!show ? (
        <>
          <div className="d-inline-flex">
            <Sidebar />
            <div className="container-md container-lg mt-0 mb-0">
              <Component />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routes.Home.path}
          element={<RouteWithSidebar component={Home} />}
        />
        {/* <Route
          path={routes.AboutUs.path}
          element={<RouteWithSidebar element={} />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
