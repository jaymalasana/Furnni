// import React from 'react'
import { ImSad } from "react-icons/im";

function Error() {
  return (
    <>
        <div className="my-36 flex justify-center ">
        <ImSad className="h-[80px] w-[80px] mr-4 text-red-600 no-underline hover:underline"/>
        <p className="text-7xl flex font-semibold text-gray-700 no-underline hover:underline"><span className="text-red-600 mr-2">OOPS!</span> Page not found</p>
        <ImSad className="h-[80px] w-[80px] ml-4 text-red-600 no-underline hover:underline"/>
        </div>
    </>
  )
}

export default Error