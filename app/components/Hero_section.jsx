import Image from "next/image";
import { FaIntercom } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaChalkboard } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import Navbar from "./Navbar";
import { Gloria_Hallelujah } from "next/font/google";
const gloriaHalelujahFont = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Hero_section() {
  return (
    <div className="relative" style={{ height: "100vh", overflow: "hidden" }}>
      <div
        className="bg-hmi-papaya-whip relative"
        style={{ height: "90vh", overflow: "hidden" }}
      >
        <Navbar />
        <div
          className="flex justify-center items-center"
          style={{ height: "60%" }}
        >
          <div>
            <h1 className="text-4xl font-extrabold text-hmi-black md:text-5xl lg:text-6xl mb-5 text-center">
              Comtech Project <br></br> Universitas Nurul Jadid
            </h1>
            <p className="text-center text-lg">
              Komisariat Teknik Universitas Nurul Jadid
            </p>
          </div>
        </div>
        <div
          className="absolute inline-flex"
          style={{ height: "100px", bottom: "150px" }}
        >
          <div className="mt-[50px]">
            <Image
              className="rounded-[12px] border-black border-[5px] rotate-[-5deg]"
              src="/gambar.png"
              width={280}
              height={350}
              alt="Picture of the author"
            />
          </div>
          <div className="mt-[70px]">
            <Image
              className="rounded-[12px] border-black border-[5px] rotate-[-5deg]"
              src="/gambar1.png"
              width={280}
              height={350}
              alt="Picture of the author"
            />
          </div>
          <div className="mt-[70px]">
            <Image
              className="rounded-[12px] border-black border-[5px]"
              src="/gambar2.png"
              width={280}
              height={350}
              alt="Picture of the author"
            />
          </div>
          <div className="mt-[70px]">
            <Image
              className="rounded-[12px] border-black border-[5px] rotate-[5deg]"
              src="/gambar3.png"
              width={280}
              height={350}
              alt="Picture of the author"
            />
          </div>
          <div className="mt-[50px]">
            <Image
              className="rounded-[12px] border-black border-[5px] rotate-[5deg]"
              src="/gambar4.png"
              width={280}
              height={350}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <div className="w-9/12 absolute rounded-3xl bg-white border-[4px] border-black p-6 bottom-[1px] mx-[170px]">
        <p className={`${gloriaHalelujahFont.className} text-center mb-[20px] font-mono`}>trusted by</p>
        <div className="flex items-center justify-center">
          <div style={{ textAlign: "center" }} className="mx-10 block">
            <FaExpandArrowsAlt className="mx-auto text-2xl" />
            <strong>Sitemark</strong>
          </div>

          <div style={{ textAlign: "center" }} className="mx-10 block">
            <FaBookReader className="mx-auto text-2xl" />
            <strong>Greenish</strong>
          </div>

          <div style={{ textAlign: "center" }} className="mx-10 block">
            <FaChalkboard className="mx-auto text-2xl" />
            <strong>Product</strong>
          </div>

          <div style={{ textAlign: "center" }} className="mx-10 block">
            <FaBookOpen className="mx-auto text-2xl" />
            <strong>Biossom</strong>
          </div>

          <div style={{ textAlign: "center" }} className="mx-10 block">
            <FaIntercom className="mx-auto text-2xl" />
            <strong>Glossy</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
