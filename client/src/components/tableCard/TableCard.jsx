import { Link } from "react-router-dom";
import "./tableCard.scss";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";

const TableCard = ({ license, carType, brand, model, owner, year, region, choice, id }) => {
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
    <Link 
      to={user ? `/car/edit/${id}` : "/login"}
      style={{color: "inherit", textDecoration: "none"}}
    >
      <div className="tableCard">
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
      </div>
    </Link>
  )
}

export default TableCard
