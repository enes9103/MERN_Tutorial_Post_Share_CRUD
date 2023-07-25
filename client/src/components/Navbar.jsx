import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/header-logo2.png";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineContactMail, MdRoundaboutRight } from "react-icons/md";
import { HiOutlineHome, HiOutlineSearch } from "react-icons/hi";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const logoutFunc = () => {
    localStorage.clear();
    window.location = "/auth";
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-1 md:block">
            <Link to={"/"}>
              <img src={logo} alt="logo" className="h-20" />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-8 md:space-y-0">
              <li className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <HiOutlineHome />
                <Link to={"/"}>Home</Link>
              </li>
              <li className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <MdRoundaboutRight />
                <Link to={"/about"}>About</Link>
              </li>
              <li className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <MdOutlineContactMail />
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-6 md:flex md:space-x-4 md:space-y-0">
              <li className="flex items-center gap-2 border border-gray-100 bg-white-200 p-1 rounded-md outline-none">
                <HiOutlineSearch />
                <input
                  type="text"
                  placeholder="Search"
                  className="border-none outline-none px-1 bg-white-200"
                />
              </li>
              <li
                onClick={logoutFunc}
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer"
              >
                <FiLogOut />
                <span>Logout</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
