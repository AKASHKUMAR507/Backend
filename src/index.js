import mongoose from "mongoose";
import { DB_NAME } from "./constant";
import connectDB from "./db";
import { app } from "./app";
import { PORT } from "./config";


connectDB()
    .then(() => {
        app.listen(PORT || 5000, () => {
            console.log(`App listening on port ${PORT}`);
        })
    })
    .catch((error) => {
        console.log("Database connection error: " + error);
    })



























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