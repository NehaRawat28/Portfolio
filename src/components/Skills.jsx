import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCode } from "react-icons/fa";
import { SiRedux, SiExpress } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        {
          name: "API Integration",
          icon: <TbApi className="text-yellow-400" />,
        },
      ],
    },
    {
      category: "Programming",
      skills: [
        { name: "C++", icon: <FaCode className="text-blue-500" /> },
        {
          name: "Data Structures & Algorithms",
          icon: <FaCode className="text-orange-400" />,
        },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
        { name: "VS Code", icon: <FaCode className="text-blue-500" /> }, // ✅ Fixed
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 bg-gray-900 text-white text-center"
      data-aos="zoom-in"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        My <span className="text-green-400">Skills</span>
      </h2>

      <div className="space-y-12 max-w-5xl mx-auto px-6">
        {skillCategories.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-semibold text-green-400 mb-6">
              {category.category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition transform"
                >
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <p className="text-lg font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
