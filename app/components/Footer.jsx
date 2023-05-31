import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import { Gloria_Hallelujah } from "next/font/google";

// mendeklarasikan font
const gloriaHalelujahFont = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: ["400"],
});

// Footer Start
const Footer = () => {
  return (
    <>
      <div className="h-1/2 w-full flex md:flex-row flex-col justify-around items-start py-14 px-16 text-hmi-battleship-gray bg-hmi-black">
        {/* Challenge */}
        <div>
          <h1 className="flex-gap-6 pb-5 text-3xl text-hmi-white font-bold ">
            Got a challenge?
          </h1>
          <p className="font-semibold max-w-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
            similique! Lorem, ipsum. Ipsam, architecto.
          </p>
        </div>

        {/* Col-Pages */}
        <div className="px-5">
          <ul>
            <h1
              className={`${gloriaHalelujahFont.className} text-hmi-white text-md font-bold pb-5`}
            >
              PAGES
            </h1>
            <li className="py-3 text-sm font-semibold hover:text-hmi-white cursor-pointer">
              About
            </li>
            <li className="py-3 text-sm font-semibold hover:text-hmi-white cursor-pointer">
              Services
            </li>
            <li className="py-3 text-sm font-semibold hover:text-hmi-white cursor-pointer">
              Work
            </li>
            <li className="py-3 text-sm font-semibold hover:text-hmi-white cursor-pointer">
              Blog
            </li>
            <li className="py-3 text-sm font-semibold hover:text-hmi-white cursor-pointer">
              Shop
            </li>
            <li className="py-2 text-sm font-semibold hover:text-hmi-white cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Col-Template */}
        <div className="px-5">
          <ul>
            <h1
              className={`${gloriaHalelujahFont.className} uppercase  text-hmi-white text-medium font-bold text-base  pb-5`}
            >
              TEMPLATE
            </h1>
            <li className="py-2 text-sm font-semibold hover:text-hmi-white cursor-pointer">
              {" "}
              Licensing
            </li>
            <li className="py-2 text-sm font-semibold hover:text-hmi-white cursor-pointer">
              {" "}
              Services
            </li>
            <li className="py-2 text-sm font-semibold hover:text-hmi-white cursor-pointer">
              {" "}
              Change Log
            </li>
            <li className="py-2 text-sm font-semibold hover:text-hmi-white cursor-pointer">
              {" "}
              Style
            </li>
          </ul>
        </div>

        {/* Col-Social */}
        <div className="px-5">
          <h1
            className={`${gloriaHalelujahFont.className} uppercase  text-hmi-white text-medium font-bold text-base  pb-5`}
          >
            SOCIAL
          </h1>
          <p className="font-semibold">Our Channels</p>
          <ul>
            <div className="flex gap-1 pb-5">
              <FaFacebook
                className="text-2xl cursor-pointer hover:text-hmi-white py-2"
                size={40}
              />
              <FaTwitter
                className="text-2xl cursor-pointer hover:text-hmi-white py-2"
                size={40}
              />
              <FaInstagram
                className="text-2xl cursor-pointer hover:text-hmi-white py-2"
                size={40}
              />
            </div>
          </ul>
        </div>
      </div>

      <hr />

      <div className="h-1/2 w-full flex md:flex-row flex-col justify-between items-start text-hmi-battleship-gray bg-hmi-black px-16">
        <div className="p-5 text-left">
          <h1 className="font-semibold w-52 inline-flex gap-1 justify-center items-center">
            Cralted with <FaHeart /> by Azwedo{" "}
          </h1>
        </div>
        <div className="p-5">
          <h1 className="font-semibold text-right">Powered by: HMI </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
