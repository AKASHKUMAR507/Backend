import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_EXPIRE, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_EXPIRY, REFRESH_TOKEN_SECRET } from "../config";

const userSchema = new Schema({
    username: { type: String, lowercase: true, trim: true, index: true, required: true, unique: true },
    email: { type: String, lowercase: true, trim: true, required: true, unique: true },
    fullname: { type: String, trim: true, required: true, index: true },
    avatar: {
        type: String, // cloudinary avatar url
        trim: true,
        required: true,
        index: true
    },
    coverImage: {
        type: String, // cloudinary cover image url
    },
    watchHistory: [{
        type: Schema.Types.ObjectId,
        ref: "Video"
    }],

    password: { type: String, required: [true, "password is required"] },
    refreshToken: {
        type: String,
    }
}, { timestamps: true })


userSchema.pre("save", async function (req, res, next) {
    if (!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname,
        },
        ACCESS_TOKEN_SECRET,
        {
            expiresIn: ACCESS_TOKEN_EXPIRE,
        }
    )
}

userSchema.methods.generateRefreshToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        REFRESH_TOKEN_SECRET,
        {
            expiresIn: REFRESH_TOKEN_EXPIRY,
        }
    )
}

export const User = mongoose.model("User", userSchema);