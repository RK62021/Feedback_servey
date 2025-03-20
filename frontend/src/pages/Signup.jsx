import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  //   console.log(watch("name")); // watch input value by passing the name of it
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/signup", {
        method: "POST", // Use POST method to send data
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send data as JSON
      });

      if (response.ok) {
        // const result = await response.json();
        // console.log("Data sent successfully:", result);
        toast.success(
          "Account created successfully, redirecting to login page...",
          { autoClose: 2000,
            position: "top-center",
            
            
           }
        );
        reset(); // Reset form after successful submission
        // Handle successful response here (e.g., reset form, show success message, etc.)
        setTimeout(() => {
          navigate("/login"); // Navigate to login page after 2 seconds
        }, 2000);

        // Redirect to login page after 2 seconds
      } else {
        // Handle errors from API
        const result = await response.json();
        console.log("Error sending data:", result);
        toast.error(result.error);
      }
    } catch (error) {
      console.log("Network error:", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 font-inter">
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-medium text-center mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label
                className="block text-gray-700 text-sm font-medium mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                {...register("name", { required: true })}
                autoComplete="name"
              />
            </div>
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
            <div className="mb-7">
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
            {/* <div className="mb-3 text-right">
                        <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
                            Forgot Password?
                        </Link>
                    </div> */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Sign Up
            </button>
          </form>
          <ToastContainer />
          <p className="text-center text-sm text-gray-600 mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
