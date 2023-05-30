import "./sidebar.scss";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";

const Sidebar = () => {
  const { user } = useContext(UserContext);

  const handleLogout = async (e) => {
    try {
      await axios.post("/auth/logout");
      location.reload();
    } catch(err) {
      console.log(err);
    }
  }
  
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration: "none"}}>
          <span className="logo">CarDataBox</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardOutlinedIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/car" style={{ textDecoration: "none" }}>
            <li>
              <DirectionsCarOutlinedIcon className="icon" />
              <span>Cars</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to={user ? "/car/edit" : "/login"} style={{ textDecoration: "none" }}>
            <li>
              <SettingsOutlinedIcon className="icon" />
              <span>Add Car</span>
            </li>
          </Link>
          <Link to={user ? "/user/edit" : "/login"} style={{ textDecoration: "none" }}>
            <li>
              <AccountBoxOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <li onClick={handleLogout}>
            <LogoutOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
