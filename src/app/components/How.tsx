"use client";
import { motion } from "framer-motion";

const How = () => {
  return (
    <div
      id="how"
      className="px-[2rem] py-[2rem] lg:px-[4rem] lg:py-[3rem] flex flex-col-reverse justify-center items-end sm:items-center md:items-stretch md:flex-row m-4 rounded-3xl bg-gradient-to-b from-[#006699] to-[#09415D] overflow-hidden"
    >
      <motion.div
        className="relative sm:min-w-1/2 max-w-[33rem]"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        // transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div
          className="top-28 right-48 w-[18rem] h-[24rem] lg:w-[28rem] lg:h-[32rem] rounded-3xl bg-center bg-no-repeat bg-cover transition"
          style={{
            backgroundImage: 'url("../how-1.png")',
          }}
          // initial={{ x: 100, opacity: 0 }}
          // whileInView={{ x: 0, opacity: 1 }}
          // viewport={{ once: false, amount: 0.1 }}
          // transition={{ ease: "easeOut", delay: 0.2 }}
        />
        <motion.div
          className="absolute top-12 right-32 md:top-16 lg:top-20 md:right-28 lg:right-44 w-[16rem] h-[20rem] md:w-[14rem] lg:w-[22rem] lg:h-[28rem] rounded-3xl bg-center bg-no-repeat bg-cover transition"
          style={{
            backgroundImage: 'url("../how-2.png")',
          }}
          // initial={{ x: 100, opacity: 0 }}
          // whileInView={{ x: 0, opacity: 1 }}
          // viewport={{ once: false, amount: 0.1 }}
          // transition={{ ease: "easeOut", delay: 0.4 }}
        />
      </motion.div>
      <div className="flex flex-col gap-10">
        <p className="text-2xl lg:text-4xl font-semibold ms-10 text-[#EFEFF8]">
          How SAIL works?
        </p>
        <div className="flex flex-1 gap-4">
          <img src="../timeline.svg" className="h-[90%] mt-3" alt="" />
          <div className="grid grid-cols-[auto,1fr] place-content-between gap-y-10">
            <p className="p-2 text-sm lg:text-xl text-[#EFEFF8] font-semibold rounded-s-lg bg-[#09415D]">
              Development
            </p>
            <p className="p-2 text-[10px] md:text-[12px] lg:text-[14px] xl:text-[20px] text-[#EFEFF8] rounded-e-lg bg-[#09415D]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <p className="p-2 text-sm lg:text-xl text-[#EFEFF8] font-semibold rounded-s-lg ">
              Development
            </p>
            <p className="p-2 text-[10px] md:text-[12px] lg:text-[14px] xl:text-[20px] text-[#EFEFF8] rounded-e-lg ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <p className="p-2 text-sm lg:text-xl text-[#EFEFF8] font-semibold rounded-s-lg ">
              Development
            </p>
            <p className="p-2 text-[10px] md:text-[12px] lg:text-[14px] xl:text-[20px] text-[#EFEFF8] rounded-e-lg ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
