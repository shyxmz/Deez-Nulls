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
    setSigninInfo({ ...signinInfo, [name]: value });
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
    <section className="bg-gray-700 min-h-screen flex items-center justify-center">
      <div className="bg-gradient-to-r from-orange-300 to-red-400 backdrop-blur-lg bg-opacity-70 flex rounded-2xl shadow-lg w-[70%] p-5 items-center mx-auto">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-5xl text-[#002D74]">Create an Account</h2>
          <p className="text-s mt-4 text-[#002D74]">
            Fill in the details to sign up
          </p>

          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="text"
              name="name"
              placeholder="Name"
              value={signinInfo.name}
              onChange={handleChange}
            />
            <input
              className="p-2 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
              value={signinInfo.email}
              onChange={handleChange}
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
                value={signinInfo.password}
                onChange={handleChange}
              />
            </div>
            <select
              onChange={handleChange}
              name="role"
              value={signinInfo.role}
              className="w-full p-2 text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select your role</option>
              <option value="startup">Startup</option>
              <option value="EIR">EIR</option>
              {/* <option value="admin">Admin</option> */}
            </select>
            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
              Sign Up
            </button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-black text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <span className="block mt-4 text-center">
            Already have an account?
            <Link to="/login" className="text-blue-400 hover:underline">
              {" "}
              Login
            </Link>
          </span>
        </div>

        {/* Include the image directly using a URL */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://i.pinimg.com/564x/cb/cb/db/cbcbdb6c48a5f2d423e87f2356540bc8.jpg" // Replace with your image URL
            alt="Signup"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <ToastContainer />
      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
<script src="https://files.bpcontent.cloud/2024/10/23/08/20241023085748-2LQFIG7G.js"></script>
    </section>
  );
}

export default Signup;
