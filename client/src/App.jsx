import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import EditUser from "./pages/editUser/EditUser";
import EditCar from "./pages/editCar/EditCar";
import AddCar from "./pages/addCar/AddCar";
import Register from "./pages/register/Register";
import axios from "axios";
import { UserContextProvider } from "./UserContext";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="signup" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="user/edit" element={<EditUser />} />
          <Route path="car">
            <Route index element={<List />} />
            <Route path="edit" element={<AddCar />} />
            <Route path="edit/:carId" element={<EditCar />} />
          </Route>
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
