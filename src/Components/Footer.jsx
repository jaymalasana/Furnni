// import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import Sofa from "../Images/sofa.png";
import { IoSendSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { ImInstagram } from "react-icons/im";

function Footer() {
  return (
    <>
      <div className="mx-24">
        {/* First Div */}
        <div className="flex relative">
          <div className="flex flex-col absolute top-[260px]">
            <div className="flex">
              <FaEnvelope className="h-[32px] w-[32px]" />
              <p className="mt-[2px] ml-2 text-xl font-semibold">
                Subscribe to Newsletter
              </p>
            </div>
            <div className="flex mt-3">
              <input
                type="text"
                placeholder="Enter your name"
                className="h-[50px] w-[250px] placeholder:text-gray-600 placeholder:font-normal rounded-lg p-4 mr-5 border-2 border-gray-700"
              />
              <input
                type="text"
                placeholder="Enter your email"
                className="h-[50px] w-[250px] placeholder:text-gray-600 placeholder:font-normal rounded-lg p-4 mr-5 border-2 border-gray-700"
              />
              <div className="bg-[#3b5d50] rounded-lg h-[50px] w-[70px] relative hover:bg-black">
                <IoSendSharp className="text-3xl text-white absolute top-[10px] right-[18px]" />
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-16">
            <img src={Sofa} className="h-[400px] w-[400px]" />
          </div>
        </div>
        {/* Second Div */}
        <div className="mt-[450px]">
          <p className="font-extrabold text-4xl text-gray-700">Furni..</p>
          <div className="flex justify-between">
            <div className="w-[500px]">
              <p className="text-gray-900">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant
              </p>
              <div className="flex">
                <div className="m-2 border-2 rounded-full text-center h-[40px] w-[40px] relative hover:bg-[#3b5d50] hover:text-white">
                  <FaFacebook className="absolute top-[3px] left-[3px] h-[30px] w-[30px]"/>
                </div>
                <div className="m-2 border-2 rounded-full text-center h-[40px] w-[40px] relative hover:bg-[#3b5d50] hover:text-white">
                  <FaInstagram className="absolute top-[3px] left-[3px] h-[30px] w-[30px]"/>
                </div>
                <div className="m-2 border-2 rounded-full text-center h-[40px] w-[40px] relative hover:bg-[#3b5d50] hover:text-white">
                  <FaTwitter className="absolute top-[3px] left-[3px] h-[30px] w-[30px]"/>
                </div>
                <div  className="m-2 border-2 rounded-full text-center h-[40px] w-[40px] relative hover:bg-[#3b5d50] hover:text-white"><FaLinkedin className="absolute top-[3px] left-[3px] h-[30px] w-[30px]"/></div>
              </div>
            </div>
            <div>
              <ul className="">
                <li className="text-base font-medium hover:text-gray-700 cursor-pointer">About Us</li>
                <li className="text-base font-medium hover:text-gray-700 cursor-pointer mt-2">Services</li>
                <li className="text-base font-medium hover:text-gray-700 cursor-pointer mt-2">Blog</li>
                <li className="text-base font-medium hover:text-gray-700 cursor-pointer mt-2">Contact us</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-base font-medium hover:text-gray-700 cursor-pointer ">Support</li>
                <li className="text-base font-medium hover:text-gray-700 cursor-pointer mt-2">Knowledge base</li>
                <li className="text-base font-medium hover:text-gray-700 cursor-pointer mt-2">Live chat</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-base font-medium hover:text-gray-700 cursor-pointer">Jobs</li>
                <li className="text-base font-medium hover:text-gray-700 cursor-pointer mt-2">Our team</li>
                <li className="text-base font-medium hover:text-gray-700 cursor-pointer mt-2">Leadership</li>
                <li className="text-base font-medium hover:text-gray-700 cursor-pointer mt-2">Privacy Policy</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-base font-medium hover:text-gray-700 cursor-pointer">Nordic Chair</li>
                <li className="text-base font-medium hover:text-gray-700 cursor-pointer mt-2">Kruzo Aero</li>
                <li className="text-base font-medium hover:text-gray-700 cursor-pointer mt-2">Ergonomic Chair</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full border-2 border-gray-300 h-[1px] mt-4">
        </div>
        <div className="flex justify-between mt-4">
            <div>
                <p className="text-gray-700 text-lg w-[500px]">Copyright ©2024. All Rights Reserved. — Designed with love by Untree.co Distributed By <span className="text-xl font-bold text-black">Jay Malasana</span></p>
            </div>
            <div>
                <div className="flex">
                    <p className="text-base font-medium hover:text-gray-700 cursor-pointer mr-10">Terms & Conditions</p>
                    <p className="text-base font-medium hover:text-gray-700 cursor-pointer">Privacy Policy</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;