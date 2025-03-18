import { asynchandler } from "../utils/asynchandeler.js";
import { User } from "../models/users.models.js";
import Error from "../utils/ApiError.js";

const generateTokens = async function (UserID) {
  try {
    const user = await User.findById(UserID);
    if(!user){
        throw new Error(404, "User not found");
    }
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error(500, "Error in generating tokens");
  }
};
const signup = asynchandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const exist = await User.findOne({ email });
  if (exist) {
    throw new Error(400, "User already exist");
  }
  const user = await User.create({ name, email, password });
  res.status(201).json({
    id: user._id,
    name: user.name,
    email: user.email,
  });
});
const login = asynchandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
  });
  if (!user) {
    throw new Error(400, "User not found and please signup");
  }
  const isMatch = await user.isPasswordCorrect(password);
  const { accessToken, refreshToken } = await generateTokens(user._id);
  if (!isMatch) {
    throw new Error(400, "Invalid password");
  }
  const options = {
    httpOnly: true,
    sameSite: "none",
    secure: true
  };
    res.cookie("refreshToken", refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .status(200)
    .json({
      id: user._id,
      name: user.name,
      email: user.email,
  });
});

export { login, signup };
