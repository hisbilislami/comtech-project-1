"use client"; // digunakan untuk menangani rujukan server 'useState'
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 max-w-[1220px] mx-auto mt-10 px-10 text-black bg-white rounded-2xl">
      <h1 className="w-full text-3xl font-bold text-[#070606ff]">Comtech O.</h1>
      <ul className="hidden md:flex font-bold">
        <li className="p-4">About</li>
        <li className="p-4">Services</li>
        <li className="p-4">Work</li>
        <li className="p-4">Blog</li>
        <li className="p-4">Shop</li>
        <li className="p-4">Contact</li>
        <li className="p-4 flex">
          Card 
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
          </span>
        </li>
        
      </ul>
    </div>
  );
};

export default Navbar;
