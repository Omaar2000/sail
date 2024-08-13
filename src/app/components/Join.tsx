"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useStore from "../../../useUserStore";

const Join = () => {
  const { t } = useTranslation();
  const { language } = useStore();
  return (
    <div
      id="join"
      className="overflow-hidden px-[3rem] py-[3rem] mb-10 justify-center items-center gap-20 flex flex-col lg:flex-row m-4 rounded-3xl bg-gradient-to-b from-[#006699] to-[#09415D]"
    >
      <div className="relative flex justify-center items-end flex-1 ">
        <motion.img
          src="../join2.png"
          alt=""
          className={`${
            language === "en"
              ? "-mr-44"
              : "absolute mr-[12rem] w-[11.5rem] sm:w-[15rem]"
          } mt-4 z-10 w-[16rem] md:w-[20rem] lg:w-[20rem] rounded-3xl`}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          // transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <motion.img
          src="../join1.png"
          alt=""
          className="mb-8 w-[22rem] md:w-[24rem] lg:w-[22rem]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          // transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
      <div className="flex-1">
        <motion.p
          className="text-4xl font-semibold text-[#EFEFF8]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          // transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {t("Join us as a captain")}
        </motion.p>
        <div className="mt-10 flex flex-col justify-center">
          <motion.p
            className="mb-5 font-semibold text-[#EFEFF8]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            // transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {t("Join sail captain in simple 4 steps:")}
          </motion.p>
          <motion.ul
            className="list-inside list-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            // transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <li>{t("Install sail captain")}</li>
            <li>{t("Sign up")}</li>
            <li>{t("Share some documents")}</li>
            <li>{t("Get your account approved")}</li>
          </motion.ul>
          <div className="flex gap-2 mt-5">
            <a href="/">
              <motion.div
                className="h-[50px] w-[120px] md:w-[180px] mb-2 bg-center bg-no-repeat bg-cover hover:scale-[1.05] transition cursor-pointer"
                style={{
                  backgroundImage: 'url("./appstore.svg")',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                // transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </a>
            <a href="/">
              <motion.div
                className="h-[50px] w-[120px] md:w-[180px] mb-2 bg-center bg-no-repeat hover:scale-[1.05] transition cursor-pointer"
                style={{
                  backgroundImage: 'url("./playstore_icon.svg")',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                // transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
