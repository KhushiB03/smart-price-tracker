// server.js
//     |
//     |-- Express setup
//     |-- Routes
//     |-- Database
//     |-- Redis
//     |-- Middleware
//     |-- Server starts
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();


const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>{
    console.log(`run port ..`);
});
