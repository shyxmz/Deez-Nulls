import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handelSuccess, handleError } from "../util";

function Login() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    role: "startup",  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
        return handleError("Email and password are required");
    }
    
    console.log('Login Info:', loginInfo);  

    try {
        const url = "http://localhost:8080/auth/login";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),  
        });

        const result = await response.json();
        console.log(result);  

        const { success, message, role } = result;

        if (success) {
            handelSuccess(message);
            localStorage.setItem('role', role);
            setTimeout(() => {
               
                if (role === 'admin') {
                    navigate("/adminLanding");
                } else if (role === 'startup') {
                    navigate("/startupLanding");
                } else if(role==='EIR'){
                    navigate("/investorlanding");
                }
            }, 1000);
        } else {
            handleError(result.error || "Login failed: Incorrect email or password");
        }
    } catch (err) {
        console.error('Error during login:', err);  
        handleError("Enter the correct email and password for login");
    }
};

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="w-full max-w-md p-8 space-y-6  rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={loginInfo.email}
              className="w-full p-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              value={loginInfo.password}
              placeholder="Enter your Password"
              className="w-full p-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 mt-4 font-semibold text-gray-900 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>

          <span className="block mt-4 text-center">
            Don't have an account?
            <Link to="/signup" className="text-blue-400 hover:underline">
              {" "}
              Sign Up
            </Link>
          </span>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;