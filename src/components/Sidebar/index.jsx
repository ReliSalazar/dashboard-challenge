import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function Sidebar({className}) {
  if(window.innerWidth > 640) {
    return (
      <div className={`sidebar border-r min-h-screen bg-stone-100 text-stone-800 ${className}`}>
        <div className="header h-14 flex justify-center items-center">
          <span className="logo text-purple-600 font-black text-xl sm:text-2xl">Logo</span>
        </div>
        <hr />
        <div className="content">
          <div className="list flex flex-col">
            <NavLink to="/" className="transition-bg hover:bg-stone-200 p-2">
              <span className="mr-2 text-purple-600">
                <FontAwesomeIcon icon={["fa", "chart-line"]} />
              </span>
              Gerency
            </NavLink>
            <NavLink to="/" className="transition-bg hover:bg-stone-200 p-2">
              <span className="mr-2 text-purple-600">
                <FontAwesomeIcon icon={["fa", "users"]} />
              </span>
              Team
            </NavLink>
            <NavLink to="/" className="transition-bg hover:bg-stone-200 p-2">
              <span className="mr-2 text-purple-600">
                <FontAwesomeIcon icon={["fa", "gauge-high"]} />
              </span>
              KPI's
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default Sidebar;
