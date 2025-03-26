import mongoose from "mongoose";
import colors from "colors";
import { exit } from "process";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DATABASE_URL);
    console.log(colors.magenta.bold(`MongoDB Connected: ${connection.connection.host}`));
  } catch (error) {
    console.log(colors.red.bold(`Error connecting to MongoDB: ${error}`));
    exit(1); // if has error, exit the process with code 1
  }
}
