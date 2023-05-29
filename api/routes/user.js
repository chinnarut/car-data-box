const router = require("express").Router();
const User = require("../models/User");
const { verifyTokenAndAuthorization, verifyToken, verifyTokenAndAdmin } = require("./verifyToken");
const bcrypt = require("bcryptjs");
const bcryptSalt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

router.put("/:id", async (req, res) => {
  mongoose.connect(process.env.MONGO_KEY);
  if (req.body.password) {
    req.body.password = bcrypt.hashSync(password, bcryptSalt);
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  mongoose.connect(process.env.MONGO_KEY);
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/find/:id", async (req, res) => {
  mongoose.connect(process.env.MONGO_KEY);
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  mongoose.connect(process.env.MONGO_KEY);
  const query = req.query.latest;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", (req, res) => {
  mongoose.connect(process.env.MONGO_KEY);
  const { token } = req.cookies;
  if(token) {
    jwt.verify(token, process.env.JWT_PASS, {}, (err, userData) => {
      if(err) throw err;
      res.json(userData);
    });
  } else {
    res.status(500);
  }
});


module.exports = router;