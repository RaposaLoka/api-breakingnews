const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Wait connecting to the database..");
  mongoose
    .connect(
      "mongodb+srv://root:root@cluster0.y0ijoto.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas Connnected"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
