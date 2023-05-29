import "./package.scss";
import { Chart } from "react-google-charts";

const Package = () => {
  const data = [
    ["Element", "Package", { role: "style" }],
    ["Pro", 8.94, "gold"], // RGB value
    ["Starter", 10.49, "cyan"] // English color name
  ];

  const options = {
    title: "Partner by Package"
  };

  return (
    <div className="package">
      <Chart
        className="chart" 
        chartType="ColumnChart" 
        width="100%" 
        height="400px" 
        data={data} 
        options={options}
      />
    </div>
  )
}

export default Package
