import React, { useEffect } from "react";
import { set } from "react-hook-form";
import { MdLogout } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";

function Sidebar() {
  const handlelogout = () => {
    setTimeout(() => {
      Navigate("/");
    }, 2000);
  }
  const [user, setUser] = React.useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/api/v1/profile/dashboard", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data= await response.json();
      console.log(data);
      console.log(data.data.name);
      if (response.ok) {
        setUser(data.data.name); // Assuming the API returns a field indicating login status
        
      } else {
        console.error("Failed to fetch login status");
      }
    }
    fetchData();
  },[user]);

  return (
    <>
      <div className="p-6 bg-gradient-to-b from-gray-800 to-gray-900 text-white h-screen w-64 md:w-64 sm:w-full flex flex-col justify-between shadow-lg">
        <div className="sidebar-header mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-wide">Admin Panel</h2>
          <p className="text-sm text-gray-400 mt-1">Welcome,{user}</p>
        </div>
        <div className="sidebar-links space-y-6 text-center">
        <Link
              to="/"
              className="block py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-300 text-gray-300 hover:text-white"
            >
              Home
            </Link>
          <Link
            to="/dashboard"
            className="block py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-300 text-gray-300 hover:text-white"
          >
            Dashboard
          </Link>

          <div className="survey-submenu space-y-4">
            <Link
              to="/dashboard/create"
              className="block py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-300 text-gray-300 hover:text-white"
            >
              Create Survey
            </Link>
            <Link
              to="/dashboard/add-question"
              className="block py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-300 text-gray-300 hover:text-white"
            >
              Add/Delete Question
            </Link>
            <Link
              to="/dashboard/response"
              className="block py-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-300 text-gray-300 hover:text-white"
            >
              Responses
            </Link>
          </div>
        </div>
        <div className="sidebar-footer mt-8">
          <button
            className="w-full py-3 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 flex items-center justify-center shadow-md"
            onClick={handlelogout}
          >
            <MdLogout className="mr-2 text-lg" /> Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
