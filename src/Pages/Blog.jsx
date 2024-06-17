// import React from 'react'
import post1 from '../Images/post-1.jpg';
import post2 from '../Images/post-2.jpg';
import post3 from '../Images/post-3.jpg';
import photo from '../Images/couch.png'
import Testimonials from './../Components/Testimonials';

function Blog() {
  return (
    <>
      <div className="flex justify-between bg-[#3b5d50] h-[500px]">
        <div className="flex flex-col relative ml-14">
          <p className="text-white text-[64px] font-bold px-9 pt-16">
            Blog
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
            className="absolute top-[20px] left-[1100px]  z-10 h-[500px] w-[700px] "
            alt="Couch"
          />
          <img
            src="https://themewagon.github.io/furni/images/dots-light.svg"
            className="absolute bottom-[250px] left-[1500px] z-0"
            alt="Dots"
          />
        </div>
      </div>
      <div className='mt-5 flex justify-between mx-24 mb-6'>
                <div className=''>
                    <img src={post1} className='h-[250px] w-[480px] rounded-xl hover:brightness-75'/>
                    <p className='text-lg font-medium'>First Time Home Owner Ideas</p>
                    <p className='font-medium'><span className='text-gray-500'>by</span> Kristin Watson <span className='text-gray-500'>on</span> Dec 19, 2021</p>
                </div>
                <div>
                    <img src={post2} className='h-[250px] w-[480px] rounded-xl hover:brightness-75'/>
                    <p className='text-lg font-medium'>How To Keep Your Furniture Clean</p>
                    <p className='font-medium'><span className='text-gray-500'>by</span> Robert Fox <span className='text-gray-500'>on</span> Dec 15, 2021</p>
                </div>
                <div>
                    <img src={post3} className='h-[250px] w-[480px] rounded-xl hover:brightness-75'/>
                    <p className='text-lg font-medium'>Small Space Furniture Apartment Ideas</p>
                    <p className='font-medium'><span className='text-gray-500'>by</span> Kristin Watson <span className='text-gray-500'>on</span> Dec 12, 2021</p>
                </div>
            </div>
      <div className='mt-5 flex justify-between mx-24 mb-6'>
                <div className=''>
                    <img src={post1} className='h-[250px] w-[480px] rounded-xl hover:brightness-75'/>
                    <p className='text-lg font-medium'>First Time Home Owner Ideas</p>
                    <p className='font-medium'><span className='text-gray-500'>by</span> Kristin Watson <span className='text-gray-500'>on</span> Dec 19, 2021</p>
                </div>
                <div>
                    <img src={post2} className='h-[250px] w-[480px] rounded-xl hover:brightness-75'/>
                    <p className='text-lg font-medium'>How To Keep Your Furniture Clean</p>
                    <p className='font-medium'><span className='text-gray-500'>by</span> Robert Fox <span className='text-gray-500'>on</span> Dec 15, 2021</p>
                </div>
                <div>
                    <img src={post3} className='h-[250px] w-[480px] rounded-xl hover:brightness-75'/>
                    <p className='text-lg font-medium'>Small Space Furniture Apartment Ideas</p>
                    <p className='font-medium'><span className='text-gray-500'>by</span> Kristin Watson <span className='text-gray-500'>on</span> Dec 12, 2021</p>
                </div>
            </div>
      <div className='mt-5 flex justify-between mx-24 mb-6'>
                <div className=''>
                    <img src={post1} className='h-[250px] w-[480px] rounded-xl hover:brightness-75'/>
                    <p className='text-lg font-medium'>First Time Home Owner Ideas</p>
                    <p className='font-medium'><span className='text-gray-500'>by</span> Kristin Watson <span className='text-gray-500'>on</span> Dec 19, 2021</p>
                </div>
                <div>
                    <img src={post2} className='h-[250px] w-[480px] rounded-xl hover:brightness-75'/>
                    <p className='text-lg font-medium'>How To Keep Your Furniture Clean</p>
                    <p className='font-medium'><span className='text-gray-500'>by</span> Robert Fox <span className='text-gray-500'>on</span> Dec 15, 2021</p>
                </div>
                <div>
                    <img src={post3} className='h-[250px] w-[480px] rounded-xl hover:brightness-75'/>
                    <p className='text-lg font-medium'>Small Space Furniture Apartment Ideas</p>
                    <p className='font-medium'><span className='text-gray-500'>by</span> Kristin Watson <span className='text-gray-500'>on</span> Dec 12, 2021</p>
                </div>
            </div>
            <Testimonials />
    </>
  )
}

export default Blog