import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaServer,
  FaToolbox,
} from "react-icons/fa";
import { SiTailwindcss, SiWordpress } from "react-icons/si";
import { MovingBorderDemo } from "./MovingButton";

import { FaNode, FaWordpress, FaCss3, FaNpm } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiAppwrite, SiMongodb, SiNetlify, SiPostman } from "react-icons/si";

const SkillsCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-8">
      <div className="tech-stack flex gap-5 flex-wrap justify-center pt-10"></div>

      <div className="max-w-sm w-full p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-1xl border border-white/20">
        <div className="flex items-center gap-4 mb-10">
          <FaReact className="text-blue-500 text-4xl animate-spin" />
          <h2 className="text-2xl font-bold text-white">Frontend</h2>
        </div>

        <div className="">
          <div className="flex flex-wrap gap-2   text-[20px]">
            <MovingBorderDemo
              content=""
              icon={<FaJs size="35" color="yellow" />}
            />
            <MovingBorderDemo
              content=""
              icon={<FaReact size="35" color="skyblue" />}
            />
            <MovingBorderDemo
              content=""
              icon={<RiTailwindCssFill size="35" color="skyblue" />}
            />
            <MovingBorderDemo
              content=""
              icon={<FaHtml5 size="35" color="orange" />}
            />
            <MovingBorderDemo
              content=""
              icon={<FaCss3 size="35" color="skyblue" />}
            />
          </div>
        </div>
      </div>
      <div className="max-w-sm w-full p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-1xl border border-white/20">
        <div className="flex items-center gap-4 mb-10">
          <FaServer className="text-green-500 text-4xl" />
          <h2 className="text-2xl font-bold text-white">Backend</h2>
        </div>

        <div className="">
          <div className="flex flex-wrap gap-2   text-[20px]">
            <MovingBorderDemo
              content=""
              icon={<FaNode size="35" color="green" />}
            />
            <MovingBorderDemo
              content=""
              icon={<SiExpress size="35" color="skyblue" />}
            />
            <MovingBorderDemo
              content=""
              icon={<SiMongodb size="35" color="lightgreen" />}
            />
          </div>
        </div>
      </div>
      <div className="max-w-sm w-full p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-1xl border border-white/20">
        <div className="flex items-center gap-4 mb-10">
          <FaToolbox className="text-red-500 text-4xl" />
          <h2 className="text-2xl font-bold text-white">Tools</h2>
        </div>

        <div className="">
          <div className="flex flex-wrap gap-2   text-[20px]">
            <MovingBorderDemo
              content=""
              icon={<FaWordpress size="35" color="skyblue" />}
            />
            <MovingBorderDemo
              content=""
              icon={<FaGithub size="35" color="white" />}
            />

            <MovingBorderDemo
              content=""
              icon={<SiAppwrite size="35" color="red" />}
            />

            <MovingBorderDemo
              content=""
              icon={<SiNetlify size="35" color="skyblue" />}
            />

            <MovingBorderDemo
              content=""
              icon={<FaNpm size="35" color="skyblue" />}
            />
            <MovingBorderDemo
              content=""
              icon={<SiPostman size="35" color="orange" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCards;
