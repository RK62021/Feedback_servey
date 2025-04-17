import { asynchandler } from "../utils/asynchandeler.js";
import { User } from "../models/users.models.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const generateTokens = async function (UserID) {
  try {
    const user = await User.findById(UserID);
    if (!user) {
      return next(new ApiError(404, "User not found"));
    }
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    return next(new Error(500, "Error in generating tokens"));
  }
};
const signup = asynchandler(async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existsuser = await User.findOne({ email });
    if (existsuser) {
      //

      return next(new ApiError(400, "User already exists"));
    }

    const user = await User.create({ name, email, password });
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    return next(new error(500, "Error in signup"));
  }
});

const login = asynchandler(async (req, res, next) => {
  const { email, password } = req.body;
  // console.log(email, password);
  const user = await User.findOne({
    email,
  });
  if (!user) {
    return next(new ApiError(400, "User not found Please signup"));
  }
  const isMatch = await user.isPasswordCorrect(password);
  // console.log(isMatch);
  const { accessToken, refreshToken } = await generateTokens(user._id);
  if (!isMatch) {
    return next(new ApiError(400, "Invalid password"));
  }

  const options = {
    httpOnly: true,
    sameSite: "lax",  // ⬅ Use this in development
    secure: false,    // ⬅ Only true if you're on HTTPS
  };
  res
    .cookie("refreshToken", refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .status(200)
    .json({
      id: user._id,
      name: user.name,
      email: user.email,
    });
});

const logout = asynchandler(async (req, res, next) => {
  try {
    const logoutuser = req.user;
    const options = {
      httpOnly: true,
      sameSite: "lax",  // ⬅ Use this in development
      secure: false,
    };
    const logoutes = await User.findByIdAndUpdate(logoutuser.id, {
      refreshToken: "",
    });
    if (!logoutes) {
      return next(new ApiError(400, "User not found"));
    }
    res
      .clearCookie("refreshToken", options)
      .clearCookie("accessToken", options)
      .status(200)
      .json({
        success: true,
        message: "User logged out successfully",
      });
  } catch (error) {
    return next(new ApiError(500, "Error in logout"));
  }
});

// working on it

const userdetails = asynchandler(async (req, res, next) => {
  try {
    const user = req.user;
    console.log(user);
    const details = await User.findById(user.id).select(
      "-password -refreshToken"
    );
    console.log(details);
    if (!details) {
      return next(new ApiError(400, "User not found"));
    }
    res.status(200).json(new ApiResponse(200, "User details", details));
  } catch (error) {
    return next(new ApiError(500, "Error in getting user details"));
  }
});
export { login, signup, logout, userdetails };
