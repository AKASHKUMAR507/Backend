import dotenv from 'dotenv'
dotenv.config();
export const {
    PORT,
    DB_URI,
    CORS_ORIGIN,
    ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRE,
    REFRESH_TOKEN_SECRET,
    REFRESH_TOKEN_EXPIRY,
} = process.env;