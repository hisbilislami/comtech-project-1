"use client";
import React from "react";
import Image from "next/image";

const Start_section = () => {
  return (
    // Start_Section
    <>
      <div className="h-[110vh] w-full pt-10 -pb-10 bg-hmi-white flex flex-col justify-center items-center ">
        {/* title */}
        <div className="h-[90%] mb-20 w-1/2 bg-hmi-white  justify-center">
          <h1 className="text-8xl text-hmi-black font-bold text-center ">
            Starting from the right spot
          </h1>

          {/* Image 1*/}
          <div className="absolute mt-60 ml-20 ">
            <Image
              className="rounded-2xl border-solid border-black border-4 h-64 scale-100 -rotate-12"
              src="/1s.jpeg"
              width="240"
              height="10"
              alt="Picture of the author"
            />
          </div>
          {/* Image 2*/}
          <div className="absolute mt-20 ml-32">
            <Image
              className="rounded-2xl border-solid border-black border-4 h-48  scale-100 rotate-12"
              src="/2s.jpeg"
              width="180"
              height="10"
              alt="Picture of the author"
            />
          </div>
          {/* Image 3*/}
          <div className="absolute -mt-8 ml-24">
            <Image
              className="rounded-2xl border-solid border-black border-4 h-44 ml-96 scale-100 rotate-12"
              src="/3s.jpeg"
              width="180"
              height="10"
              alt="Picture of the author"
            />
          </div>
          {/* Image 4*/}
          <div className="absolute mt-52 ml-96">
            <Image
              className="rounded-2xl border-solid border-black border-4 h-60 ml-20 scale-100 rotate-6"
              src="/4s.jpeg"
              width="200"
              height="10"
              alt="Picture of the author"
            />
          </div>
          {/* Image 5*/}
          <div className="absolute ml-72 mt-2">
            <Image
              className="rounded-2xl border-solid border-black border-4 h-80 scale-100 rotate-0"
              src="/5s.jpeg"
              width="240"
              height="50"
              alt="Picture of the author"
            />
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-center items-center bg-hmi-white my-10">
          <button
            type="button"
            className="p-5 px-14 font-extrabold border-[2px] border-hmi-black2  rounded-full mx-4 shadow-[3px_2px_1px_1px] shadow-black inset-x-0 bottom-0 bg-hmi-yellow "
          >
            Load More
          </button>
        </div>
      </div>
    </>
    // End Start_Section
  );
};

export default Start_section;
