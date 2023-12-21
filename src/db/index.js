import mongoose from "mongoose";
import { DB_NAME } from "../constant";
import { DB_URI } from "../config";

// const db_url = 'mongodb+srv://akashkumar32755:Akash12345@cluster0.de31c.mongodb.net'

const connectDB = async () => {    
    try {     
        await mongoose.connect(`${DB_URI}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });
    } catch (error) {
        console.log("Error connecting to Mongoose", error);
    }

}

export default connectDB;