import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Serveys from "./pages/serveys.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Feature from "./pages/Feature.jsx";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Error from "./pages/Error.jsx";

import Dashboard from "./pages/dashboard.jsx";
import router from "./routes/routes.jsx";


createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // {/* </StrictMode> */}
);
