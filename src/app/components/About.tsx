"use client";
import { motion } from "framer-motion";
import "../App.css";

const Card: React.FC<{ imageURL: string; title: string }> = ({
  imageURL,
  title,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      }}
      viewport={{ once: false, amount: 0.3 }} // Adjust 'amount' to control when the animation should trigger
    >
      <img src={imageURL} alt="card" />
      <p className="text-center text-lg text-[#006699] font-semibold mt-3">
        {title}
      </p>
    </motion.div>
  );
};

const About = () => {
  return (
    <div
      id="about"
      className="px-[5rem] flex flex-col justify-center items-center mt-[5rem] scroll-smooth"
    >
      <h2 className="text-2xl font-semibold text-center mb-3 text-[#006699]">
        Who are we
      </h2>
      <p className="text-[#2B2B53] md:w-2/3 text-[12px] md:text-[16px] text-center mb-3">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. Our eyes are
        subjected to extreme demands every single day. They have a lot to cope
        with and compensate for: too much or too little light (UV radiation),
        dry air, nicotine, or extreme temperatures. Long car journeys,
      </p>
      <div className="grid text-black gap-y-16 gap-5 md:grid-cols-4 grid-cols-2 mt-6 ">
        {[
          { imageURL: "../../../Parachute.png", title: "Parachute" },
          { imageURL: "../../../Banana.png", title: "Banana Boat" },
          { imageURL: "../../../Fishing.png", title: "Fishing Trips" },
          { imageURL: "../../../JetSkii.png", title: "Jet Ski Trips" },
          { imageURL: "../../../small.png", title: "Kayak" },
          { imageURL: "../../../outing.png", title: "Outing Trips" },
        ].map((card, index) =>
          card.title === "Kayak" ? (
            <motion.div
              className="md:col-start-2 md:col-end-3"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                // transition: {
                //   delay: (index - 1) * 0.2,
                //   duration: 0.3,
                //   ease: "easeOut",
                // },
              }}
              viewport={{ once: false }}
            >
              <Card imageURL={card.imageURL} title={card.title} />
            </motion.div>
          ) : (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                // transition: {
                //   delay: index * 0.2,
                //   duration: 0.3,
                //   ease: "easeOut",
                // },
              }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <Card imageURL={card.imageURL} title={card.title} />
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default About;
