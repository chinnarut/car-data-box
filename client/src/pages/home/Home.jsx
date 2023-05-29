import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import DataTable from "../../components/table/DataTable";
import DataList from "../../components/dataList/DataList";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type={"cars"} />
        </div>
        <div className="listContainer">
         
          <div className="dataListContainer">
            <DataList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
