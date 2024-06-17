// import React from "react";
import { IoPersonOutline, IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="main flex justify-between bg-[#3b5d50] w-full">
        <div className="logo text-3xl font-bold items-center pt-2">
          <Link to="/">
            <p className="ml-24 text-white">Furni..</p>
          </Link>
        </div>
        <div>
          <ul className="flex  text-center items-center pt-4">
            <Link to="/">
              <li className="p-1 font-bold text-lg cursor-pointer hover:border-b-4 hover:border-yellow-500 hover:text-gray-300 text-white ml-7 active:text-white">
                Home
              </li>
            </Link>
            <Link to="/shop">
              <li
                className="p-1 font-bold text-lg cursor-pointer hover:border-b-4 hover:border-yellow-500 ml-7 hover:text-gray-300 text-white active:text-white
              "
              >
                Shop
              </li>
            </Link>
            <Link to="/about">
              <li className="p-1 font-bold text-lg cursor-pointer hover:border-b-4 hover:border-yellow-500 ml-7 hover:text-gray-300 text-white active:text-white">
                About Us
              </li>
            </Link>
            <Link to="/services">
              <li className="p-1 font-bold text-lg cursor-pointer hover:border-b-4 hover:border-yellow-500 ml-7 hover:text-gray-300 text-white active:text-white">
                Services
              </li>
            </Link>
            <Link to="/blog">
              <li className="p-1 font-bold text-lg cursor-pointer hover:border-b-4 hover:border-yellow-500 ml-7 hover:text-gray-300 text-white active:text-white">
                Blog
              </li>
            </Link>
            <Link to="/contact">
              <li className="p-1 font-bold text-lg cursor-pointer hover:border-b-4 hover:border-yellow-500 ml-7 hover:text-gray-300 text-white active:text-white">
                Contact us
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className="flex text-center items-center">
            <Link to="/account">
              <li className="p-5">
                <IoPersonOutline
                  size={28}
                  className="text-white hover:text-black"
                />
              </li>
            </Link>
            <Link to="/cart">
              <li className="p-5 ">
                <IoCartOutline
                  size={28}
                  className="text-white hover:text-black ml-7 "
                />
              </li>
            </Link>
            <Link to="/login">
              <li className="p-5 ">
                <button className="border-2 h-10 w-24 rounded-3xl text-center text-white text-lg font-medium hover:bg-yellow-500 hover:text-black hover:border-none hover:text-xl">
                  Login
                </button>
              </li>
            </Link>
            <Link to="/signup">
              <li className="p-5 ">
                <button className="border-2 h-10 w-24 rounded-3xl text-center text-white text-lg font-medium hover:bg-yellow-500 hover:text-black hover:border-none hover:text-xl">
                  Signup
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
