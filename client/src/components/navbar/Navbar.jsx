import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          
        </div>
        <div className="items">
          <div className="item">
            <Link
              to={user ? "/user/edit" : "/login"}
              style={{ 
                textDecoration: "none", 
                color: "inherit" 
              }}
            >
              <AccountCircleOutlinedIcon className="avatar" />
            </Link>
            {user 
              ? (<span>{user?.username}</span>)
              : (
                <div className="auth">
                <Link
                  to="/signup"
                  style={{ 
                    textDecoration: "none", 
                    color: "inherit" 
                  }}
                >
                  <div className="signup">Sign Up</div>
                </Link>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="signin">Login</div>
                </Link>
              </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
