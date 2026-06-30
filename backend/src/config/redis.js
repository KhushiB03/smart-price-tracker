import createClient from "redis";
import dotenv from "dotenv";
dotenv.config();

const redis = createClient({
    url : `redis://4${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

redis.on("err" , (err)=>{
    console.error(err);
});

const connectREDIS = async()=>{
    try {
        await redis.connect();

    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
};
export default connectREDIS;