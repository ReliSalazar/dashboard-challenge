import React, {useState, useEffect} from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./Chart.scss";

function Chart({className}) {
  const [data, setData] = useState([]);

  useEffect(()=>{
    //Call to the api here
    const newData = [
      {name: "January", Total: 1200},
      {name: "February", Total: 2100},
      {name: "March", Total: 800},
      {name: "April", Total: 1600},
      {name: "May", Total: 900},
      {name: "June", Total: 1700},
    ];
    setData(newData);
  },[])

  return (
    <div className={`${className} chart py-2 px-5`}>
      <div className="smooth-shadow-sm p-3 rounded-lg h-full">
        <h2 className="font-black text-lg text-stone-600 mb-5">
          Last 6 months (revenue)
        </h2>

        <div className="flex justify-center items-center">
          <ResponsiveContainer width="100%" aspect={2/1}>
            <AreaChart width={650} height={250} data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Chart;
