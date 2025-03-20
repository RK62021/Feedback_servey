import React from 'react'
import { Link } from 'react-router-dom';

function login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-inter">
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-medium text-center mb-4">Login</h2>
        <form>
            
            <div className="mb-3">
                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                />
            </div>
            <div className="mb-1">
                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                />
            </div>
            <div className="mb-5 text-right">
                <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
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
        <p className="text-center text-sm text-gray-600 mt-3">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
                Signup
            </Link>
        </p>
    </div>
</div>
  )
}

export default login
