// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-Black">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories in Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
        >
          <div
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 rounded-2xl border border-white 
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] h-full flex flex-col justify-between"
          >
            {/* Category Title */}
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
              {category.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
  {category.skills.map((skill) => (
    <div
      key={skill.name}
      className="flex flex-col items-center justify-center text-center 
                 space-y-1 border-2 border-gray-700 rounded-full py-2 px-3 
                 min-w-[90px] max-w-[100px] mx-auto bg-gray-800 hover:bg-gray-700 transition-all"
    >
      <img
        src={skill.logo}
        alt={`${skill.name} logo`}
        className="w-6 h-6 sm:w-7 sm:h-7"
      />
      <span className="text-xs text-gray-300 leading-tight break-words">
        {skill.name}
      </span>
    </div>
  ))}
</div>

          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
