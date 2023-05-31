import { useState } from "react";
import "./register.scss";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", {
        username,
        email,
        password
      });

      setUsername("")
      setEmail("")
      setPassword("")
      setRedirect(true);
    } catch(err) {
      console.log(err);
    }
  };

  if(redirect) {
    return <Navigate to="/" />
  }

  return (
    <div className="register">
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
        <h1>Create Account</h1>
        <form>
          <input 
            type="text"
            placeholder="Username"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            type="email"
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button onClick={handleSignup}>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default Register
