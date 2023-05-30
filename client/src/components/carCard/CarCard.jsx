import { Link } from "react-router-dom";
import "./carCard.scss";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";

const CarCard = ({ license, carType, brand, model, owner, year, region, choice, id }) => {
  const { user } = useContext(UserContext);
  console.log(id)

  const handleDelete = async (e) => {
    try {
      if(user) {
        await axios.delete(`/cars/${id}`);
      }
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <div className="carCard">
      <div className="container">
        <span className="data">{license}</span>
        <span className="data">{carType}</span>
        <span className="data">{brand}</span>
        <span className="data">{model}</span>
        <span className="data">{year}</span>
        <span className="data">{owner}</span>
        <span className="data">{region}</span>
        <span className="data">{choice}</span>
      </div>
      <div className="cellAction">
        <Link to={user ? `edit/${id}` : "/login"}>
          <button className="editButton">Edit</button>
        </Link>
        <Link to={user ? "/" : "/login"}>
          <button
            className="deleteButton"
            onClick={handleDelete}
          >
            Delete
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CarCard
