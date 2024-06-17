// import React from 'react'
import photo from "../Images/couch.png";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

function Contact() {
  return (
    <>
      <div className="flex justify-between bg-[#3b5d50] h-[500px]">
        <div className="flex flex-col relative ml-14">
          <p className="text-white text-[64px] font-bold px-9 pt-16">Contact</p>
          <p className="text-gray-400 pt-8 px-9 text-xl">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet{" "}
            <br /> velit. Aliquam vulputate velit imperdiet dolor tempor
            tristique.
          </p>
          <div className="flex pt-8 px-9 h-7">
            <button className="border-2 h-10 w-36 rounded-3xl text-center text-white text-lg font-medium hover:bg-yellow-500 hover:text-black hover:border-none hover:text-xl">
              Shop Now
            </button>
            <button className="border-2 h-10 w-36 ml-10 rounded-3xl text-white text-lg font-medium hover:bg-yellow-500 hover:text-black text-center hover:border-none hover:text-xl">
              Explore
            </button>
          </div>
          <img
            src={photo}
            className="absolute top-[20px] left-[1150px]  z-10 h-[500px] w-[700px] "
            alt="Couch"
          />
          <img
            src="https://themewagon.github.io/furni/images/dots-light.svg"
            className="absolute bottom-[250px] left-[1550px] z-0"
            alt="Dots"
          />
        </div>
      </div>
      <div className="mx-[200px]">
        <div className="mt-[80px] ml-80">
          <div className="flex">
            <div className="flex w-[300px] gap-4">
              <div className="h-[50px] w-[50px] bg-[#3b5d50] text-white rounded-xl p-[15px] hover:bg-white hover:text-[#3b5d50] hover:border-2 hover:border-[#3b5d50] cursor-pointer">
                <IoLocationOutline className="h-[20px] w-[20px]  " />
              </div>
              <p className="mt-[2px] text-gray-700">
                43 Raymouth Rd. Baltemoer, London 3910
              </p>
            </div>
            <div className="flex w-[300px] gap-4">
              <div className="h-[50px] w-[50px] bg-[#3b5d50] text-white rounded-xl p-[15px] hover:bg-white hover:text-[#3b5d50] hover:border-2 hover:border-[#3b5d50] cursor-pointer">
                <FaRegEnvelope className="h-[20px] w-[20px] " />
              </div>
              <p className="mt-3">info@yourdomain.com</p>
            </div>
            <div className="flex w-[300px] gap-4">
              <div className="h-[50px] w-[50px] bg-[#3b5d50] text-white rounded-xl p-[15px] hover:bg-white hover:text-[#3b5d50] hover:border-2 hover:border-[#3b5d50] cursor-pointer">
                <BsTelephoneFill className="h-[20px] w-[20px] " />
              </div>
              <p className="mt-3 text-gray-700">+1 294 3925 3939</p>
            </div>
          </div>
        </div>
        <div className="mt-[80px] mx-80 mb-10">
          <div className="flex">
            <div>
              <div>First Name</div>
              <div>
                <input
                  type="text"
                  className="h-[50px] w-[415px]  rounded-lg p-4 mr-5 border-2 border-gray-700"
                />
              </div>
            </div>
            <div>
              <div>Last Name</div>
              <div>
                <input
                  type="text"
                  className="h-[50px] w-[415px] rounded-lg p-4 mr-5 border-2 border-gray-700"
                />
              </div>
            </div>
          </div>
          <div>
            <div>Email address</div>
            <input
              type="text"
              className="h-[50px] w-[852px] rounded-lg p-4 mr-5 border-2 border-gray-700"
            />
          </div>
          <div>
            <div>Message</div>
            <input
              type="text"
              className="h-[250px] w-[852px] rounded-lg p-4 mr-5 border-2 border-gray-700"
            />
          </div>
          <div>
            <button className="w-[180px] h-[50px] rounded-[30px] mt-10 text-xl font-semibold bg-gray-700 text-white hover:bg-gray-900">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
