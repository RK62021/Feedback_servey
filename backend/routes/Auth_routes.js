import { Router } from "express";
import {
  loginValidation,
  signupValidation,
} from "../middleware/Auth.middleware.js";
import { login, signup } from "../Controllers/Auth.controller.js";
import { verifyJwt } from "../middleware/Protected.middleware.js";
import { User } from "../models/users.models.js";

const router = Router();
router.route("/signup").post(signupValidation, signup);
router.route("/login").post(loginValidation, login);

router.route("/protected").get(verifyJwt, async (req, res) => {
  const user = await User.findById(req.user.id);
  const { name, email } = user;
  console.log(user);

  res
    .status(200)
    .json({ success: true, message: "Protected route", user: { name, email } });
    
    
});

export { router as Auth_routes };
