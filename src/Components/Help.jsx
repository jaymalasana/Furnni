// import React from "react";
import first from "../Images/img-grid-1.jpg";
import second from "../Images/img-grid-2.jpg";
import third from "../Images/img-grid-3.jpg";

function Help() {
  return (
    <>
      <div className="flex mt-64 ml-24">
        <div className="flex flex-col w-[1000px] relative">
          <div>
            <img
              src="https://themewagon.github.io/furni/images/dots-green.svg"
              className="h-[220px] w-[220px] rounded-2xl"
            />
          </div>
          <div>
            <img
              src={first}
              className="h-[500px] w-[400px] absolute top-[85px] left-[120px] rounded-2xl"
            />
          </div>
          <div>
            <img
              src={second}
              className="h-[250px] w-[250px] absolute top-[85px] left-[530px] rounded-2xl"
            />
          </div>
          <div>
            <img
              src={third}
              className="h-[350px] w-[350px] absolute top-[340px] left-[430px] rounded-2xl"
            />
          </div>
        </div>
        <div className="mt-[85px] w-[1600px] ml-[450px] mr-24 flex flex-col items-start">
          <p className="text-black font-semibold text-3xl">
            We Help You Make Modern Interior Design
          </p>
          <p className="mt-5 text-base text-gray-700">
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique. Pellentesque habitant morbi
            tristique senectus et netus et malesuada
          </p>
          <div className="flex justify-between mt-5 text-lg text-gray-700">
            <ul className="list-disc flex justify-between">
              <li className="ml-4">
                Donec vitae odio quis nisl dapibus malesuada
              </li>
              <li className="">Donec vitae odio quis nisl dapibus malesuada</li>
            </ul>
          </div>
          <div className="flex justify-between mt-5 text-lg text-gray-700">
            <ul className="list-disc flex justify-between">
              <li className="ml-4">
                Donec vitae odio quis nisl dapibus malesuada
              </li>
              <li className="">Donec vitae odio quis nisl dapibus malesuada</li>
            </ul>
          </div>
          <div>
            <button className="border-2 border-gray-950 h-10 w-36 rounded-3xl text-center bg-gray-800 text-white text-lg font-medium mt-5 hover:bg-gray-950 hover:text-white hover:border-none">
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
