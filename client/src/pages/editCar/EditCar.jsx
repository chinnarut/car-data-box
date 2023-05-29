import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./editCar.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const EditCar = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const [car, setCar] = useState({});
  const [license, setLicense] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [owner, setOwner] = useState("");
  const [region, setRegion] = useState("central");
  const [choice, setChoice] = useState("pro");
  const [carType, setCarType] = useState("car");
  console.log(car?._id)


  useEffect(() => {
    const getCar = async () => {
      try {
        const res = await axios.get(`/cars/find/${id}`);
        setCar(res?.data);
      } catch(err) {
        console.log(err);
      }
    };

    getCar()
  }, [id]);

  const handleEditCar = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/cars/${car?._id}`, {
        carType,
        license,
        brand,
        model,
        year,
        owner,
        region,
        choice
      });

      setLicense("");
      setBrand("");
      setModel("");
      setYear("");
      setOwner("");
      setRegion("central");
      setChoice("pro");
      setCarType("car");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="editCar">
      <Sidebar />
      <div className="editCarContainer">
        <Navbar />
        <div className="top">
          <h1>Edit Car</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <form>
              <div className="formInput">
                <label>License</label>
                <input
                  type="text"
                  value={license}
                  onChange={(e) => setLicense(e.target.value)}
                  placeholder={car?.license} />
              </div>
              <div className="formInput">
                <label>Brand</label>
                <input
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder={car?.brand}
                />
              </div>
              <div className="formInput">
                <label>Model</label>
                <input
                  type="text"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder={car?.model}
                />
              </div>
              <div className="formInput">
                <label>Year</label>
                <input
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder={car?.year}
                />
              </div>
              <div className="formInput">
                <label>Owner</label>
                <input
                  type="text"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                  placeholder={car?.owner}
                />
              </div>
              <div className="formInput">
                <label>Car Type</label>
                <select
                  onChange={(e) => setCarType(e.target.value)}
                >
                  <option value="car">Car</option>
                  <option value="electric">Electric Car</option>
                  <option value="scooter">Scooter</option>
                </select>
              </div>
              <div className="formInput">
                <label>Region</label>
                <select
                  onChange={(e) => setRegion(e.target.value)}
                >
                  <option value="central">Central</option>
                  <option value="northern">Northern</option>
                  <option value="northeastern">Northeastern</option>
                  <option value="western">Western</option>
                  <option value="Eastern">Eastern</option>
                  <option value="southern">Southern</option>
                </select>
              </div>
              <div className="formInput">
                <label>Choice</label>
                <select
                  onChange={(e) => setChoice(e.target.value)}
                >
                  <option value="pro">Pro</option>
                  <option value="starter">Starter</option>
                </select>
              </div>
              <button onClick={handleEditCar}>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default EditCar
