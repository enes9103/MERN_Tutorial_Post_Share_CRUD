import React, { useState } from "react";
import Logo from "../assets/images/auth-logo.png";
import { loginAction, registerAction } from "../redux/actions/auth";
import { useDispatch } from "react-redux";

const Auth = () => {
  const [signUp, setSignUp] = useState(true);
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChangeForm = (e) => {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value,
    });
  };

  const authFunc = () => {
    if (signUp) {
      console.log(authData);
      dispatch(registerAction(authData));
    } else {
      dispatch(loginAction(authData));
    }
  };
  return (
    <section className="text-gray-700 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="mx-auto w-1/3 shadow-md p-4 rounded-lg bg-slate-200">
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
                  htmlFor="userName"
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
                htmlFor="email"
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
                htmlFor="password"
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
              <button
                onClick={authFunc}
                type="button"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                {signUp ? "Register" : "Login"}
              </button>
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
    </section>
  );
};

export default Auth;
