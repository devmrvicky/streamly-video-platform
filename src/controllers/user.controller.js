import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  // await res.status(200).json({
  //   message: "chai aur code",
  // });
  // user register steps
  // step 1 : Get user's details such fullName, email, userName, password
  // step 2 : Validation if details are not empty
  // step 3 : Check user is already exit: from email and userName
  // step 4 : Check for image and avatar
  // step 5 : Upload them on cloudinary
  // step 6 : Create user object and entry on db
  // step 7 : Remove encrypted password and refresh token field from response
  // step 8 : Check user creation and if return response
  const { userName, fullName, email, password } = req.body;
  if (
    [userName, fullName, email, password].some((field) => field.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
  const existedUser = await User.findOne({ $or: [{ userName }, { email }] });
  if (existedUser) {
    throw new ApiError(409, "User is already exits.");
  }
  // console.log(existedUser);
  console.log(req.files);
  const avatarLocalPath = req.files?.avatar[0]?.path;
  // const coverImgLocalPath = req.files?.coverImg[0]?.path;
  let coverImgLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.coverImg) &&
    req.files.coverImg.length
  ) {
    coverImgLocalPath = req.files.coverImg.path;
  }
  if (!avatarLocalPath) throw new ApiError(400, "Avatar is required");
  // upload on cloudinary
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  console.log(avatar);
  const coverImg = await uploadOnCloudinary(coverImgLocalPath);
  console.log(coverImg);
  if (!avatar) throw new ApiError(400, "Avatar is required");
  // create user obj and entry on db
  const user = await User.create({
    userName,
    email,
    fullName,
    password,
    avatar: avatar.url,
    coverImg: coverImg?.url || "",
  });
  console.log(user);
  // check if user is created
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );
  console.log(createdUser);
  if (!createdUser)
    throw new ApiError(500, "Something went wrong while registering the user");
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "user successfully created"));
});

export { registerUser };
