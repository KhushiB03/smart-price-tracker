import sql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    password:process.env.DB_PORT,
    user:process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0

});

const connectDB = async(req , res)=>{
   try {
     const connect = await pool.getConnection();
    connect.release();
   } catch (error) {
   process.exit(1);
    
   }
}
export default connectDB;