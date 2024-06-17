// import React from 'react'

function Signup() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <label>Firstname :-</label>
        <input
          type="text"
          placeholder="Enter Firstname"
          className="h-[40px] w-[280px] border-[3px] border-[#3b5d50] placeholder:text-gray-700 focus:border-black"
        />
        <label>Lastname :-</label>
        <input
          type="text"
          placeholder="Enter Lastname"
          className="h-[40px] w-[280px] border-[3px] border-[#3b5d50] placeholder:text-gray-700 focus:border-black"
        />
        <label>Age :-</label>
        <input
          type="number"
          placeholder="Enter Age"
          className="h-[40px] w-[280px] border-[3px] border-[#3b5d50] placeholder:text-gray-700 focus:border-black"
        />
        <label>Email :-</label>
        <input
          type="email"
          placeholder="Enter Email"
          className="h-[40px] w-[280px] border-[3px] border-[#3b5d50] placeholder:text-gray-700 focus:border-black"
        />
        <label>Mobile No. :-</label>
        <input
          type="number"
          placeholder="Enter Mobile No."
          className="h-[40px] w-[280px] border-[3px] border-[#3b5d50] placeholder:text-gray-700 focus:border-black"
        />
        <label>Username :-</label>
        <input
          type="text"
          placeholder="Enter Username"
          className="h-[40px] w-[280px] border-[3px] border-[#3b5d50] placeholder:text-gray-700 focus:border-black"
        />
        <label>Password :-</label>
        <input
          type="text"
          placeholder="Enter Password"
          className="h-[40px] w-[280px] border-[3px] border-[#3b5d50] placeholder:text-gray-700 focus:border-black"
        />
        <ul>
        <li className="p-5">
          <button className="bg-[#3b5d50] border-2 h-10 w-24 rounded-3xl text-center text-white text-lg font-medium hover:bg-yellow-500 hover:text-black hover:border-none hover:text-xl list-none">
            Signup
          </button>
        </li>
        </ul>
      </div>
    </>
  );
}

export default Signup;