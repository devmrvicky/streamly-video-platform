import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateRefreshAndAccessToken = async (user) => {
  try {
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(404, "enable to create accessToken or refreshToken");
  }
};

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
  // console.log(req.files);
  // return res.json({ message: "finished" });
  const avatarLocalPath = req.files?.avatar[0]?.path;
  // const coverImgLocalPath = req.files?.coverImg[0]?.path;
  let coverImgLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.coverImg) &&
    req.files.coverImg.length
  ) {
    coverImgLocalPath = req.files.coverImg[0].path;
  }
  if (!avatarLocalPath) throw new ApiError(400, "Avatar image is required");
  // upload on cloudinary
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  // console.log(avatar);
  const coverImg = await uploadOnCloudinary(coverImgLocalPath);
  // console.log(coverImg);
  if (!avatar) throw new ApiError(400, "Avatar image is required");
  // create user obj and entry on db
  const user = await User.create({
    userName,
    email,
    fullName,
    password,
    avatar: avatar.url,
    coverImg: coverImg?.url || "",
  });
  // check if user is created and remove password and refresh token fields
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

// login user
const loginUser = asyncHandler(async (req, res) => {
  // get data from user
  const { userName, email, password } = req.body;
  // check validation of data
  if (userName === "" || email === "") {
    throw new ApiError(404, "email or username is must required for login");
  }
  // find user based on userName or email
  const user = await User.findOne({
    $or: [{ userName }, { email }],
  });
  console.log(user);
  // if user did not found throw an ApiError
  if (!user) {
    throw new ApiError(
      404,
      "user does not exits. make sure you have enter correct username and email.",
    );
  }
  // check password validation
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "password is invalid.");
  }
  // generate refreshToken and accessToken
  const { refreshToken, accessToken } =
    await generateRefreshAndAccessToken(user);
  // get loggedInUser data
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );

  // send cookies and response
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser, accessToken, refreshToken },
        "logged in successfully",
      ),
    );
});

// logout user
const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { refreshToken: undefined },
    },
    {
      new: true,
    },
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("refreshToken", options)
    .clearCookie("accessToken", options)
    .json(new ApiResponse(200, {}, "user logout successfully"));
});

export { registerUser, loginUser, logoutUser };
