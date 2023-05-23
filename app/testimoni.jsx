"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import style from "./page.module.css";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { RiSingleQuotesL, RiSingleQuotesR } from "react-icons/ri";

import { Gloria_Hallelujah } from "next/font/google";
const gloriaHallelujahFont = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: ["400"],
});
const Testimoni = () => {
  return (
    <div
      style={{ height: "90vh" }}
      className="bg-hmi-timberwolf flex justify-center items-center"
    >
      <div className="w-5/6 h-[80%]">
        <div className="grid grid-rows-1 grid-cols-6 gap-4 min-h-full relative overflow-hidden">
          <RiSingleQuotesL className="absolute font-extrabold -top-10 left-6 right-[20px] text-[200px] text-hmi-black rotate-[35deg]" />
          <RiSingleQuotesL className="absolute font-extrabold -top-12 left-3 text-[200px] text-[#ff6c2a] rotate-[35deg]" />
          <div className=""></div>
          <div className="col-span-4 flex flex-col justify-between items-center ">
            <h3
              className={`${gloriaHallelujahFont.className} text-hmi-yellow text-2xl`}
            >
              TESTIMONIALS
            </h3>
            <div className="px-[1rem]">
              <motion.div
                className="testi-carousel relative flex justify-around w-full h-[170px] items-center"
                style={{ overflow: "hidden" }}
              >
                <motion.div
                  className="testi-carousel-item min-w-[130px] min-h-[130px] h-[130px] w-[130px] mx-8 rounded-full relative"
                  style={{ overflow: "hidden" }}
                >
                  <Image
                    src="/1.jpg"
                    alt="my image"
                    width="100"
                    height="100"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  ></Image>
                  <div className={style.overlay}></div>
                </motion.div>
                <motion.div
                  className="testi-carousel-item min-w-[170px] min-h-[170px] h-[170px] w-[170px] mx-8 rounded-full border-[5px] border-black relative"
                  style={{ overflow: "hidden" }}
                >
                  <Image
                    src="/2.jpg"
                    alt="my image"
                    width="100"
                    height="100"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  ></Image>
                </motion.div>
                <motion.div
                  className="testi-carousel-item min-w-[130px] min-h-[130px] h-[130px] w-[130px] mx-8 rounded-full relative"
                  style={{ overflow: "hidden" }}
                >
                  <Image
                    src="/3.jpg"
                    alt="my image"
                    width="300"
                    height="300"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  ></Image>
                  <div className={style.overlay}></div>
                </motion.div>
              </motion.div>
            </div>
            <motion.div className="testi-quote text-center">
              <h1 className="text-2xl font-bold">
                <q className="w-full block">
                  If somebody were to ask me to something similiar, I would
                  defenitely recommend you guys!
                </q>
              </h1>
              <p className="text-lg font-semibold mt-8">Theresa Webb</p>
              <p className="mt-3 font-thin">Marketing Coordinator</p>
            </motion.div>
            <div className="testi-carousel-button-wrapper mt-8">
              <button
                type="button"
                className="border-[2px] border-hmi-black2 rounded-lg p-2 mx-4"
              >
                <FiArrowLeft className="text-2xl" />
              </button>
              <button
                type="button"
                className="border-[2px] border-hmi-black2 rounded-lg p-2 mx-4 shadow-[3px_2px_1px_1px] shadow-black"
              >
                <FiArrowRight className="text-2xl" />
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <RiSingleQuotesR className="absolute bottom-[55px] right-3 text-[200px] text-hmi-black rotate-[35deg]" />
            <RiSingleQuotesR className="absolute bottom-[40px] right-0 text-[200px] text-hmi-yellow rotate-[35deg]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
