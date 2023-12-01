import mongoose from "mongoose";
import { DB_NAME } from "../constant";
import { DB_URI } from "../config";


const connectDB = async () => {
    // try {
    //     const connectionInstance = await mongoose.connect(`${DB_URI}/${DB_NAME}`,  {useNewUrlParser: true, useUnifiedTopology: true})
    //     console.log(`\n mongo db connected !! HOST ${connectionInstance.connection.host}`)
    // } catch (error) {
    //     console.log("MONGODB connection error ", error);
    //     process.exit(1);
    // }
    
    try {     
        await mongoose.connect(`${DB_URI}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', () => {
            console.log('DB connected...');
        })
    } catch (error) {
        console.log("Error connecting to Mongoose", error);
    }

}

export default connectDB;