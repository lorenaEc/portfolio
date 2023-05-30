import { projects } from "Utils/projects";
import { Project } from "./Project";

export const Portfolio = () => {
  return (
    <section className="flex flex-col items-center p-8 mt-[75px]">
      <p className="text-3xl tett-bold pb-8">Portfolio</p>
      <div className="flex flex-wrap gap-12 justify-center">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};
