const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI = process.env.DB_URI_PEDRO;
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, res) => {
    if (!err) {
      console.log(" **** conexión correcta **** ")
    }
    if (err) {
      console.log(" **** Error de conexión **** ")
    }
  })
}

module.exports = dbConnect;