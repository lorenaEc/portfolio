import { Skill } from "./Skill";
import { skills } from "Utils/skills";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center bg-gray-100 text-xl text-slate-800 font-bold rounded-lg pt-[30px] pb-[30px] lg:mt-[75px] lg:pt-[75px] lg:pb-[75px]"
    >
      <p className="text-3xl tett-bold font-bold pb-4">Mina kompetenser</p>
      <div className="flex gap-8 justify-center flex-wrap py-4">
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
    </section>
  );
};
