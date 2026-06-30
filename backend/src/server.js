// server.js
//     |
//     |-- Express setup
//     |-- Routes
//     |-- Database
//     |-- Redis
//     |-- Middleware
//     |-- Server starts
import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import connectDB from "./config/database.js";
import connectREDIS from "./config/redis.js";

const PORT = process.env.PORT || 5000;
const DBserver = async () => {
  await connectDB();
  await connectREDIS();
  app.listen(PORT, () => {
    console.log(`run port ..`);
  });
};

DBserver();
