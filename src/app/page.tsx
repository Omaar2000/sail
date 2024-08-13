"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import How from "./components/How";
import ImageTextSection from "./components/Orders";
import Join from "./components/Join";
import Footer from "./components/Footer";
import { useEffect } from "react";
import "../../i18n";
import useStore from "../../useUserStore";

export default function Home() {
  const { language } = useStore();
  useEffect(() => {
    document.body.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);
  return (
    <>
      {/* <div style={{ overflow: "hidden" }}> */}
      <Hero />
      <About />
      <How />
      {/* </div> */}
      <ImageTextSection />
      {/* <div style={{ overflow: "hidden" }}> */}
      <Join />
      {/* </div> */}
      <Footer />
    </>
  );
}
