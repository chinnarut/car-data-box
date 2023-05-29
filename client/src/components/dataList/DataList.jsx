import { Link } from "react-router-dom";
import "./dataList.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import CarCard from "../carCard/CarCard";

const DataList = () => {
  const [carData, setCardata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/cars");
      setCardata(res.data);
    }

    fetchData();
  }, []);

  console.log(carData)


  return (
    <div className="dataList">
      <div className="container-list">
        <span className="data">License</span>
        <span className="data">CarType</span>
        <span className="data">Brand</span>
        <span className="data">Model</span>
        <span className="data">Year</span>
        <span className="data">Owner</span>
        <span className="data">Region</span>
        <span className="data">Choice</span>
      </div>
      {carData.map((car) => (
        <CarCard 
          license={car.license}
          brand={car.brand}
          carType={car.carType}
          model={car.model}
          owner={car.owner}
          choice={car.choice}
          region={car.region}
          year={car.year}
          id={car._id}
          key={car._id}
        />
      ))}
    </div>
  )
}

export default DataList
