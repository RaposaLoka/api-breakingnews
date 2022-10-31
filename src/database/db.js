import Mongoose from "mongoose";

const connectDatabase = () => {
  console.log("Wait connecting to the database..");
  Mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log("MongoDB Atlas Connnected"))
    .catch((error) => console.log(error));
};

export default connectDatabase;
