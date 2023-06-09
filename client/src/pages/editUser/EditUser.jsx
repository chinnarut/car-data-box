import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./editUser.scss";
import axios from "axios";
import { UserContext } from "../../UserContext";
import { Navigate } from "react-router-dom";

const EditUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [userData, setUserData] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/users/find/${user?.id}`);
      setUserData(res?.data);
    }

    fetchData();
  }, [user?.id]);

  console.log(userData)
  console.log(redirect)

  const handleEditUser = async (e) => {
    try {
      await axios.put(`/users/${userData?._id}`, {
        username,
        email,
        password
      });

      setUsername("");
      setEmail("");
      setPassword("");
      setRedirect(true);
    } catch(err) {
      console.log(err);
    }
  }

  if(redirect || !user) {
    return <Navigate to={"/"} />
  }

  return (
    <div className="editUser">
      <Sidebar />
      <div className="editUserContainer">
        <Navbar />
        <div className="top">
          <h1>Edit User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <form>
              <div className="formInput">
                <label>Username</label>
                <input 
                  type="text" 
                  value={username}
                  placeholder={userData?.username} 
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input 
                  type="email" 
                  value={email}
                  placeholder={userData?.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  placeholder={"Your new password"}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button 
                onClick={handleEditUser}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditUser
