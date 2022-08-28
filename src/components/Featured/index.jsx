import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Featured.scss";

function Featured({className}) {
  const [widgets, setWidgets] = useState([
    {
      name: "Target 1",
      icon: "angle-up",
      color: "text-green-600",
      value: "$12.4k",
    },
    {
      name: "Target 2",
      icon: "angle-down",
      color: "text-red-600",
      value: "$12.4k",
    },
    {
      name: "Target 3",
      icon: "angle-up",
      color: "text-green-600",
      value: "$12.4k",
    },
  ]);

  return (
    <div className={`${className} featured py-2 px-5`}>
      <div className="border smooth-shadow-sm p-3 rounded-lg">
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-black text-lg text-stone-600">
            Total Revenue
          </h2>
          <FontAwesomeIcon icon={["fa", "ellipsis-vertical"]} />
        </div>

        <div className="content flex flex-col gap-5">
          <div className="featuredChart self-center h-32 w-32">
            <CircularProgressbar
              value={70}
              text={"70%"}
              strokeWidth={3}
            />
          </div>

          <div className="general-info flex flex-col items-center text-center gap-3">
            <h2 className="text-stone-600">
              Total sales made today
            </h2>
            <p className="text-3xl text-stone-800">{ `$${420.00}` }</p>
            <p className="text-xs text-stone-600">
              Adipisicing ut quidem dolore sunt vitae. Voluptate laudantium
            </p>

            <div className="widgets flex">
              {widgets.map((widget, idx) => {
                return (
                  <div className="basis-1/3 px-2" key={idx}>
                    <div className="p-3 flex flex-col justify-center items-center text-sm">
                      <h2 className="font-black text-stone-800 mb-2">{widget.name}</h2>
                      <div className={`${widget.color} flex gap-2 items-center`}>
                        <FontAwesomeIcon icon={["fa", [widget.icon]]} />
                        <p>{widget.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
