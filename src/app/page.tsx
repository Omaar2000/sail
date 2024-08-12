import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import How from "./components/How";
import ImageTextSection from "./components/Orders";
import Join from "./components/Join";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <How />
      <ImageTextSection />
      <Join />
      <Footer />
    </>
  );
}
