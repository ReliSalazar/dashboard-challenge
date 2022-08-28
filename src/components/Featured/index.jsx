import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Featured.scss";

function Featured({className}) {
  return (
    <div className={`${className} featured p-5`}>
      <div className="border smooth-shadow p-3 rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="font-black text-lg text-stone-600">
            Total Revenue
          </h2>
          <FontAwesomeIcon icon={["fa", "ellipsis-vertical"]} />
        </div>

        <div className="chart">
        </div>
      </div>
    </div>
  );
}

export default Featured;
