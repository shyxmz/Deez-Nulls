import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handelSuccess, handleError } from "../util";

function Signup() {

  const navigate = useNavigate();
  const [Signininfo, setSignininfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copySigninInfo = { ...Signininfo };
    copySigninInfo[name] = value;
    setSignininfo(copySigninInfo);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = Signininfo;
    if (!name || !email || !password) {
      return handleError("Name, email, and password are all required");
    }
    try {
      const url = "http://localhost:8080/auth/signup"; // Fixed the URL to 'signup'
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Signininfo),
      });
      const result = await response.json();
      const {success,message , error} = result;

      if(success){
        handelSuccess(message);
        setTimeout(() => {
          navigate('/login');
        },  1000);
      }else if(error)
      {
        const details = error?.details[0].message;
        handleError(details);
      }
      console.log(result);
    } catch (err) {
      handleError("An error occurred during signup");  
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
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
              value={Signininfo.name}
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
              value={Signininfo.email}
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
              value={Signininfo.password} // Fixed 'passwor' to 'password'
              placeholder="Enter your Password"
              className="w-full p-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
