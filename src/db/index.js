import mongoose from "mongoose";
import { DB_NAME } from "../constant";
import { DB_URI } from "../config";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${DB_URI}/${DB_NAME}`)
        console.log(`\n mongo db connected !! HOST ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error ", error);
        process.exit(1);
    }
}

export default connectDB;