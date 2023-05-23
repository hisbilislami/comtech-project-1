"use client";
import React from "react";
import Image from "next/image";
import { Gloria_Hallelujah } from "next/font/google";

// mendeklarasikan font
const gloriaHalelujahFont = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: ["400"],
});

// History Start
const History = () => {
  return (
    <div className="bg-hmi-bg-history px-10 py-10">
      {/* Description Start */}
      <div className="flex justify-center items-center">
        <h1 className="w-1/2">
          <p
            className={`${gloriaHalelujahFont.className} uppercase font-extrabold text-center text-hmi-orange text-2xl}`}
          >
            Since 2016
          </p>
          <p className="font-serif font-extrabold text-4xl mt-2 text-center">
            Our History
          </p>
          <p className="font-arial mt-5 text-center text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
            architecto excepturi nisi hic amet voluptates quis nam soluta quam
            minima.
          </p>
        </h1>
      </div>
      {/* Description End */}

      {/* Card Start*/}
      <div className="flex justify-center items-stretch mt-10">
        <div className="border-solid border-[#F4D3C3] border-r-8 border-b-8 border-t-2 border-l-2  px-5 py-5 w-80 bg-white rounded-xl mr-5 shadow-xl shadow-[2px_2px_2px_2px_#F4D3C3] ">
          {/* Year */}
          <span className="bg-[#F4D3C3] text-3xl font-medium px-5 py-1.5 rounded-2xl text-hmi-black2 border-solid  border-[#F4D3C]">
            2016
          </span>
          {/* Description */}
          <p className="mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quos,
            sunt in quo deserunt asperiores similique quasi qui assumenda magni!
          </p>
        </div>

        <div className="border-solid border-[#F6D79F] border-r-8 border-b-8 border-t-2 border-l-2 px-5 py-5 w-80 bg-white rounded-xl mr-5 shadow-xl shadow-[2px_2px_2px_2px_#F6D79F]">
          {/* Year */}
          <span className="bg-[#F6D79F] font-sans text-black rounded-2xl font-bold text-3xl font-medium px-5 py-1.5 rounded border border-[#F6D79F]">
            2017
          </span>
          {/* Description */}
          <p className="mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quos,
            sunt in quo deserunt asperiores similique quasi qui assumenda magni!
          </p>
        </div>

        <div className="border-solid border-[#DFE8CC] border-r-8 border-b-8 border-t-2 border-l-2 px-5 py-5 w-80 bg-white rounded-xl mr-5 shadow-xl shadow-[2px_2px_2px_2px_#DFE8CC] ">
          {/* Year */}
          <span className="bg-[#DFE8CC] font-sans text-black rounded-2xl   font-bold text-3xl font-medium px-5 py-1 rounded border border-[#DFE8CC]">
            2018
          </span>
          {/* Description */}
          <p className="mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quos,
            sunt in quo deserunt asperiores similique quasi qui assumenda magni!
          </p>
        </div>

        <div className="border-solid border-[#F9CEA4] border-r-8 border-b-8 border-t-2 border-l-2 px-5 py-5 w-80 bg-white rounded-xl mr-5 shadow-xl shadow-[2px_2px_2px_2px_#F9CEA4] ">
          {/* Year */}
          <span className="bg-[#F9CEA4] font-sans text-black rounded-2xl   font-bold text-3xl font-medium px-5 py-1.5 border border-[#F9CEA4]">
            2019
          </span>
          {/* Description */}
          <p className="mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quos,
            sunt in quo deserunt asperiores similique quasi qui assumenda magni!
          </p>
        </div>

        <div className="border-solid border-[#F3C2BF] border-r-8 border-b-8 border-t-2 border-l-2 px-5 py-5 w-80 bg-white rounded-xl mr-5 shadow-xl shadow-[2px_2px_2px_2px_#F3C2BF]">
          {/* Year */}
          <span className="bg-[#F3C2BF] font-sans text-black   rounded-2xl font-bold text-3xl font-medium px-5 py-1.5 border-lg border-[#F3C2BF]">
            2020
          </span>
          {/* Description */}
          <p className="mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quos,
            sunt in quo deserunt asperiores similique quasi qui assumenda magni!
          </p>
        </div>
      </div>
      {/* Card End */}

      {/* Scroll Start */}
      <div className="pl-24 pt-7">
        {/* Left */}
        <button className="mr-5">
          <Image
            src="/arrow-left.svg"
            width={40}
            height={40}
            alt="left icon button"
          />
        </button>
        {/* Right */}
        <button>
          <Image
            src="/arrow-right.svg"
            width={40}
            height={40}
            alt="right icon button"
          />
        </button>
      </div>
      {/* Scroll End */}
    </div>
  );
};
// History End

export default History;
