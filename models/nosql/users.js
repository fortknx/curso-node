const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema({
  //Esquema del usuario
  name: {
    type: String
  },
  edad: {
    type: Number
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  role: {
    type: ["user", "admin"],
    default: "user"
  }
}, {
  // Apartado que permite registrar createdAT y updateAT
  timestamps: true,
  versionKey: false
})
// Primero se declara la tabla o colección luego se indica el esquema
module.exports = mongoose.model("users", UserScheme)