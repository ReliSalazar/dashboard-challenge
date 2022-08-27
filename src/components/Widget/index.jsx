import "./Widget.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function Widget({kpi, className}) {
  let icon;

  switch(kpi.name) {
    case "Ventas":
      icon = "dollar-sign";
      break;
    case "Cuentas por cobrar":
      icon = "comment-dollar";
      break;
    case "Inventario":
      icon = "clipboard-check";
      break;
    default:
      icon = "dollar-sign";
      break;
  }

  return (
    <div className={`${className} widget p-5 text-stone-800`}>
      <div className="smooth-shadow p-2">
        <div className="flex justify-between items-center">
          <h2 className="font-black text-xl text-stone-400">{kpi.name}</h2>
          <div className="indicator text-emerald-600">
            <div className="flex items-center gap-2 font-black text-sm">
              <FontAwesomeIcon icon={["fa", "angle-up"]} />
              <p>+15%</p>
            </div>
          </div>
        </div>
        
        <p className="text-3xl py-5">{`$${kpi.captured}`}</p>

        <div className="flex justify-between items-center">
          <NavLink to="" className="underline font-black text-sm hover:text-purple-600 transition-color">
            See all {kpi.name}
          </NavLink>
          <div className="icon">
            <FontAwesomeIcon icon={["fa", icon]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widget;
