import React, { useState } from "react";
import Logo from "../assets/images/Beige Simple One Line Butterfly Events Logo.png";

const Auth = () => {
  const [signUp, setSignUp] = useState(true);
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChangeForm = (e) => {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(authData);
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gray-100">
      <div className="w-full p-6 m-auto bg-white rounded-lg shadow-md lg:max-w-xl">
        <img
          src={Logo}
          alt="logo"
          className="w-60 h-36 flex justify-center items-center mx-auto mb-10"
        />

        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          {signUp ? "Sign Up" : "Sign In"}
        </h1>
        <form className="mt-6">
          {signUp && (
            <div className="mb-2">
              <label
                for="userName"
                className="block text-sm font-semibold text-gray-800"
              >
                User Name
              </label>
              <input
                type="text"
                name="username"
                onChange={handleChangeForm}
                value={authData.username}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          )}
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChangeForm}
              value={authData.email}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChangeForm}
              value={authData.password}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          {!signUp && (
            <span className="text-xs text-purple-600 hover:underline">
              Forget Password?
            </span>
          )}
          <div className="mt-6">
            {signUp ? (
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Register
              </button>
            ) : (
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            )}
          </div>
        </form>

        {!signUp ? (
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            Don't have an account?{" "}
            <span
              className="font-medium text-purple-600 hover:underline cursor-pointer"
              onClick={() => setSignUp(true)}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            Have you logged in before?{" "}
            <span
              className="font-medium text-purple-600 hover:underline cursor-pointer"
              onClick={() => setSignUp(false)}
            >
              Sign in
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;
