import "./Chart.scss";

function Chart({className}) {
  return (
    <div className={`${className} chart p-5`}>
      <div className="smooth-shadow p-2 rounded-lg">
        <p>chart component</p>
      </div>
    </div>
  )
}

export default Chart;
