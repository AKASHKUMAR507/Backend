import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import { User } from "../models/user.models";
import { uploadOnCloudinary } from "../utils/cloudinary";
import { ApiResponse } from "../utils/ApiResponse";

const registerUser = asyncHandler(async (req, res, next) => {
    // res.status(200).json({ message: 'Chai or code' });
    // get user information from frontend
    // validation - not null
    // check if user exists username and email address
    // check cover image , check avatar
    // upload on cloudinary
    // check on cloudinary is successful upload is successful
    // create user object - create entry in db 
    // remove password and refresh token from response 
    //  check for user creation 
    // return response else error

    const { username, email, fullname, password } = req.body

    if ([fullname, email, username, password].some((field) => field.trim() === '')) {
        throw new ApiError(400, "All field are required")
    }

    const existedUser = await User.findOne({ $or: [{ username }, { email }] })

    if(existedUser){
        throw new ApiError(409, "User already exists")
    }

    const avatarLocalPath = req.files.avatar[0].path;
    const coverImageLocalPath = req.files.coverImage[0].path;

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar file is required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
    
    if(!avatar) {
        throw new ApiError(400, "Avatar file is required");
    }

    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage.url || "",
        email,
        password,
        username: username.toLowerCase()
    });

    const createdUser = await User.findById(user._id).select("-password -refreshToken -__v");

    if(!createdUser){
        throw new ApiError(500, "Something went wrong");
    }


    return res.status(201).json(
        new ApiResponse(200, createdUser, "User created successfully")
    )

})

const loginUser = asyncHandler(async (req, res, next) => {
    res.status(200).json({ message: 'user login successful' });
})


export { registerUser, loginUser }