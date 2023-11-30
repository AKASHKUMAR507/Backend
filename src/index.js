
import mongoose from "mongoose";
import { DB_NAME } from "./constant";
import connectDB from "./db";

connectDB();



























/*

const app = express();

;(async () => {
    try {
        await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
        app.on("Error", (error)=> {
            console.log("Error", error);
            throw error
        })
        app.listen(process.env.PORT, () =>{
            console.log(`app is listing on ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error", error);
        throw error
    }
})()

*/