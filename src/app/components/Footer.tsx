"use client";

import { useTranslation } from "react-i18next";
import useStore from "../../../useUserStore";

const Footer = () => {
  const handleSubmit = () => {};
  const { t } = useTranslation();
  const { language } = useStore();

  return (
    <div className="bg-[#05202E] p-4" id="footer">
      <div className="px-[1.5rem] py-[3rem] sm:px-[3rem] mb-10 justify-center gap-20 flex m-4 rounded-3xl bg-[#09415D]  ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center "
        >
          <p className="text-[28px] md:text-[40px] md:px-20 text-center px-2 font-semibold my-4">
            {t("Get In Touch With Us")}
          </p>
          <p className="text-[11px] sm:text-[14px] md:px-20 text-center mb-8 px-2 ">
            {t(
              "Whether you are a retailers hoping to source more locally, a supplier who wants to reach more retailers, an investor supporting our mission, or just interested in learning more - we want to hear from you."
            )}
          </p>
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <div className="flex flex-col gap-5 justify-between w-full">
              <input
                type="text"
                name="Name"
                placeholder={t("Name")}
                id=""
                className="bg-transparent border border-1 rounded-md p-2 w-full  placeholder:text-white hover:bg-[#2f637e] focus:bg-inherit  focus:outline-none transition-all 1s"
              />
              <input
                type="email"
                placeholder={t("Email")}
                id=""
                className="bg-transparent border border-1  rounded-md p-2 w-full placeholder:text-white  hover:bg-[#2f637e] focus:bg-inherit  focus:outline-none transition-all 1s"
              />
              <input
                placeholder={t("Phone")}
                id=""
                className=" bg-transparent border border-1  rounded-md p-2 w-full placeholder:text-white  hover:bg-[#2f637e] focus:bg-inherit  focus:outline-none transition-all 1s"
              />

              <select
                name=""
                id="custom-select"
                className="bg-transparent border border-white placeholder:text-white rounded-md py-2 px-4 w-full hover:bg-[#2f637e] focus:bg-inherit focus:outline-none transition-all duration-500 appearance-none pr-12"
              >
                <option value="" disabled selected hidden>
                  {t("I am a")}
                </option>
                <option className="bg-[#2f637e] hover:bg-red-500">
                  {t("User")}
                </option>
                <option className="bg-[#2f637e] hover:bg-red-500">
                  {t("Provider")}
                </option>
              </select>

              <select
                name=""
                id="custom-select"
                className="bg-transparent border border-white placeholder:text-white rounded-md py-2 px-4 w-full hover:bg-[#2f637e] focus:bg-inherit focus:outline-none transition-all duration-500 appearance-none pr-12"
              >
                <option value="" disabled selected hidden>
                  {t("How did you hear about us?")}
                </option>
                <option className="bg-[#2f637e] hover:bg-red-500">
                  {t("Facebook")}
                </option>
                <option className="bg-[#2f637e] hover:bg-red-500">
                  {t("Instagram")}
                </option>
                <option className="bg-[#2f637e]">{t("Friend")}</option>
                <option className="bg-[#2f637e]">{t("Other")}</option>
              </select>
            </div>
            <div className="flex flex-col gap-6 w-full justify-start align-text-bottom">
              <textarea
                name={t("Name")}
                placeholder={t("Message")}
                id=""
                rows={10}
                className="bg-transparent bg- border border-1 placeholder:text-white  rounded-lg p-2 w-full h-full hover:bg-[#2f637e] focus:bg-inherit  focus:outline-none "
              />
              <button
                type="submit"
                className="bg-white rounded-md font-semibold text-[#09415D] p-4 hover:bg-slate-300 transition-all duration-300 ease-in-out"
              >
                {t("SEND")}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center m-2 px-[1rem] text-[12px] sm:text-[14px] gap-4 md:gap-10">
        <a href="#" className="">
          <img src="../../logo.svg" alt="" className="hidden md:block flex-1" />
          <img src="../../logo_icon.svg" alt="" className="md:hidden flex-1" />
        </a>
        {/* <div className="col-span-8 sm:col-span-9 text-sm flex flex-col sm:flex-row justify-between"> */}
        <p>{t("© 2024 Sail. Copyright and rights reserved")}</p>
        <div>
          <a href="#" style={{ marginInlineEnd: "1rem" }}>
            {t("Terms and conditions")}
          </a>
          <a href="#">{t("Privacy Policy")}</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
