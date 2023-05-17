"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import style from "./page.module.css";

const Testimoni = () => {
  return (
    <div
      style={{ height: "80vh" }}
      className="bg-hmi-timberwolf flex justify-center items-center"
    >
      <div className="w-5/6 h-[70%]">
        <div className="grid grid-rows-1 grid-cols-6 gap-4 min-h-full">
          <div className="">01</div>
          <div className="col-span-4 flex flex-col justify-between items-center px-[5rem]">
            <h3 className="text-xl">Testimonials</h3>
            <motion.div
              className="testi-carousel relative flex justify-around w-full h-[170px] items-center"
              style={{ overflow: "hidden" }}
            >
              <motion.div
                className="testi-carousel-item min-w-[130px] min-h-[130px] h-[130px] w-[130px] rounded-full relative"
                style={{ overflow: "hidden" }}
              >
                <Image
                  src="/1.jpg"
                  alt="my image"
                  width="100"
                  height="100"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                ></Image>
                <div className={style.overlay}></div>
              </motion.div>
              <motion.div
                className="testi-carousel-item min-w-[170px] min-h-[170px] h-[170px] w-[170px] rounded-full border-[5px] border-black relative"
                style={{ overflow: "hidden" }}
              >
                <Image
                  src="/2.jpg"
                  alt="my image"
                  width="100"
                  height="100"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                ></Image>
              </motion.div>
              <motion.div
                className="testi-carousel-item min-w-[130px] min-h-[130px] h-[130px] w-[130px] rounded-full relative"
                style={{ overflow: "hidden" }}
              >
                <Image
                  src="/3.jpg"
                  alt="my image"
                  width="300"
                  height="300"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                ></Image>
                <div className={style.overlay}></div>
              </motion.div>
            </motion.div>
          </div>
          <div className="">04</div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
