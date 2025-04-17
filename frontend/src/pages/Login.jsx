import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Axios } from "axios";
import { ToastContainer ,toast} from "react-toastify";
function login() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = async(data) => {
    console.log(data);
    try {
     const response = await fetch("http://localhost:8080/api/v1/auth/login", 
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
             // Include cookies in the request
        });
        console.log(response);

      if (response.ok) {

        toast.success("Login successful And Redirecting...", {
          autoClose: 2000,
          position: "top-center",
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        const result = await response.json();
        console.log("Error sending data:", result);
        toast.error(result.error);
      }
    } catch (error) {
      console.log("Network error:", error);
    }

    
    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-inter">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-medium text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              autoComplete="email"
            />
          </div>
          <div className="mb-1">
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="mb-5 text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <ToastContainer />
        <p className="text-center text-sm text-gray-600 mt-3">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default login;
