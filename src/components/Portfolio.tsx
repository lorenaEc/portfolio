import { projects } from "Utils/projects";
import { Project } from "./Project";

export const Portfolio = () => {
  return (
    <section className="flex flex-col items-center lg:mt-[75px] mt-[50px]">
      <p className="text-3xl text-gray-100 pb-8 font-bold">Portfolio</p>
      <div className="flex lg:flex-wrap gap-12 justify-center">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};
