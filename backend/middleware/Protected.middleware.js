import { asynchandler } from "../utils/asynchandeler.js";
import jwt from "jsonwebtoken";
import Error from "../utils/ApiError.js";

const verifyJwt = asynchandler(async (req, _, next) => {
  try {
    const token = req.cookies?.accessToken;
    if (!token) {
      throw new Error(401, "Unauthorized");
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        throw new Error(401, "Unauthorized");
      }
      req.user = user;
      next();
    });
  } catch (error) {
    throw new Error(401, "Unauthorized You are not logged in");
  }
});
export { verifyJwt };
