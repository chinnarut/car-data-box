import DataList from "../../components/dataList/DataList";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";

const List = () => {
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
