import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const connectToDB = async () => {
     try {
      await mongoose.connect("mongodb://127.0.0.1:27017/SOEN");
      console.log("Connected to MongoDB")
     
     } catch (error) {
        console.log(error);

     }
};

export default connectToDB;