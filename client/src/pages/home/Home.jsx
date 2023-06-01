import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import DataList from "../../components/dataList/DataList";
import TableList from "../../components/tableList/TableList";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type={"cars"} />
          <Widget type={"car"} />
          <Widget type={"electric"} />
          <Widget type={"scooter"} />
        </div>
        <div className="listContainer">
          <div className="dataListContainer">
            <TableList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
