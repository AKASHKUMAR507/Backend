import mongoose from "mongoose";
import { DB_NAME } from "../constant";
import { DB_URI } from "../config";


const connectDB = async () => {    
    try {     
        await mongoose.connect(`${DB_URI}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });
    } catch (error) {
        console.log("Error connecting to Mongoose", error);
    }

}

export default connectDB;