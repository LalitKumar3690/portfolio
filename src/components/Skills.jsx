import { Code, PaintBucket, Code2, Atom } from "lucide-react";

const skills = [
  { id: 1, name: "HTML", icon: <Code size={40} />, count: 1068, description: "Happy clients" },
  { id: 2, name: "CSS", icon: <PaintBucket size={40} />, count: 230, description: "Completed Projects" },
  { id: 3, name: "JavaScript", icon: <Code2 size={40} />, count: 230, description: "Perspective clients" },
  { id: 4, name: "React", icon: <Atom size={40} />, count: 230, description: "Completed Projects" },
];

const Skills = () => {
  return (
    <div className="flex justify-center items-center py-20 md:py-0 min-h-screen md:min-h-[50em] bg-[#0a0215] px-4" id='skills'>
      <div className="grid  md:grid-cols-2  gap-30 xl:gap-6 lg:grid-rows-2 xl:grid-cols-4">
      {skills.map((skill, index) => (
  <div
    key={skill.id}
    className={`relative flex flex-col items-center justify-center rotate-45 p-6 bg-[#160d2c] border border-[#291945] text-white text-center rounded-xl transform transition-all md:hover:scale-105 ${
      index === 0 ? "xl:row-start-2 xl:col-start-1" : ""
    }  ${
      index === 1 ? "xl:row-start-1 xl:col-start-2  " : ""
    }
     ${
      index === 2 ? "xl:row-start-2 xl:col-start-3" : ""
    }
     ${
      index === 3 ? "xl:row-start-1 xl:col-start-4" : ""
    }
    `}
  >

            <div className="absolute inset-0 border border-[#291945] p-4 "></div>
            <div className="relative flex flex-col items-center -rotate-45 p-4 md:p-10 justify-center z-10">
              <div className="text-blue-400 mb-3">{skill.icon}</div>
              <h2 className="text-3xl font-bold">{skill.count}</h2>
              <p className="text-sm mt-1">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
