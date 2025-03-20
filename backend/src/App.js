import express from "express";
import cookieParser from "cookie-parser";
import errorHandler from "../utils/errorhandeler.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow specific HTTP methods (optional)
  credentials: true, // Allow cookies to be sent to the frontend (optional)
  })
);

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

import { Auth_routes } from "../routes/Auth_routes.js";
app.use("/api/v1/auth", Auth_routes);
app.use(errorHandler);

export { app };
