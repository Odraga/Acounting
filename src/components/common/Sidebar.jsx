import { routes } from "../../Routes/routes";

const Sidebar = () => {
  return (
    <header className="d-none position-absolute d-sm-inline-flex bgc-primary vh-limited px-2 rounded-5">
      <ul className="sidebar-list ps-0 mt-1">
        <div className="sidebar-brand mx-3 my-2 line-buttom">
          <strong>ACCOUNTING</strong>
        </div>

        <li className="sidebar-item mb-1">
          <a href={routes.Home.path} className="px-2">
            Home
          </a>
        </li>
        <li className="sidebar-item mb-1">
          <a href={routes.BankAccounts.path} className="px-2">
            Cuentas Bancarias
          </a>
        </li>

        <li className="sidebar-item mb-1">
          <a href={routes.Expenses.path} className="px-2">
            Gastos
          </a>
        </li>
        <li className="sidebar-item mb-1">
          <a href={routes.BankAccounts.path} className="px-2">
            Ahorros
          </a>
        </li>
        <li className="sidebar-item mb-1">
          <a href={routes.BankAccounts.path} className="px-2">
            Cambio de Divisa
          </a>
        </li>
        <li className="sidebar-item mb-1">
          <a href={routes.Income.path} className="px-2">
            Ingresos
          </a>
        </li>
        <li className="sidebar-item mb-1">
          <a href={routes.Configuration.path} className="px-2">
            Configuracion
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Sidebar;
