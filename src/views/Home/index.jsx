import React, {useState} from "react";
import "./Home.scss";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Widget from "../../components/Widget";

function Home() {
  const [kpis, setKpis] = useState([
    {
      name: "kpi 1",
      goal: {
        type: "Min",
        value: 12345.67,
      },
      captured: 12345.67,
    },
    {
      name: "kpi 2",
      goal: {
        type: "Max",
        value: 12345.67,
      },
      captured: 12345.67,
    },
    {
      name: "kpi 3",
      goal: {
        type: "Between",
        value: {
          min: 1234,
          max: 5678,
        },
      },
      captured: 12345.67,
    },
  ]);

  return (
    <div className="Home bg-stone-50 flex">
      <Sidebar className="basis-1/6" />
      <div className="content basis-5/6">
        <Navbar />
        
        <div className="homeContainer py-2 px-5">
          <div className="widgets flex">
          {
            kpis.map((kpi, idx) => {
              return (
                <Widget kpi={kpi} className="basis-1/3" key={idx} />
              );
            })
          }
          </div>
          <div className="border">
            <p>more content</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

