import Image from "next/image";
import { Gloria_Hallelujah } from "next/font/google";
const gloriaHalelujahFont = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Subcription_section() {
  return (
    <div className="h-[100vh] w-full mb-20 bg-hmi-timberwolf">
      <div className="m-40 relative bg-hmi-orange rounded-3xl p-8">
        <p
          className={`${gloriaHalelujahFont.className} uppercase font-bold text-center text-hmi-white mt-16 mb-8}`}
        >
          we write for ourselves too
        </p>
        <h1 className="text-3xl font-extrabold text-hmi-black md:text-4xl lg:text-5xl mb-5 text-center text-center m-8">
          Get The Best Updates
        </h1>
        <p className="text-sm text-hmi-black text-center m-8">
          subscribe with your mail id to know the current update in book edition
          at your fingertip with in a minute
        </p>
        <div className="flex justify-center mb-14">
          <input
            type="text"
            className="text-center rounded-l-full h-12 w-96"
            placeholder="email@example.com"
          />
          <button
            type="button"
            className="text-center rounded-r-full h-12 w-32 bg-hmi-black text-hmi-white"
          >
            subscribe
          </button>
        </div>
        <div className="w-32 h-12 absolute top-[-50px] right-40 translate-y-6 shadow-lg border-black border bg-[#f5e085]"></div>
        <div className="w-32 h-12 absolute top-[-55px] right-[165px] translate-y-6 shadow-lg border-black border bg-[#e6a7fb] flex items-center justify-center">
          <div
            className={`text-hmi-white text-center text-2xl}`}
          >
            DONE !
          </div>
        </div>
        <div className="absolute">
          <div className="mt-[-220px] ml-[-110px]">
            <Image
              src="/programmer.png"
              width={150}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div className="mt-[-60px] ml-[800px]">
            <Image
              src="/laptop.png"
              width={150}
              height={150}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
