// import React from 'react'
import photo from "../Images/couch.png";
import Testimonials from "./../Components/Testimonials";
import Whywe from "./../Components/Whywe";
import person1 from "../Images/person_1.jpg";
import person2 from "../Images/person_2.jpg";
import person3 from "../Images/person_3.jpg";
import person4 from "../Images/person_4.jpg";

function About() {
  return (
    <>
      <div className="flex justify-between bg-[#3b5d50] h-[500px]">
        <div className="flex flex-col relative ml-14">
          <p className="text-white text-[64px] font-bold px-9 pt-16">
            About Us
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
            className="absolute top-[60px] left-[1100px]  z-10 h-[500px] w-[900px] "
            alt="Couch"
          />
          <img
            src="https://themewagon.github.io/furni/images/dots-light.svg"
            className="absolute bottom-[250px] left-[1500px] z-0"
            alt="Dots"
          />
        </div>
      </div>
      <Whywe />
      <div className="flex mt-52 justify-between mx-32">
        <div className="flex flex-col w-[350px]  hover:border-2 hover:rounded-2xl p-5 ">
          <img src={person1} className="h-[300px] w-[300px] " />
          <p className="text-xl font-medium underline hover:no-underline cursor-pointer mt-4">
            Lawson Arnold
          </p>
          <p className="text-gray-600">CEO, Founder, Atty.</p>
          <p className="text-gray-600 mt-3">
            Separated they live in. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </p>
          <p className="text-lg font-medium underline hover:no-underline cursor-pointer mt-3">
            Learn More
          </p>
        </div>
        <div className="flex flex-col w-[350px]  hover:border-2 hover:rounded-2xl p-5 ">
          <img src={person2} className="h-[300px] w-[300px] " />
          <p className="text-xl font-medium underline hover:no-underline cursor-pointer mt-4">
            Jeremy Walker
          </p>
          <p className="text-gray-600">CEO, Founder, Atty.</p>
          <p className="text-gray-600 mt-3">
            Separated they live in. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </p>
          <p className="text-lg font-medium underline hover:no-underline cursor-pointer mt-3">
            Learn More
          </p>
        </div>
        <div className="flex flex-col w-[350px]  hover:border-2 hover:rounded-2xl p-5 ">
          <img src={person3} className="h-[300px] w-[300px] " />
          <p className="text-xl font-medium underline hover:no-underline cursor-pointer mt-4">
            Patrik White
          </p>
          <p className="text-gray-600">CEO, Founder, Atty.</p>
          <p className="text-gray-600 mt-3">
            Separated they live in. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </p>
          <p className="text-lg font-medium underline hover:no-underline cursor-pointer mt-3">
            Learn More
          </p>
        </div>
        <div className="flex flex-col w-[350px]  hover:border-2 hover:rounded-2xl p-5 ">
          <img src={person4} className="h-[300px] w-[300px] " />
          <p className="text-xl font-medium underline hover:no-underline cursor-pointer mt-4">
            Kathryn Ryan
          </p>
          <p className="text-gray-600">CEO, Founder, Atty.</p>
          <p className="text-gray-600 mt-3">
            Separated they live in. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </p>
          <p className="text-lg font-medium underline hover:no-underline cursor-pointer mt-3">
            Learn More
          </p>
        </div>
      </div>
      <Testimonials />
    </>
  );
}

export default About;
