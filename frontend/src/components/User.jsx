import React, { useEffect } from "react";
import useri from "../assets/user.svg";
import { useState } from "react";

function User() {
  const [user, setUser] = useState("");
  const [email, setemail] = useState("");

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
        setemail(data.data.email);
      } else {
        console.error("Failed to fetch login status");
      }
    }
    fetchData();
  }, [user,email]);

  return (
    <>
      <div className="flex flex-col items-center h-screen justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to your dashboard
        </h1>
        <img
          height={100}
          width={100}
          src={useri}
          alt="User"
          className="rounded-full border-2 border-gray-300 mb-4 "
        />

        <h1 className="text-2xl font-bold text-gray-800 mb-4">{user}</h1>

        <h1 className="text-2xl font-bold text-gray-800 mb-4">{email}</h1>

        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">Edit profile</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
          Change Password
        </button>
      </div>
    </>
  );
}

export default User;
