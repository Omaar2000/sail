"use client";
const Footer = () => {
  const handleSubmit = () => {};

  return (
    <div className="bg-[#05202E] p-4" id="footer">
      <div className="px-[1.5rem] py-[3rem] sm:px-[3rem] mb-10 justify-center gap-20 flex m-4 rounded-3xl bg-[#09415D]  ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center "
        >
          <p className="text-[28px] md:text-[40px] md:px-20 text-center px-2 font-semibold my-4">
            Get In Touch With Us
          </p>
          <p className="text-[11px] sm:text-[14px] md:px-20 text-center mb-8 px-2 ">
            Whether you are a retailers hoping to source more locally, a
            supplier who wants to reach more retailers, an investor supporting
            our mission, or just interested in learning more - we want to hear
            from you.
          </p>
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <div className="flex flex-col gap-5 justify-between w-full">
              <input
                type="text"
                name="Name"
                placeholder="Name"
                id=""
                className="bg-transparent border border-1 autofill:bg-black rounded-md p-2 w-full  placeholder:text-white hover:bg-[#2f637e] focus:bg-inherit  focus:outline-none transition-all 1s"
              />
              <input
                type="email"
                placeholder="Email"
                id=""
                className="bg-transparent border border-1  rounded-md p-2 w-full placeholder:text-white  hover:bg-[#2f637e] focus:bg-inherit  focus:outline-none transition-all 1s"
              />
              <input
                type="number"
                placeholder="Phone"
                id=""
                className=" bg-transparent border border-1  rounded-md p-2 w-full placeholder:text-white  hover:bg-[#2f637e] focus:bg-inherit  focus:outline-none transition-all 1s"
              />

              <select
                name=""
                id=""
                className="bg-transparent border border-1 placeholder:text-white rounded-md p-2 w-full hover:bg-[#2f637e] focus:bg-inherit  focus:outline-none transition-all 1s"
              >
                <option value="" disabled selected hidden>
                  I am a
                </option>
                <option className="bg-[#2f637e] hover:bg-red-500">
                  asdfsadf
                </option>
                <option className="bg-[#2f637e] hover:bg-red-500">
                  asdfsadf
                </option>
                <option
                  // style={{ background: "red" }}
                  className="bg-[#2f637e]"
                >
                  asdfsadf
                </option>
              </select>

              <select
                name=""
                id=""
                className="bg-transparent border border-1 placeholder:text-white rounded-md p-2 w-full hover:bg-[#2f637e] focus:bg-inherit  focus:outline-none transition-all 1s"
              >
                <option value="" disabled selected hidden>
                  How did you hear about us?
                </option>
                <option className="bg-[#2f637e] hover:bg-red-500">
                  asdfsadf
                </option>
                <option className="bg-[#2f637e] hover:bg-red-500">
                  asdfsadf
                </option>
                <option
                  // style={{ background: "red" }}
                  className="bg-[#2f637e]"
                >
                  asdfsadf
                </option>
              </select>
            </div>
            <div className="flex flex-col gap-6 w-full justify-start align-text-bottom">
              <textarea
                name="Name"
                placeholder="Message"
                id=""
                rows={10}
                className="bg-transparent border border-1 placeholder:text-white  rounded-lg p-2 w-full h-full hover:bg-[#2f637e] focus:bg-inherit  focus:outline-none "
              />
              <button
                type="submit"
                className="bg-white rounded-md font-semibold text-[#09415D] p-4 hover:bg-slate-300 transition-all duration-300 ease-in-out"
              >
                SEND &rarr;
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
        <p>© 2024 Sail. Copyright and rights reserved</p>
        <div>
          <a href="#">Terms and conditions .</a>
          <a href="#"> Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
