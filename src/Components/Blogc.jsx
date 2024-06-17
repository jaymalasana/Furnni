// import React from 'react'
import post1 from "../Images/post-1.jpg";
import post2 from "../Images/post-2.jpg";
import post3 from "../Images/post-3.jpg";

function Blogc() {
  return (
    <>
      <div className="flex flex-col mr-36 ml-36 mt-5">
        <div className="flex justify-between">
          <p className="text-3xl font-bold">Recent Blog</p>
          <p className="text-xl font-normal mr-2 hover:underline">
            View All Posts
          </p>
        </div>
        <div className="mt-5 flex justify-between">
          <div className="">
            <img
              src={post1}
              className="h-[290px] w-[480px] rounded-xl hover:brightness-75"
            />
            <p className="text-lg font-medium">First Time Home Owner Ideas</p>
            <p className="font-medium">
              <span className="text-gray-500">by</span> Kristin Watson{" "}
              <span className="text-gray-500">on</span> Dec 19, 2021
            </p>
          </div>
          <div>
            <img
              src={post2}
              className="h-[290px] w-[480px] rounded-xl hover:brightness-75"
            />
            <p className="text-lg font-medium">
              How To Keep Your Furniture Clean
            </p>
            <p className="font-medium">
              <span className="text-gray-500">by</span> Robert Fox{" "}
              <span className="text-gray-500">on</span> Dec 15, 2021
            </p>
          </div>
          <div>
            <img
              src={post3}
              className="h-[290px] w-[480px] rounded-xl hover:brightness-75"
            />
            <p className="text-lg font-medium">
              Small Space Furniture Apartment Ideas
            </p>
            <p className="font-medium">
              <span className="text-gray-500">by</span> Kristin Watson{" "}
              <span className="text-gray-500">on</span> Dec 12, 2021
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogc;
