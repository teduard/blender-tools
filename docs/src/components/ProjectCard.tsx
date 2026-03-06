interface ProjectCardProps {
  onCardClick: (data: {
    title: string;
    desc: string;
    content: React.ReactNode;
  }) => void;
  data: { title: string; desc: string; tags: string; content: React.ReactNode };
}

function ProjectCard(props: ProjectCardProps) {
  const onClickHandler = () =>
    props.onCardClick({
      title: props.data.title,
      desc: props.data.desc,
      content: props.data.content,
    });

  return (
    <>
      <div
        className="project-card py-12 flex justify-between items-center group cursor-pointer"
        onClick={onClickHandler}
      >
        <h3 className="text-2xl font-medium tracking-tight">
          {props.data.title}
        </h3>

        <span className="text-sm opacity-40 md:ml-8">
          {props.data.tags}&nbsp;&nbsp;&nbsp;
        </span>
      </div>
    </>
  );
}

export default ProjectCard;
