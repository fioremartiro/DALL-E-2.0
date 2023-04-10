import mongoose from "mongoose";

export const connectDB = async (mongoUri) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(mongoUri)
    .then(() => console.log("connected to mongo"))
    .catch((err) => {
      console.error("failed to connect with mongo");
      console.error(err);
    });
};

export default connectDB;
