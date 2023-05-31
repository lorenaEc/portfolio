type Props = {
  skill: string;
};

export const Skill: React.FC<Props> = ({ skill }) => {
  return (
    <div className="bg-red-200 rounded-full p-2 w-24 h-24 flex items-center justify-center">
      <p className="w-full text-center">{skill}</p>
    </div>
  );
};
