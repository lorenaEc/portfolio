type Props = {
  project: {
    title: string;
    description: string;
    image: string;
  };
};
export const Project: React.FC<Props> = ({ project }) => {
  return (
    <section className="border-2 border-gray-100 rounded-lg">
      <img className="rounded-t-lg" src={project.image} alt={project.title} />
      <p className="p-2">{project.title}</p>
      <p className="px-2 pb-2">{project.description}</p>
    </section>
  );
};
