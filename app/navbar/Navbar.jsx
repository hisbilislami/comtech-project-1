'use client'; // digunakan untuk menangani rujukan server 'useState'
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

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
                <li className="p-4" >Card </li>
            </ul>

            {/* Responsive Navbar */}
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={!nav ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-black bg-black" : "fixed left-[-100%]"} >
                <h1 className="w-full text-3xl font-bold text-white m-4">Comtech O.</h1>
                <ul className="uppercase p-4 text-white">
                    <li className="p-4 border-b border-gray">About</li>
                    <li className="p-4 border-b border-gray">Services</li>
                    <li className="p-4 border-b border-gray">Work</li>
                    <li className="p-4 border-b border-gray">Blog</li>
                    <li className="p-4 border-b border-gray">Shop</li>
                    <li className="p-4 border-b border-gray">Contact</li>
                    <li className="p-4 border-b border-gray">Card</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;