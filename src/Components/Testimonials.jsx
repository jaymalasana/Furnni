// import React from 'react'
import person1 from '../Images/person-1.png'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function Testimonials() {
  return (
    <>
        <div className="mt-20 flex justify-center">
         <div className='border-2 border-black hover:border-transparent h-[50px] w-[50px] m-auto rounded-full relative hover:bg-[#3b5d50]'>
            <IoArrowBackCircleOutline className='absolute top-[7px] left-[8px] size-8'/>
         </div> 
         <div className="flex flex-col justify-center items-center w-[800px]">
            <h1 className='font-bold text-3xl'>Testimonials</h1>
            <p className='text-center mt-5'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
            <img src={person1} className='h-[100px] w-[100px] rounded-full mt-5'/>
            <p className='font-semibold text-black'>Maria Jones</p>
            <p className='font-normal text-gray-700'>CEO, Co-Founder, XYZ Inc.</p>
         </div>
         <div className='border-2 border-black hover:border-transparent h-[50px] w-[50px] m-auto rounded-full relative hover:bg-[#3b5d50]'>
            <IoArrowForwardCircleOutline className='absolute top-[7px] left-[8px] size-8'/>
         </div>
        </div>
    </>
  )
}

export default Testimonials