import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handelSuccess, handleError } from "../util";

function Signup() {
  const navigate = useNavigate();
  const [signinInfo, setSigninInfo] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copySigninInfo = { ...signinInfo };
    copySigninInfo[name] = value;
    setSigninInfo(copySigninInfo);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password, role } = signinInfo;
    if (!name || !email || !password || !role) {
      return handleError("All fields are required");
    }
    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signinInfo),
      });
      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handelSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        const details = error?.details[0]?.message || "Signup failed";
        handleError(details);
      }
    } catch (err) {
      handleError("An error occurred during signup");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/800 ">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>

        <form onSubmit={handleSignup}>
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">
              Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              autoFocus
              placeholder="Enter your Name"
              value={signinInfo.name}
              className="w-full p-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={signinInfo.email}
              className="w-full p-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-semibold">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={signinInfo.password}
              placeholder="Enter your Password"
              className="w-full p-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="role" className="block mb-1 font-semibold">
              Role
            </label>
            <select
              onChange={handleChange}
              name="role"
              value={signinInfo.role}
              className="w-full p-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select your role</option>
              <option value="startup">startup</option>
              <option value="EIR">EIR</option>
              <option value="admin">admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full p-2 mt-4 font-semibold text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign Up
          </button>

          <span className="block mt-4 text-center">
            Already have an account?
            <Link to="/login" className="text-blue-400 hover:underline">
              {" "}
              Login
            </Link>
          </span>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;