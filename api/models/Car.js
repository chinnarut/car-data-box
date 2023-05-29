const mongoose = require("mongoose");
const { Schema } = mongoose;

const CarSchema = new Schema({
  carType: {
    type: String
  },
  license: {
    type: String,
    unique: true
  },
  brand:{
    type: String
  },
  model:{
    type: String
  },
  year:{
    type: String
  },
  owner:{
    type: String
  },
  region:{
    type: String
  },
  choice:{
    type: String
  }
}, { timestamps: true });


module.exports = mongoose.model("Car", CarSchema);