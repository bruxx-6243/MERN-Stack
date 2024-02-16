import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGODB_URL;

async function connectToMongoDB() {
  try {
    const mongo = await mongoose.connect(url);
    console.log(`Connected to MongoDB successfully`);
  } catch (err) {
    console.log(`Failed to connect to MongoDB, ${err.message}`);
  }
}

connectToMongoDB();
