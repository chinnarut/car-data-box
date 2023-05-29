import "./region.scss";
import { Chart } from "react-google-charts";

const Region = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Central", 110],
    ["Northern", 50],
    ["Northeastern", 70],
    ["Eastern", 40],
    ["Western", 30],
    ["Southern", 20],
  ];

  const options = {
    title: "Partner by Region",
    is3D: true,
  };

  return (
    <div className="region">
      <Chart 
        className="chart"
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  )
}

export default Region
