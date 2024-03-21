import mongoose from "mongoose";

const connection = async () => {
  const URL = 'mongodb+srv://ruthvik:Ruth1665@cluster0.q58b0d1.mongodb.net/?retryWrites=true&w=majority'
  
  try {
    await mongoose.connect(URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

export default connection;