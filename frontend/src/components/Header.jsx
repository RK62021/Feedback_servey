import React, { useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { useRef, useState } from "react";
import iage from "../assets/userpng.png"; // Replace with your logo path
import { Link, NavLink } from "react-router-dom";
import { use } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isloggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (isOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  
    // Clean up in case the component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/api/v1/auth/auth-check", {
          method: "GET",
          credentials: "include", // 🔥 this is the key
          headers: {
            "Content-Type": "application/json",
          },

        });
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          setIsLoggedIn(data.loggedin); // Assuming the API returns a field indicating login status
        } else {
          console.error("Failed to fetch login status");
        }
      } catch (error) {
        console.error("Error fetching login status:", error);
      }
    }
    fetchData();
  },[isloggedIn]);


  return (
    <>
      <header className="flex items-center justify-between p-4 bg-cream text-white sticky top-0 bg-white z-10 mx-4  ">
        <Link
          to="/"
          className="text-black no-underline  text-2xl text-center font-bold cursor-pointer hover:text-gray-900 transition duration-300 ease-in-out
        "
        >
          FeedBack<span className="text-blue">&</span>Survey
        </Link>
        <div className="hidden md:block">
          <nav className="flex gap-6 flex-rows ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold bg-theme-text no-underline"
                  : "font-medium text-black no-underline"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/serveys"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold bg-theme-text no-underline"
                  : "font-medium text-black no-underline"
              }
            >
              Surveys
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold bg-theme-text no-underline"
                  : "font-medium text-black no-underline"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold bg-theme-text no-underline"
                  : "font-medium text-black no-underline"
              }
            >
              Features
            </NavLink>
          </nav>
        </div>
        <div
          className="relative md:block hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {!isloggedIn ? (
            <Link
              to={"/login"}
              className="bg-theme text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out with-32"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </Link>
          ) : (
            <>
              <img src={iage} alt="Logo" className="h-10 w-10 cursor-pointer" />
              {isHovered && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                  <ul className="py-2 w-full">
                    <li className="w-full">
                      <Link
                        to={"/dashboard"}
                        className="px-15 py-2 hover:bg-gray-200 cursor-pointer flex justify-start overflow-hidden text-ellipsis whitespace-nowrap"
                      >
                        Dashboard
                      </Link>
                    </li>
                  
                   
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-center"
                      onClick={() => setIsLoggedIn(false)}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
        <div className="md:hidden">
          <IoMenu
            size={30}
            className="cursor-pointer
            transition duration-300 ease-in-out hover:text-gray-900 text-black"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen  flex flex-col items-center justify-center space-y-6 md:hidden
          transition duration-300 ease-in-out z-20
           backdrop-blur-md"
        >
          <div className="absolute top-4 right-4">
            <FaTimes
              size={30}
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </div>
          <ul className="space-y-4 text-lg">
            {!isloggedIn ? (
              <li className="hover:text-gray-200 cursor-pointer text-center">
                <Link
                  to={"/login"}
                  className="bg-theme text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out with-32
                "
                >
                  Login
                </Link>
              </li>
            ) : (
              <>
                <li className="hover:text-gray-200 cursor-pointer text-center">
                  <Link to={"/dashboard"}>Dashboard</Link>
                  
                </li>
                <li
                  className="hover:text-gray-200 cursor-pointer"
                  onClick={() => setIsLoggedIn(false)}
                >
                  Logout
                </li>
              </>
            )}
          </ul>
          <div className="flex flex-col items-center space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold bg-theme-text no-underline"
                  : "font-medium text-black no-underline"
              }
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/serveys"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold bg-theme-text no-underline"
                  : "font-medium text-black no-underline"
              }
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Surveys
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold bg-theme-text no-underline"
                  : "font-medium text-black no-underline"
              }
              onClick={() => {
                setIsOpen(false);
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold bg-theme-text no-underline"
                  : "font-medium text-black no-underline"
              }
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Features
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
