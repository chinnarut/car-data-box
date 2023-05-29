import "./widget.scss";
import GarageOutlinedIcon from '@mui/icons-material/GarageOutlined';
import ElectricCarOutlinedIcon from '@mui/icons-material/ElectricCarOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import ElectricScooterOutlinedIcon from '@mui/icons-material/ElectricScooterOutlined';
import { useEffect, useState } from "react";
import axios from "axios";

const Widget = ({ type }) => {
  const [carData, setCarData] = useState(null);
  let data;

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/cars");
      setCarData(res?.data);
    }

    getData();
  }, []);

  

  switch(type) {
    case "cars":
        data = {
          title: "ALL CARS",
          link: "See all cars",
          count: carData?.length,
          icon: (
            <GarageOutlinedIcon 
              className="icon"  
              style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            />
          )
        };
        break;
    case "car":
        data = {
          title: "CAR",
          link: "See cars",
          icon: (
            <DirectionsCarFilledOutlinedIcon 
              className="icon" 
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
              }}
            />
          )
        };
        break;
    case "electric":
        data = {
          title: "ELECTRIC CAR",
          link: "See electric cars",
          icon: (
            <ElectricCarOutlinedIcon 
              className="icon" 
              style={{
                backgroundColor: "rgba(0, 128, 0, 0.2)", 
                color: "green"
              }}
            />
          )
        };
        break;
    case "scooter":
        data = {
          title: "SCOOTER",
          link: "See scooters",
          icon: (
            <ElectricScooterOutlinedIcon 
              className="icon" 
              style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple"
              }}
            />
          )
        };
        break;
    default:
        break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.count}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
