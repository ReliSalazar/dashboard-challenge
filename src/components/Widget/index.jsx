import React, {useState, useEffect} from "react";
import "./Widget.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function Widget({kpi, className}) {
  const [icon, setIcon] = useState("dollar-sign");
  const [color, setColor] = useState("bg-stone-400");

  useEffect(()=>{
    setIcon(getIcon(kpi.name));
    setColor(getColor(kpi.name));
  },[kpi]);

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
          <div
            className={`
              ${color}
              h-8 w-8 rounded-lg
              flex justify-center items-center
              text-stone-100
            `}
          >
            <FontAwesomeIcon icon={["fa", icon]} />
          </div>
        </div>
      </div>
    </div>
  );
}

function getIcon(name) {
  switch(name) {
    case "Ventas":
      return "dollar-sign";
    case "Cuentas por cobrar":
      return "comment-dollar";
    case "Inventario":
      return "clipboard-check";
    default:
      return "dollar-sign";
  }
}

function getColor(name) {
  switch(name) {
    case "Ventas":
      return "bg-amber-600";
    case "Cuentas por cobrar":
      return "bg-purple-600";
    case "Inventario":
      return "bg-green-600";
    default:
      return "bg-green-600";
  }
}

export default Widget;
