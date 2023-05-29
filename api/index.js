const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const carRoute = require("./routes/car");

const app = express();

dotenv.config();
mongoose.connect(process.env.MONGO_KEY)
  .then(() => console.log("DB is connected..."))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: "http://localhost:5173"
}));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/cars", carRoute);


app.listen(7000, () => {
  console.log("Api is running...");
})