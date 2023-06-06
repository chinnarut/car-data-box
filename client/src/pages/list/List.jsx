import { useContext } from "react";
import DataList from "../../components/dataList/DataList";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";
import { UserContext } from "../../UserContext";
import { Navigate } from "react-router-dom";

const List = () => {
  const { user } = useContext(UserContext);

  if(!user) {
    return <Navigate to="/" />
  }

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="dataListContainer">
          <DataList />
        </div>
      </div>
    </div>
  )
}

export default List
