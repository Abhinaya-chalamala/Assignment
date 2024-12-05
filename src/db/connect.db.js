import mongoose from "mongoose";

let connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("connected to DataBase!..");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
