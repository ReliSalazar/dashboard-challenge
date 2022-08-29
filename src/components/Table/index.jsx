import React, {useState, useEffect} from "react";
import "./Table.scss";

function Table() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const newData = [
      {
        ID: Math.floor(100000 + Math.random() * 900000),
        name: "product 1",
        price: 1234.5,
        total: 456,
        date: getRandomDate(new Date(2022, 0, 1), new Date()),
        paymentMethod: "Cash or delivery",
        status: "approved",
      },
      {
        ID: Math.floor(100000 + Math.random() * 900000),
        name: "product 2",
        price: 1234.5,
        total: 123,
        date: getRandomDate(new Date(2022, 0, 1), new Date()),
        paymentMethod: "Online payment",
        status: "pending",
      },
      {
        ID: Math.floor(100000 + Math.random() * 900000),
        name: "product 3",
        price: 1234.5,
        total: 35,
        date: getRandomDate(new Date(2022, 0, 1), new Date()),
        paymentMethod: "Cash or delivery",
        status: "pending",
      },
      {
        ID: Math.floor(100000 + Math.random() * 900000),
        name: "product 4",
        price: 1234.5,
        total: 420,
        date: getRandomDate(new Date(2022, 0, 1), new Date()),
        paymentMethod: "Online",
        status: "approved",
      },
      {
        ID: Math.floor(100000 + Math.random() * 900000),
        name: "product 5",
        price: 1234.5,
        total: 678,
        date: getRandomDate(new Date(2022, 0, 1), new Date()),
        paymentMethod: "Online",
        status: "pending",
      },
    ];
    setData(newData);
  },[]);

  return (
    <div className="py-2 px-5">
      <div className="smooth-shadow-sm p-3">
        <h2 className="font-black text-lg text-stone-600">
          Latest Transactions
        </h2>
        <div className="overflow-x-auto py-5">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="text-start border-b p-2">
                  ID
                </th>
                <th className="text-start border-b p-2">
                  Product
                </th>
                <th className="text-start border-b p-2">
                  Price
                </th>
                <th className="text-start border-b p-2">
                  Total
                </th>
                <th className="text-start border-b p-2">
                  Total
                  Date
                </th>
                <th className="text-start border-b p-2">
                  Payment method
                </th>
                <th className="text-start border-b p-2">
                  status
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((product, i)=> {
                const values = [
                  product.ID,
                  product.name,
                  product.price,
                  product.total,
                  getFormatDate(product.date),
                  product.paymentMethod,
                  product.status,
                ]
                return (
                  <tr key={product.ID}>
                    {values.map((value, idx) => {
                      return (
                        <td key={idx} className={`
                          ${i%2 === 0 ? "bg-stone-200" : ""}
                          p-2
                        `}>
                          <span className={`
                              ${value === "approved" ? "bg-emerald-300 py-1 px-2" : ""}
                              ${value === "pending" ? "bg-amber-300 py-1 px-2" : ""}
                              rounded-lg
                          `}>
                            {value}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function getRandomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getFormatDate(d, getYear=false) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const day = d.getDate();
  const month = monthNames[d.getMonth()];
  const year = d.getFullYear().toString().slice(-2);

  if(getYear) {
    return `${day} ${month} ${year}`;
  }
    return `${day} ${month}`;
}

export default Table;
