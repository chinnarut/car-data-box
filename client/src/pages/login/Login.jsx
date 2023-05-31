import { useContext, useState } from "react";
import "./login.scss";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/login", {
        email,
        password
      });

      setUser(data);

      setEmail("")
      setPassword("");
      setRedirect(true);
    } catch(err) {
      console.log(err);
    }
  };

  if(redirect) {
    return <Navigate to={"/"} />
  };

  return (
    <div className="login">
      <Link 
        to={"/"} 
        style={{
          position: "absolute",
          top: "0",
          width: "100%",
          margin: "20px", 
          padding: "20px",
          textDecoration: "none",
          fontSize: "30px",
          color: "green",
          fontWeight: "bold"
        }}
      >
        Home
      </Link>
      <div className="wrapper">
        <h1>Login Account</h1>
        <form>
          <input 
            placeholder="Email" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button onClick={handleLogin}>Sign in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
