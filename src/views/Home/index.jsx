import React, {useState, useEffect} from "react";
import kpisService from "../../services/kpis.js";
import "./Home.scss";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Widget from "../../components/Widget";
import Featured from "../../components/Featured";
import Chart from "../../components/Chart";
import Table from "../../components/Table";

function Home() {
  const [kpis, setKpis] = useState([
    {
      name: "Ventas",
      goal: {
        type: "Min",
        value: 12345.67,
      },
      captured: 12345.67,
    },
    {
      name: "Cuentas por cobrar",
      goal: {
        type: "Max",
        value: 12345.67,
      },
      captured: 12345.67,
    },
    {
      name: "Inventario",
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

  //useEffect(() => {
    //kpisService.getAll().then((data) => {
      //console.log(data);
      ////setKpis(data);
    //});
  //}, []);

  return (
    <div className="Home bg-stone-50 flex">
      <Sidebar className="basis-1/6" />
      <div className="content basis-5/6">
        <Navbar />
        
        <div className="homeContainer py-2 px-5">
          <div className="widgets flex mb-5">
            {
              kpis.map((kpi, idx) => {
                return (
                  <Widget kpi={kpi} className="basis-1/3" key={idx} />
                );
              })
            }
          </div>

          <div className="charts flex">
            <Featured className="basis-1/3" />
            <Chart className="basis-2/3" />
          </div>

          <div className="table-container">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

