import { Router } from "express";
import {
  loginValidation,
  signupValidation,
} from "../middleware/Auth.middleware.js";
import { login, logout, signup, userdetails } from "../controllers/Auth.controller.js";
import { verifyJwt } from "../middleware/Protected.middleware.js";
import { User } from "../models/users.models.js";

const router = Router();
router.route("/signup").post(signupValidation, signup);
router.route("/login").post(loginValidation, login);
router.route("/logout").get(verifyJwt,logout)

router.route("/protected").get(verifyJwt,userdetails);

export { router as Auth_routes };
