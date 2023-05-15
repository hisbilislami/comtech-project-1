import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
export default function Hero_section() {
  return (
    <div className="relative" style={{ height: "100vh", overflow: "hidden" }}>
      <div
        className="bg-[#FFF0CF] relative"
        style={{ height: "80vh", overflow: "hidden" }}
      >
        <div
          className="flex justify-center items-center"
          style={{ height: "100%" }}
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
          <div className="top-[180px] left-0 mt-[90px]">
            <Image
              className="rounded-[12px] border-black border-[5px] rotate-[-10deg]"
              src="/img.jpg"
              width={200}
              height={150}
              alt="Picture of the author"
            />
          </div>
          <div className="top-[180px] left-[200px] mt-[90px]">
            <Image
              className="rounded-[12px] border-black border-[5px] rotate-[10deg]"
              src="/img1.png"
              width={280}
              height={350}
              alt="Picture of the author"
            />
          </div>
          <div className="top-[180px] left-[400px] mt-[90px]">
            <Image
              className="rounded-[12px] border-black border-[5px] rotate-[20deg]"
              src="/img2.png"
              width={280}
              height={350}
              alt="Picture of the author"
            />
          </div>
          <div className="top-[180px] left-[600px] mt-[90px]">
            <Image
              className="rounded-[12px] border-black border-[5px] rotate-[-10deg]"
              src="/img.jpg"
              width={280}
              height={350}
              alt="Picture of the author"
            />
          </div>
          <div className="top-[180px] left-[800px] mt-[90px]">
            <Image
              className="rounded-[12px] border-black border-[5px] rotate-[10deg]"
              src="/img1.png"
              width={280}
              height={350}
              alt="Picture of the author"
            />
          </div>
          <div className="top-[180px] left-[1000px] mt-[90px]">
            <Image
              className="rounded-[12px] border-black border-[5px] rotate-[20deg]"
              src="/img2.png"
              width={280}
              height={350}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <div className="w-9/12 absolute rounded-3xl bg-white border-[4px] border-black p-6 bottom-[90px] mx-[170px]">
        <p className="text-center mb-[20px] font-mono">trusted by</p>
        <div className="flex items-center justify-center">
          <div style={{ textAlign: "center" }} className="mx-5 block">
            <FaGraduationCap className="mx-auto" />
            <strong>Sitemark</strong>
          </div>

          <div style={{ textAlign: "center" }} className="mx-5 block">
            <FaGraduationCap className="mx-auto" />
            <strong>Sitemark</strong>
          </div>

          <div style={{ textAlign: "center" }} className="mx-5 block">
            <FaGraduationCap className="mx-auto" />
            <strong>Sitemark</strong>
          </div>

          <div style={{ textAlign: "center" }} className="mx-5 block">
            <FaGraduationCap className="mx-auto" />
            <strong>Sitemark</strong>
          </div>

          <div style={{ textAlign: "center" }} className="mx-5 block">
            <FaGraduationCap className="mx-auto" />
            <strong>Sitemark</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
