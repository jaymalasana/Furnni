// import React from 'react'
import why from "../Images/why-choose-us-img.jpg";
import truck from "../Images/truck.svg";
import bag from "../Images/bag.svg";
import support from "../Images/support.svg";
import ret from "../Images/return.svg";

function Whywe() {
  return (
    <>
      <div className="why flex mt-32 relative">
        <div className="ml-24 pt-32">
          <p className="text-4xl font-semibold">Why Choose Us</p>
          <p className="text-lg pt-5">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. <br /> Aliquam vulputate velit imperdiet dolor tempor
            tristique.
          </p>
          <div className="flex mt-6 gap-4">
            <div className="flex flex-col items-start h-[90px] w-[330px]">
              <img src={truck} className="h-12"/>
              <p>Fast & Free Shipping</p>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="flex flex-col items-start h-[90px] w-[330px]">
              <img src={bag} />
              <p>Easy to Shop</p>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>

          <div className="flex mt-14 gap-4">
            <div className="flex flex-col items-start h-[90px] w-[330px]">
              <img src={support} className="h-12"/>
              <p>Fast & Free Shipping</p>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="flex flex-col items-start h-[90px] w-[330px]">
              <img src={ret} className=""/>
              <p>Easy to Shop</p>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src={why}
            className="h-[550px] w-[450px] absolute top-[112px] right-[160px] z-10 rounded-2xl"
          />
          <img
            src="https://themewagon.github.io/furni/images/dots-yellow.svg"
            className="absolute top-[0px] right-[500px] z-0"
          />
        </div>
      </div>
    </>
  );
}

export default Whywe;
