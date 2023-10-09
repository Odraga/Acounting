import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./components/common/Sidebar";
import { routes } from "./Routes/routes";

//PAGES
import Home from "./pages/Home";
import BankAccounts from "./pages/BankAccounts";
import Expenses from "./pages/Expenses";
import Income from "./pages/Income";
import Configuration from "./components/Configuration/Configuration";

const RouteWithSidebar = ({ element: Element, ...rest }) => {
  /* const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []); */

  return (
    <>
      <Sidebar />
      <div className="d-inline-flex container ms-sm-32">
        <Element {...rest} />
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routes.Home.path}
          element={<RouteWithSidebar element={Home} />}
        />
        <Route
          path={routes.BankAccounts.path}
          element={<RouteWithSidebar element={BankAccounts} />}
        />
        <Route
          path={routes.Expenses.path}
          element={<RouteWithSidebar element={Expenses} />}
        />
        <Route
          path={routes.Income.path}
          element={<RouteWithSidebar element={Income} />}
        />
        <Route
          path={routes.Configuration.path}
          element={<RouteWithSidebar element={Configuration} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
