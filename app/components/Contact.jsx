import React from "react";
import { Bruno_Ace } from "next/font/google";
const brunoAceFont = Bruno_Ace({
  subsets: ["latin"],
  weight: ["400"],
});

function Contact() {
  return (
    <div className="w-full h-[6rem] bg-hmi-white flex justify-between items-center px-40">
      <div className="flex justify-between items-center">
        <h1
          className={`${brunoAceFont.className} text-4xl font-extrabold text-hmi-black2 mr-2`}
        >
          OSlO{" "}
        </h1>
        <sub className="dot h-[10px] w-[10px] rounded-full bg-hmi-reseda-green">
          &nbsp;
        </sub>
      </div>
      <button className="rounded-full bg-hmi-yellow p-5 border-none w-44 text-md font-bold">
        Contact US
      </button>
    </div>
  );
}

export default Contact;
