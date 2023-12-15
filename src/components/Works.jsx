import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <div variants={fadeIn("up", " spring ", index * 0.1, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 850,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px]    w-full"
      >
        <div
          className="relative w-full h-[290px] cursor-pointer    "
          onClick={() => window.open(live_demo_link, "_blank")}
        >
          <img
            src={image}
            alt={name}
            className="w-full  h-full object-fill rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_cover ">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10  h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-[#4d29afbb] font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[15px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              ${tag.name}
            </p>
          ))}
        </div>

        <a href={live_demo_link} target="_blank">
          <button className=" text-2 border-2 p-2   rounded-lg border-slate-600 max-w-[290px] absolute right-2 bottom-3 hover:bg-black text-[#b341adfd]">
            Live Demo
          </button>
        </a>
      </Tilt>
    </div>
  );
};

const Works = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  console.log(window.innerWidth);

  function scrollToTop() {
    const windowWidth = window.innerWidth;
    setShowAllProjects(!showAllProjects);

    const viewHeight = window.innerHeight;
    if (showAllProjects) {
      if (windowWidth <= 765 && windowWidth >= 530) {
        window.scrollTo({
          top: 6600,
          behavior: "smooth",
        });
      } else if (windowWidth > 766 && windowWidth <= 1024) {
        window.scrollTo({
          top: 5100,
          behavior: "smooth",
        });
      } else if (windowWidth <= 525) {
        window.scrollTo({
          top: 6500,
          behavior: "auto",
        });
      } else if (windowWidth > 1025) {
        window.scrollTo({
          top: 4800,
          behavior: "smooth",
        });
      }
    }
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        />
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </div>
      <div className="mt-20 flex flex-wrap gap-10   justify-center w-full  ">
        {showAllProjects
          ? projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))
          : projects
              .slice(0, 6)
              .map((project, index) => (
                <ProjectCard
                  key={`project-${index}`}
                  index={index}
                  {...project}
                />
              ))}
      </div>
      <motion.div
        variants={fadeIn("up", " spring ", 2 * 0.1, 0.75)}
        className="flex w-full items-center justify-center   h-20"
      >
        <button
          className=" text-2 border-2 p-2   rounded-lg border-slate-600  hover:bg-black text-[#b341adfd]  "
          onClick={() => scrollToTop()}
        >
          {showAllProjects ? "Show Less <-" : "Show More ->"}
        </button>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "");
