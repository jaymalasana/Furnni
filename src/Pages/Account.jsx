// import React from 'react'
import { VscAccount } from "react-icons/vsc";

function Account() {
  return (
    <>
      <div className="mx-24 my-16 flex gap-44 ">
        <div className="text-center relative h-[350px] w-[350px] flex flex-col items-center">
          <div className="h-[300px] w-[300px] rounded-full">
            <VscAccount className="absolute h-[300px] w-[300px] text-gray-600"/>
          </div>
          <div className="mt-4 font-bold text-xl">Jay Malasana</div>
        </div>
        <div className="flex flex-col">
            <div className="font-bold mt-3">Firstname: <span className="text-gray-700 ml-3">Jay</span></div>
            <div className="font-bold mt-3">Lastname: <span className="text-gray-700 ml-3">Malasana</span></div>
            <div className="font-bold mt-3">Age: <span className="text-gray-700 ml-3">22</span></div>
            <div className="font-bold mt-3">Email: <span className="text-gray-700 ml-3">jaymalasana051@gmail.com</span></div>
            <div className="font-bold mt-3">Mobile No.: <span className="text-gray-700 ml-3">+91 9104990501</span></div>
            <div className="font-bold mt-3">Address: <span className="text-gray-700 ml-3">Gota, Ahmedabad, 382481</span></div>
        </div>
      </div>
    </>
  );
}

export default Account;
