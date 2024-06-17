// import React from "react";
import photo from "../Images/couch.png";


function Home() {
  return (
    <> 
      <div className="flex justify-between bg-[#3b5d50] h-[560px]">
        <div className="flex flex-col relative ml-14">
          <p className="text-white text-[64px] font-bold px-32 pt-16">
            Modern Interior <br /> Design Studio
          </p>
          <p className="text-gray-400 pt-8 px-32 text-xl">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet{" "}
            <br /> velit. Aliquam vulputate velit imperdiet dolor tempor
            tristique.
          </p>
          <div className="flex pt-8 px-32 h-7">
            <button className="border-2 h-10 w-36 rounded-3xl text-center text-white text-lg font-medium hover:bg-yellow-500 hover:text-black hover:border-none hover:text-xl">
              Shop Now
            </button>
            <button className="border-2 h-10 w-36 ml-10 rounded-3xl text-white text-lg font-medium hover:bg-yellow-500 hover:text-black text-center hover:border-none hover:text-xl">
              Explore
            </button>
          </div>
          <img
            src={photo}
            className="absolute top-[20px] left-[950px]  z-10 h-[600px] w-[800px] "
            alt="Couch"
          />
          <img
            src="https://themewagon.github.io/furni/images/dots-light.svg"
            className="absolute bottom-[300px] left-[1550px] z-0"
            alt="Dots"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
