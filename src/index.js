import mongoose from "mongoose";
import connectDB from "./db";
import { PORT } from "./config";
import { app } from "./app";


connectDB()
    .then(() => {
        app.listen(PORT || 5000, () => {
            console.log(`App listening on port ${PORT}`);
        })
    })
    .catch((error) => {
        console.log("Database connection error: " + error);
    })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('DB connected...');
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