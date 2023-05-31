import Image from "next/image";
import { Gloria_Hallelujah, Alfa_Slab_One } from "next/font/google";
const gloriaHalelujahFont = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: ["400"],
});

const alfaSlabOne = Alfa_Slab_One({
  subsets: ["latin-ext"],
  weight: ["400"],
});

export default function Subcription_section() {
  return (
    <div className="h-[60vh] w-full bg-hmi-timberwolf flex justify-center items-center">
      <div className="w-[70%] relative bg-hmi-yellow rounded-3xl p-8 text-center flex flex-col justify-center items-center">
        <p
          className={`${gloriaHalelujahFont.className} uppercase font-bold text-center text-hmi-timberwolf mt-16 mb-8}`}
        >
          we write for ourselves too
        </p>
        <h1 className="text-3xl font-extrabold text-hmi-black  md:text-4xl lg:text-5xl mb-5 text-center m-4">
          Get The Best Updates
        </h1>
        <p className="text-sm text-hmi-black text-center m-4 mb-8 w-[60%]">
          subscribe with your mail id to know the current update in book edition
          at your fingertip with in a minute
        </p>
        <div className="flex justify-center mb-14">
          <input
            type="text"
            className="text-center rounded-l-full h-12 w-96 border-black border-2"
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
            className={`${alfaSlabOne.className} text-hmi-white text-center text-2xl`}
          >
            DONE !
          </div>
        </div>
        <div className="absolute -left-10 bottom-20">
          <Image
            src="/programmer.png"
            width={150}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="absolute -right-10 bottom-10">
          <Image
            src="/laptop.png"
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
