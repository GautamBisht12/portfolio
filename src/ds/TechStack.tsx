import { FaReact, FaNodeJs, FaCss3, FaHtml5, FaJs } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiAppwrite,
  SiPostman,
} from "react-icons/si";

const TechStack = () => {
  const techs = [
    { icon: <FaReact size={50} />, name: "React" },
    { icon: <FaNodeJs size={50} />, name: "Node.js" },
    { icon: <SiMongodb size={50} />, name: "MongoDB" },
    { icon: <FaCss3 size={50} />, name: "CSS" },
    { icon: <FaHtml5 size={50} />, name: "HTML" },
    { icon: <FaJs size={50} />, name: "JavaScript" },
    { icon: <SiTailwindcss size={50} />, name: "Tailwind CSS" },
    { icon: <SiNextdotjs size={50} />, name: "Next.js" },
    { icon: <SiAppwrite size={50} />, name: "Appwrite" },
    { icon: <SiPostman size={50} />, name: "Postman" },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {techs.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              {tech.icon}
              <p className="mt-2 text-lg">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
