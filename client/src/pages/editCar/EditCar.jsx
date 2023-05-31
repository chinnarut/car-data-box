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
  const [region, setRegion] = useState("");
  const [choice, setChoice] = useState("");
  const [carType, setCarType] = useState("");

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
      const dataUpdated = await axios.put(`/cars/${id}`, {
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

      console.log(dataUpdated)
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
                  required="required"
                  value={license}
                  onChange={(e) => setLicense(e.target.value)}
                  placeholder={car?.license} />
              </div>
              <div className="formInput">
                <label>Brand</label>
                <input
                  type="text"
                  required="required"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder={car?.brand}
                />
              </div>
              <div className="formInput">
                <label>Model</label>
                <input
                  type="text"
                  required="required"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder={car?.model}
                />
              </div>
              <div className="formInput">
                <label>Year</label>
                <input
                  type="text"
                  required="required"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder={car?.year}
                />
              </div>
              <div className="formInput">
                <label>Owner</label>
                <input
                  type="text"
                  required="required"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                  placeholder={car?.owner}
                />
              </div>
              <div className="formInput">
                <label htmlFor="carType">Car Type</label>
                <select
                  required="required"
                  onChange={(e) => setCarType(e.target.value)}
                >
                  <option value="Car">Car</option>
                  <option value="Electric">Electric Car</option>
                  <option value="Scooter">Scooter</option>
                </select>
              </div>
              <div className="formInput">
                <label htmlFor="egion">Region</label>
                <select
                  required="required"
                  onChange={(e) => setRegion(e.target.value)}
                >
                  <option value="Central">Central</option>
                  <option value="Northern">Northern</option>
                  <option value="Northeastern">Northeastern</option>
                  <option value="Western">Western</option>
                  <option value="Eastern">Eastern</option>
                  <option value="Southern">Southern</option>
                </select>
              </div>
              <div className="formInput">
                <label htmlFor="choice">Package</label>
                <select
                  required="required"
                  onChange={(e) => setChoice(e.target.value)}
                >
                  <option value="Pro">Pro</option>
                  <option value="Starter">Starter</option>
                </select>
              </div>
              <button type="submit" onClick={handleEditCar}>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default EditCar
