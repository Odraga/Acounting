import { routes } from "../../Routes/routes";

const Sidebar = () => {
  return (
    <header className="sidebar mt-2">
      <div>
        <a className="sidebar-brand" href="#">
          GABRIEL DEV
        </a>
        <ul className="sidebar-list mt-2">
          <li className="sidebar-item">
            <a href={routes.Home.path}>Home</a>
          </li>
          <li className="sidebar-item">
            <a href={routes.AboutUs.path}>About</a>
          </li>
          <li className="sidebar-item">
            <a href={routes.AboutUs.path}>Proyects</a>
          </li>
          <li className="sidebar-item">
            <a href={routes.AboutUs.path}>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Sidebar;
