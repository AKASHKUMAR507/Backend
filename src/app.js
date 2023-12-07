import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { CORS_ORIGIN } from './config';

const app = express()

app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());

// route 
import userRouter from './routes/user.routes';

// routes declarations
app.use('/api/v1/users',userRouter )

export { app }