import React from "react";
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
import {
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiAppwrite,
  SiWordpress,
} from "react-icons/si";

const SkillsCards = () => {
  const skills = [
    {
      title: "Frontend",
      icon: <FaReact className="text-blue-500 text-4xl animate-spin" />,
      items: [
        {
          name: "HTML",
          icon: <FaHtml5 className="text-orange-600" size={28} />,
        },
        {
          name: "CSS",
          icon: <FaCss3Alt className="text-blue-600" size={28} />,
        },
        {
          name: "JavaScript",
          icon: <FaJs className="text-yellow-500" size={28} />,
        },
        {
          name: "React",
          icon: <FaReact className="text-blue-500" size={28} />,
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-teal-400" size={28} />,
        },
        {
          name: "Wordpress",
          icon: <SiWordpress className="text-blue-400" size={28} />,
        },
      ],
    },
    {
      title: "Backend",
      icon: <FaServer className="text-green-500 text-4xl" />,
      items: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-600" size={28} />,
        },
        {
          name: "Express",
          icon: <SiExpress className="text-gray-500" size={28} />,
        },
        {
          name: "Database",
          icon: <FaDatabase className="text-purple-500" size={28} />,
        },
      ],
    },
    {
      title: "Tools",
      icon: <FaToolbox className="text-red-500 text-4xl" />,
      items: [
        { name: "GitHub", icon: <FaGithub className="text-white" size={28} /> },
        {
          name: "Postman",
          icon: <SiPostman className="text-orange-500" size={28} />,
        },
        {
          name: "Appwrite",
          icon: <SiAppwrite className="text-pink-500" size={28} />,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 py-8">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="max-w-sm w-full p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl border border-white/20"
        >
          <div className="flex items-center gap-4 mb-10">
            {skill.icon}
            <h2 className="text-2xl font-bold text-white">{skill.title}</h2>
          </div>
          {skill.title === "Frontend" ? (
            <div className="grid grid-cols-2 gap-4">
              {skill.items.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-center text-[20px]">
                  {item.icon}
                  <span className="text-white text-[15px]">{item.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <ul className="space-y-4">
              {skill.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-white">{item.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default SkillsCards;
