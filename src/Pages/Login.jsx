// import React from 'react'

function Login() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <label>Username :-</label>
        <input
          type="text"
          placeholder="Enter Firstname"
          className="h-[40px] w-[280px] border-[3px] border-[#3b5d50] placeholder:text-gray-700 focus:border-black"
        />
        <label>Password :-</label>
        <input
          type="text"
          placeholder="Enter Lastname"
          className="h-[40px] w-[280px] border-[3px] border-[#3b5d50] placeholder:text-gray-700 focus:border-black"
        />
        <ul>
        <li className="p-5">
          <button className="bg-[#3b5d50] border-2 h-10 w-24 rounded-3xl text-center text-white text-lg font-medium hover:bg-yellow-500 hover:text-black hover:border-none hover:text-xl list-none">
            Login
          </button>
        </li>
        </ul>
      </div>
    </>
  );
}

export default Login;
