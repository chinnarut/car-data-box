const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const bcryptSalt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

router.post("/register", async (req,res) => {
  mongoose.connect(process.env.MONGO_KEY);
  const { username, email ,password } = req.body;

  try {
    const userDoc = await User.create({
      username,
      email,
      password:bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (err) {
    res.status(422).json(err);
  }
});

router.post("/login", async (req,res) => {
  mongoose.connect(process.env.MONGO_KEY);
  const { email, password } = req.body;
  const userDoc = await User.findOne({email});

  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);

    if (passOk) {
      const acessToken = jwt.sign({
        username: userDoc.username,
        email: userDoc.email,
        id: userDoc._id,
        isAdmin: userDoc.isAdmin
      }, 
      process.env.JWT_PASS,
      {},
      {
        expiresIn: "2d"
      });

      const { password, ...others } = userDoc._doc;
      res.cookie("token", acessToken).status(200).json({...others, acessToken});
    } else {
      res.status(422).json('pass not ok');
    }
  } else {
    res.status(500).json(false)
  }
});

router.post("/logout", (req, res) => {
  mongoose.connect(process.env.MONGO_KEY);
  res.cookie("token", "").json(false);
})


module.exports = router;