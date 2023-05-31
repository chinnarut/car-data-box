const router = require("express").Router();
const Car = require("../models/Car");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

router.post('/', async (req,res) => {
  mongoose.connect(process.env.MONGO_KEY);
  const { carType, license, brand, model, year, owner, region, choice } = req.body;

  try {
    const carDoc = await Car.create({
      carType,
      license,
      brand,
      model,
      year,
      owner,
      region,
      choice
    });

    res.status(200).json(carDoc);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.put("/:id", async (req, res) => {
  mongoose.connect(process.env.MONGO_KEY);
  const { token } = req.cookies;
  const { id } = req.params;
  const {
    carType,
    license,
    brand,
    model,
    year,
    owner,
    region,
    choice
  } = req.body;
  
  try {
    jwt.verify(token, process.env.JWT_PASS, {}, async (err, carData) => {
      const carDoc = await Car.findById(id);
      if(carType) {
        carDoc.carType = carType;
      } 
      if(license) {
        carDoc.license = license;
      }
      if (brand) {
        carDoc.brand = brand;
      }
      if (model) {
        carDoc.model = model;
      }
      if (year) {
        carDoc.year = year;
      }
      if (owner) {
        carDoc.owner = owner;
      }
      if (region) {
        carDoc.region = region;
      }
      if (choice) {
        carDoc.choice = choice;
      }

      carDoc.save();
      res.json(carDoc);
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  mongoose.connect(process.env.MONGO_KEY);
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.status(200).json("Car's data has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/find/:id", async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;