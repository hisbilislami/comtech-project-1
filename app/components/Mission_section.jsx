import { FaCheck } from "react-icons/fa";
import { Gloria_Hallelujah } from "next/font/google";
const gloriaHalelujahFont=Gloria_Hallelujah({
  subsets:['latin'],
  weight:['400'],
});
export default function Mission_section() {
  return (
    <div className="m-40 relative">
      <div className="border-8 border-black rounded-3xl">
        <p className={`${gloriaHalelujahFont.className} uppercase font-bold text-center text-[#F9DBC7] mt-16 mb-8}`}>
          Our ultimate mission !!
        </p>
        <h1 className="text-3xl font-extrabold text-hmi-black md:text-4xl lg:text-5xl mb-5 text-center text-center m-8">
          Provide you with growth needed services.
        </h1>
        <p className="text-sm text-[#B8B5B2] text-center m-8">
          lorem ipsum sit amet, consectetur adipiscing elit. Meecenas massa
          massa id arcu blandit dignissim costum
        </p>
        <div className="columns-2">
          <div className="w-full mx-8">
            <div className="flex">
              <FaCheck className="text-3xl items-center bg-[#DDB666] rounded-full text-black p-[10px] w-[60px] h-[45px] border-[4px] border-black" />
              <div className="mx-4">
                <strong className="font-bold text-2xl">
                  Understanding your business and target audience
                </strong>
                <p className="mt-4 mb-20 text-[#C3BFBC]">
                  lorem insum dolor sit amet, consectetur adipiscing elit.
                  Meecenas massa massa id arcu blandit dignissim costum
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mx-8">
            <div className="flex">
              <FaCheck className="text-3xl items-center bg-[#DDB666] rounded-full text-black p-[10px] w-[60px] h-[45px] border-[4px] border-black" />
              <div className="mx-4">
                <strong className="font-bold text-2xl">
                  We build strategy upon thorough analysis
                </strong>
                <p className="mt-4 mb-20 text-[#C3BFBC]">
                  lorem insum dolor sit amet, consectetur adipiscing elit.
                  Meecenas massa massa id arcu blandit dignissim costum
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mx-8">
            <div className="flex">
              <FaCheck className="text-3xl items-center bg-[#DDB666] rounded-full text-black p-[10px] w-[60px] h-[45px] border-[4px] border-black" />
              <div className="mx-4">
                <strong className="font-bold text-2xl">
                  Following best practices form implementation
                </strong>
                <p className="mt-4 mb-20 text-[#C3BFBC]">
                  lorem insum dolor sit amet, consectetur adipiscing elit.
                  Meecenas massa massa id arcu blandit dignissim costum
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mx-8">
            <div className="flex">
              <FaCheck className="text-3xl items-center bg-[#DDB666] rounded-full text-black p-[10px] w-[60px] h-[45px] border-[4px] border-black" />
              <div className="mx-4">
                <strong className="font-bold text-2xl">
                  We build strategy upon thorough analysis
                </strong>
                <p className="mt-4 mb-20 text-[#C3BFBC]">
                  lorem insum dolor sit amet, consectetur adipiscing elit.
                  Meecenas massa massa id arcu blandit dignissim costum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FF6914] w-32 h-32 absolute top-0 left-[-50px] translate-y-6 skew-y-3 origin-bottom -rotate-12 shadow-lg shadow-black space-x-8"></div>
      <div className="bg-[#35B46D] w-32 h-32 absolute top-[-50px] right-10 translate-y-6 skew-y-3 shadow-lg shadow-black"></div>
      <div className="bg-[#E7AF44] w-32 h-32 absolute bottom-[-70px] right-[-20px] translate-y-6 skew-y-3 shadow-lg shadow-black"></div>
      {/* <div class="relative w-[100px] h-[100px] before:content-[''] before:absolute before:top-0 before:left-[50px] before:h-[80px] before:w-[50px] before:rounded-t-[50px] before:rounded-r-[50px] before:rounded-b-0 before:rounded-l-0 before:bg-black before:-rotate-45 before:origin-[0_100%] after:content-[''] after:absolute after:top-0 after:left-0 after:h-[80px] after:w-[50px] after:rounded-t-[50px] after:rounded-r-[50px] after:rounded-b-0 after:rounded-l-0 after:bg-black after:rotate-45 after:origin-[100%_100%]"></div> */}
    </div>
  );
}
