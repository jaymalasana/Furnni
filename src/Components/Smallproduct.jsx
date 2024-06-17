// import React from 'react'
import img1 from "../Images/product-1.png";
import img2 from "../Images/product-2.png";
import img3 from "../Images/product-3.png";

function Smallproduct() {
  return (
    <>
     <div className='mt-96 mr-32 ml-32 '>
        <div className='flex justify-between'>
            <div className="flex h-[120px] w-[480px] hover:rounded-3xl hover:shadow-2xl m-4">
                <div>
                    <img src={img1} className="h-[120px] w-[120px]"/>
                </div>
                <div className="flex flex-col ml-3">
                    <p>Nordic Chair</p>
                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                    <p className="hover:text-blue-600 cursor-pointer">Read More</p>
                </div>
            </div>
            <div className="flex h-[120px] w-[480px] hover:rounded-3xl hover:shadow-2xl m-4">
                <div>
                    <img src={img2} className="h-[120px] w-[120px]"/>
                </div>
                <div className="flex flex-col ml-3 ">
                    <p>Kruzo Aero Chair</p>
                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                    <p className="hover:text-blue-600 cursor-pointer">Read More</p>
                </div>
            </div>
            <div className="flex h-[120px] w-[480px] hover:rounded-3xl hover:shadow-2xl m-4">
                <div>
                    <img src={img3} className="h-[120px] w-[120px]"/>
                </div>
                <div className="flex flex-col ml-3">
                    <p>Ergonomic Chair</p>
                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                    <p className="hover:text-blue-600 cursor-pointer">Read More</p>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Smallproduct;