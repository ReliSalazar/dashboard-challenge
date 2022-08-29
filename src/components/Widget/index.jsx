import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./Widget.scss";

function Widget({kpi, className}) {
  //set the config with defualt settings
  const [config, setConfig] = useState({
      icon: getIcon(""),
      iconColor: getColor(""),
      indicatorColor: getIndicatorColor(""),
      kpiIcon: getKpiIcon(""),
  });

  useEffect(()=>{
    /*
     * whenever the async call to the api is done,
     * and kpi is passed from the component that
     * uses this widget, it will reset the new configs
     * on the state, and it will re-render with the
     * new data.
     */
    const newConfig = {
      icon: getIcon(kpi.name),
      iconColor: getColor(kpi.name),
      indicatorColor: getIndicatorColor(kpi.goal.type),
      kpiIcon: getKpiIcon(kpi.goal.type),
    }
    setConfig(newConfig);
  },[kpi]);

  return (
    <div className={`${className} widget py-2 px-5 text-stone-800`}>
      <div className={`
        smooth-shadow-sm p-3 rounded-lg h-full
        flex flex-col justify-between
      `}>
        <div className="flex justify-between items-center">
          <h2 className="font-black text-lg text-stone-600">
            { kpi.name }
          </h2>
          <div
            className={`
              ${config.indicatorColor}
              indicator
            `}
          >
            <div className="flex items-center gap-2 font-black text-sm">
              <FontAwesomeIcon icon={["fa", config.kpiIcon]} />
              {/*
                this section is just an example for visual proposes,
                this way to set the % isn't correct, it will need a new
                function to process this data, and an evaluation to change
                the widget on a range type kpi.
              */}
              <p>
                {(kpi.goal.type === "Max" ? "+" : "-") + "15%"}
              </p>
            </div>
          </div>
        </div>
        
        <p className="text-3xl py-5">
          { `$${kpi.captured}` }
        </p>

        <div className="flex justify-between items-center">
          <NavLink to=""
            className={`
              underline font-black text-sm
              transition-color hover:text-purple-600
          `}>
            See all {kpi.name}
          </NavLink>

          <div className={`
            ${config.iconColor}
            h-8 w-8 rounded-lg
            flex justify-center items-center
            text-stone-100
          `}>
            <FontAwesomeIcon icon={["fa", config.icon]} />
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
      return "bg-green-600";
    case "Cuentas por cobrar":
      return "bg-purple-600";
    case "Inventario":
      return "bg-amber-600";
    default:
      return "bg-stone-400";
  }
}

function getIndicatorColor(type) {
  switch(type) {
    case "Max":
      return "text-green-600";
    case "Min":
      return "text-red-600";
    default:
      return "text-stone-400";
  }
}

function getKpiIcon(type) {
  switch(type) {
    case "Max":
      return "angle-up";
    case "Min":
      return "angle-down";
    default:
      return "angle-up";
  }
}

export default Widget;
