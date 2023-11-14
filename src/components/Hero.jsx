import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Mohamad</span>
          </h1>
          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p> */}
          <div className={`${styles.heroSubText} text-5xl mt-2 `}>
            <span className="text-white text-4xl inline"> I Develop </span>
            <Typewriter
              words={["3D visuals ", "User Interfaces ", "Web Applications"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={45}
            />
          </div>
        </div>
      </div>
      <div className="md:block hidden xs:hidden md:bottom-60 lg:w-[100%] lg:h-[95%]  w-full h-full">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-40 md:bottom-20  bottom-52  w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] border-2   lg:bottom-9 rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
