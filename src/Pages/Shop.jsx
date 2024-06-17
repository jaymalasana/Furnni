// import React from 'react'
import img1 from "../Images/product-1.png";
import img2 from "../Images/product-2.png";
import img3 from "../Images/product-3.png";
import { IoAddCircleOutline } from "react-icons/io5";

function Shop() {
  return (
    <>
      <div className="h-[300px] bg-[#3d5d50]">
        <p className="text-5xl font-bold pt-24 px-24 text-white">SHOP</p>
      </div>
      <div className="main-product flex justify-around mt-11 mx-24">
        <div className="flex flex-col text-center hover:rounded-3xl hover:shadow-2xl">
          <img src={img1} />
          <p className="pt-7 text-xl font-semibold text-gray-800">
            Nordic Chair
          </p>
          <p className="text-lg font-bold text-gray-800">$50.00</p>
          <IoAddCircleOutline
            size={40}
            className="m-auto mt-3 hover:text-gray-500"
          />
        </div>
        <div className="flex flex-col text-center hover:rounded-3xl hover:shadow-2xl">
          <img src={img2} />
          <p className="pt-7 text-xl font-semibold text-gray-800">
            Kruzo Aero Chair
          </p>
          <p className="text-lg font-bold text-gray-800">$78.00</p>
          <IoAddCircleOutline
            size={40}
            className="m-auto mt-3 hover:text-gray-500 "
          />
        </div>
        <div className="flex flex-col text-center hover:rounded-3xl hover:shadow-2xl">
          <img src={img3} />
          <p className="pt-7 text-xl font-semibold text-gray-800">
            Ergonomic Chair
          </p>
          <p className="text-lg font-bold text-gray-800">$43.00</p>
          <IoAddCircleOutline
            size={40}
            className="m-auto mt-3 hover:text-gray-500"
          />
        </div>
        <div className="flex flex-col text-center hover:rounded-3xl hover:shadow-2xl">
          <img src={img1} />
          <p className="pt-7 text-xl font-semibold text-gray-800">
            Nordic Chair
          </p>
          <p className="text-lg font-bold text-gray-800">$50.00</p>
          <IoAddCircleOutline
            size={40}
            className="m-auto mt-3 hover:text-gray-500"
          />
        </div>
      </div>
      <div className="main-product flex justify-around mt-11 mx-24">
        <div className="flex flex-col text-center hover:rounded-3xl hover:shadow-2xl">
          <img src={img2} />
          <p className="pt-7 text-xl font-semibold text-gray-800">
            Kruzo Aero Chair
          </p>
          <p className="text-lg font-bold text-gray-800">$78.00</p>
          <IoAddCircleOutline
            size={40}
            className="m-auto mt-3 hover:text-gray-500 "
          />
        </div>
        <div className="flex flex-col text-center hover:rounded-3xl hover:shadow-2xl">
          <img src={img3} />
          <p className="pt-7 text-xl font-semibold text-gray-800">
            Ergonomic Chair
          </p>
          <p className="text-lg font-bold text-gray-800">$43.00</p>
          <IoAddCircleOutline
            size={40}
            className="m-auto mt-3 hover:text-gray-500"
          />
        </div>
        <div className="flex flex-col text-center hover:rounded-3xl hover:shadow-2xl">
          <img src={img1} />
          <p className="pt-7 text-xl font-semibold text-gray-800">
            Nordic Chair
          </p>
          <p className="text-lg font-bold text-gray-800">$50.00</p>
          <IoAddCircleOutline
            size={40}
            className="m-auto mt-3 hover:text-gray-500"
          />
        </div>
        <div className="flex flex-col text-center hover:rounded-3xl hover:shadow-2xl">
          <img src={img2} />
          <p className="pt-7 text-xl font-semibold text-gray-800">
            Kruzo Aero Chair
          </p>
          <p className="text-lg font-bold text-gray-800">$78.00</p>
          <IoAddCircleOutline
            size={40}
            className="m-auto mt-3 hover:text-gray-500 "
          />
        </div>
      </div>
    </>
  );
}

export default Shop;
