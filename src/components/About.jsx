import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      Hi Im Mohamad
      <motion.p
        variants={fadeIn("", "", 0.5, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a 22 y/o self-taught front-end developer based in Shiraz, IRAN. I
        can develop responsive websites from scratch and raise them into modern
        user-friendly web experiences. I'm a skilled{" "}
        <span className=" font-bold text-[#915eff]">Front-End</span> with
        experience in{" "}
        <span className="text-[#915eff] font-bold">Creating Web Apps</span>, and
        expertise in frameworks like:[React, Three.js , Tailwind , Bootstrap]
        and libraries like : []. I'm a quick learner and collaborate closely
        with clients to create efficient, scalable, and user-friendly solutions
        that solve real-world problems. Let's work together to bring your ideas
        to life!
        <br />
        {/* I'm Also Learning Next.js Right Now. */}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10    items-center justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
