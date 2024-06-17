// import React from 'react'
import photo from "../Images/couch.png";
import truck from "../Images/truck.svg";
import bag from "../Images/bag.svg";
import support from "../Images/support.svg";
import ret from "../Images/return.svg";
import Product from '../Components/Product'

function Services() {
  return (
    <>
      <div className="flex justify-between bg-[#3b5d50] h-[500px]">
        <div className="flex flex-col relative ml-14">
          <p className="text-white text-[64px] font-bold px-9 pt-16">
            Services
          </p>
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
            className="absolute top-[20px] left-[1050px]  z-10 h-[500px] w-[700px] "
            alt="Couch"
          />
          <img
            src="https://themewagon.github.io/furni/images/dots-light.svg"
            className="absolute bottom-[250px] left-[1450px] z-0"
            alt="Dots"
          />
        </div>
      </div>
      {/* Start */}
      <div className="flex justify-around mt-16">
      <div className="flex flex-col items-start h-[90px] w-[330px]">
        <img src={truck} className="h-12" />
        <p className="font-medium">Fast & Free Shipping</p>
        <p>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate.
        </p>
      </div>
      <div className="flex flex-col items-start h-[90px] w-[330px]">
        <img src={bag} />
        <p className="font-medium">Easy to Shop</p>
        <p>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate.
        </p>
      </div>
      <div className="flex flex-col items-start h-[90px] w-[330px]">
        <img src={support} className="h-12" />
        <p className="font-medium">Fast & Free Shipping</p>
        <p>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate.
        </p>
      </div>
      <div className="flex flex-col items-start h-[90px] w-[330px]">
        <img src={ret} className="" />
        <p className="font-medium">Easy to Shop</p>
        <p>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate.
        </p>
      </div>
      </div>
      <div className="flex justify-around mt-16">
      <div className="flex flex-col items-start h-[90px] w-[330px]">
        <img src={truck} className="h-12" />
        <p className="font-medium">Fast & Free Shipping</p>
        <p>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate.
        </p>
      </div>
      <div className="flex flex-col items-start h-[90px] w-[330px]">
        <img src={bag} />
        <p className="font-medium">Easy to Shop</p>
        <p>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate.
        </p>
      </div>
      <div className="flex flex-col items-start h-[90px] w-[330px]">
        <img src={support} className="h-12" />
        <p className="font-medium">Fast & Free Shipping</p>
        <p>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate.
        </p>
      </div>
      <div className="flex flex-col items-start h-[90px] w-[330px]">
        <img src={ret} className="" />
        <p className="font-medium">Easy to Shop</p>
        <p>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate.
        </p>
      </div>
      </div>
      <div className="mt-44 mb-6 mx-10">
      <Product />
      </div>
    </>
  );
}

export default Services;
