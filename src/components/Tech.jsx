import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Ball from "./canvas/Ball";
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technologie) => (
        <div className="w-28 h-28 " key={technologie}>
          <BallCanvas icon={technologie.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech);
