import "./Chart.css";

const updateChart = (values, maxValue) => {
  values.forEach((value, i) => {
    const bar = document.querySelector(`#bar-${i}`);
    const barHeight = maxValue !== 0 ? (value / maxValue) * 100 : 0;

    bar?.style.setProperty("--height", 0);
    bar?.style.setProperty("--height", `${barHeight}%`);
  });
};

const Chart = (props) => {
  updateChart(props.values, props.maxValue);
  return (
    <div
      className="chart"
      style={{ display: props.toDisplay ? "flex" : "none" }}
    >
      {props.labels.map((label, i) => {
        return (
          <div className="chart-bar" key={i} data-id={i}>
            <div className="bar" id={`bar-${i}`}></div>
            <div className="bar__label">{label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
