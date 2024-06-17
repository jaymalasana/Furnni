// import React from 'react'
import img1 from "../Images/product-1.png";
import img2 from "../Images/product-2.png";
import img3 from "../Images/product-3.png";
import { IoAddCircleOutline } from "react-icons/io5";

function Product() {
  return (
    <>
      <div className="main-product w-full flex justify-around mt-11">
        <div className="pl-16  w-[600px]">
          <div>
            <p className="text-3xl font-semibold">
              Crafted with <br /> excellent material.
            </p>
          </div>
          <div>
            <p className="text-lg mt-5">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
          </div>
          <div>
            <button className="border-2 border-gray-950 h-10 w-36 rounded-3xl text-center bg-gray-800 text-white text-lg font-medium mt-5 hover:bg-gray-950 hover:text-white hover:border-none ">
              Explore
            </button>
          </div>
        </div>
        <div className="flex flex-col text-center hover:rounded-3xl hover:shadow-2xl">
          <img src={img1} />
          <p className="pt-7 text-xl font-semibold text-gray-800">Nordic Chair</p>
          <p className="text-lg font-bold text-gray-800">$50.00</p>
          <IoAddCircleOutline size={40} className="m-auto mt-3 hover:text-gray-500"/>
        </div>
        <div className="flex flex-col text-center hover:rounded-3xl hover:shadow-2xl">
          <img src={img2} />
          <p className="pt-7 text-xl font-semibold text-gray-800">Kruzo Aero Chair</p>
          <p className="text-lg font-bold text-gray-800">$78.00</p>
          <IoAddCircleOutline size={40} className="m-auto mt-3 hover:text-gray-500 "/>
        </div>
        <div className="flex flex-col text-center hover:rounded-3xl hover:shadow-2xl">
          <img src={img3} />
          <p className="pt-7 text-xl font-semibold text-gray-800">Ergonomic Chair</p>
          <p className="text-lg font-bold text-gray-800">$43.00</p>
          <IoAddCircleOutline size={40} className="m-auto mt-3 hover:text-gray-500"/>
        </div>
      </div>
    </>
  );
}

export default Product;
