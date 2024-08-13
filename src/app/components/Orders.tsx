"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type ImageText = {
  src: string;
  title: string;
  desc: string;
};

const images: ImageText[] = [
  {
    src: "../Order-1.png",
    title: "Download the app",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Our eyes are subjected to extreme demands every single day. They have a lot to cope with and compensate for: too much or too little light (UV radiation), dry air, nicotine, or extreme temperatures. Long car journeys,",
  },
  {
    src: "../Order-2.png",
    title: "Browse services",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Our eyes are subjected to extreme demands every single day. They have a lot to cope with and compensate for: too much or too little light (UV radiation), dry air, nicotine, or extreme temperatures. Long car journeys,",
  },
  {
    src: "../Order-3.png",
    title: "Choose the service provider that suits you",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Our eyes are subjected to extreme demands every single day. They have a lot to cope with and compensate for: too much or too little light (UV radiation), dry air, nicotine, or extreme temperatures. Long car journeys,",
  },
];

const OrderStep: React.FC<{ title: string; desc: string }> = ({
  title,
  desc,
}) => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="h-screen flex flex-col items-start justify-center gap-5 p-[2rem]"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      // transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-blue-200 p-[4rem] rounded-2xl">
        <p className="text-xl text-[#006699] font-semibold my-3">{t(title)}</p>
        <p className="text-[#2B2B53] mb-3 text-lg">{t(desc)}</p>
        {title === "Download the app" && (
          <div className="flex gap-2">
            <a href="/">
              <div
                className="h-[40px] mb-2 bg-center bg-no-repeat bg-cover hover:scale-[1.05] transition cursor-pointer"
                style={{
                  backgroundImage: 'url("./appstore.svg")',
                  width: "140px",
                }}
              />
            </a>
            <a href="/">
              <div
                className="h-[40px] mb-2 bg-center bg-no-repeat hover:scale-[1.05] transition cursor-pointer"
                style={{
                  backgroundImage: 'url("./playstore_icon.svg")',
                  width: "140px",
                }}
              />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ImageTextSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const partRefs = useRef<HTMLDivElement[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (!sectionRef.current) return;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = partRefs.current.indexOf(entry.target as HTMLDivElement);
        if (entry.isIntersecting) {
          setActiveIndex(index);
        }
      });
    }, options);

    partRefs.current.forEach((part) => {
      if (part) observer.observe(part);
    });

    return () => {
      partRefs.current.forEach((part) => {
        if (part) observer.unobserve(part);
      });
    };
  }, []);

  const currentImage = images[activeIndex] || {
    src: "../Order-1.png",
    text: "Loading....",
  };

  return (
    <div id="orders">
      <div className="lg:hidden overflow-hidden">
        <motion.h2
          className="text-2xl font-semibold text-center mb-3 text-[#006699]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          // transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {t("Order Steps")}
        </motion.h2>
        <div className="relative flex justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-5 p-[2rem]">
            <motion.div
              className="px-[1rem] sm:px-[3rem] rounded-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              // transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-xl text-[#006699] text-center font-semibold my-3">
                {t("Download the app")}
              </p>
              <p className="text-[#2B2B53] text-[10px] sm:text-[14px] md:text-[16px] px-6 md:px-16 text-center">
                {t(
                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                )}{" "}
              </p>
            </motion.div>
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              // transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <a href="/">
                <div
                  className="h-[30px] w-[80px] sm:w-[120px] md:w-[140px] mb-2 bg-center bg-no-repeat bg-cover hover:scale-[1.05] transition cursor-pointer"
                  style={{ backgroundImage: 'url("./appstore.svg")' }}
                />
              </a>
              <a href="/">
                <div
                  className="h-[30px] w-[80px] sm:w-[120px] md:w-[140px] mb-2 bg-center bg-no-repeat hover:scale-[1.05] transition cursor-pointer"
                  style={{ backgroundImage: 'url("./playstore_icon.svg")' }}
                />
              </a>
            </motion.div>
            <motion.img
              src={"../Order-1.png"}
              alt={`Order Step 1`}
              className="duration-500 transform ease-out -mr-16 sm:-mr-20"
              style={{ minWidth: "40%", maxWidth: "50%" }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              // transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            />
            <motion.div
              className="px-[1rem] py-[1rem] sm:px-[3rem] rounded-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              // transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-xl text-[#006699] text-center font-semibold my-3">
                {t("Browse services")}
              </p>
              <p className="text-[#2B2B53] mb-3 text-[10px] sm:text-[14px] md:text-[16px] px-6 md:px-16 text-center">
                {t(
                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                )}
              </p>
            </motion.div>
            <motion.img
              src={"../../Order-2.png"}
              alt={`Order Step 2`}
              className="sm:w-[60%] duration-500 transform ease-out -mr-16 sm:-mr-20"
              style={{ minWidth: "40%", maxWidth: "50%" }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              // transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            />
            <motion.div
              className="px-[1rem] py-[1rem] sm:px-[3rem] rounded-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              // transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-xl text-[#006699] text-center font-semibold my-3">
                {t("Choose the service provider that suits you")}
              </p>
              <p className="text-[#2B2B53] mb-3 text-[10px] sm:text-[14px] md:text-[16px] px-6 md:px-16 text-center">
                {t(
                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                )}
              </p>
            </motion.div>
            <motion.img
              src={"../../Order-3.png"}
              alt={`Order Step 3`}
              className="duration-500 transform ease-out -mr-16 sm:-mr-20"
              style={{ minWidth: "40%", maxWidth: "50%" }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              // transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <h2 className="text-2xl font-semibold text-center mb-3 text-[#006699]">
          {t("Order Steps")}
        </h2>
        <div className="relative flex">
          <div className="flex-1 pb-[10rem]">
            <div ref={sectionRef}>
              {images.map((image, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) partRefs.current[index] = el;
                  }}
                >
                  <OrderStep title={image.title} desc={image.desc} />
                </div>
              ))}
            </div>
          </div>
          <div className="sticky top-0 w-1/2 h-screen flex flex-col justify-center items-center transition-all transform duration-500 ease-out">
            <img
              src={currentImage.src}
              alt={`Image ${activeIndex + 1}`}
              className="  duration-500 transform ease-out"
              style={{
                transform: ` scale(${activeIndex % 2 ? 110 : 115}%)`,
                width: "50%",
              }} // Example effect
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageTextSection;
