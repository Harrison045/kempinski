import { React, useEffect } from "react";
import Info1 from "./About/Info1";
import Tryout from "./About/Tryout";
import TryoutWords from "./About/TryoutWords";
import TryoutWords1 from "./About/TryoutWords1";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Info2 from "./About/Info2";
import FoundingPartners from "./About/FoundingPartners";
import OurTeam from "./About/OurTeam";
import Footer from "./Pages/Footer";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const text = "About StartUp Lounge";
  const texts =
    "We believe that every business in African has a story and we are here to help";
  const text1 =
    "story to tell and we are here to grow the story of African enterprise";

  const tryoutVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 1,
      },
    },
  };

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="  flex flex-col items-center justify-top py-10">
        <Tryout text={text} />
        <br />
        <TryoutWords texts={texts} />
        <TryoutWords1 text1={text1} />
      </div>
      <motion.div
        className="py-20"
        data-aos="fade-down"
        variants={tryoutVariant}
        initial="hidden"
        animate="visible"
      >
        <Info1 />
      </motion.div>
      <br />
      <br />
      <div data-aos="fade-up">
        <Info2 />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <FoundingPartners />
      </div>
      <br />
      <br />
      <br />
      <div>
        <OurTeam />
      </div>
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer />
      </div>
    </div>
  );
};

export default About;
