import ProjectCard from "./ProjectCard";

import { projects } from "../data/projects";

interface ProjectListProps {
  onCardClick: (data: {
    title: string;
    desc: string;
    content: React.ReactNode;
  }) => void;
}

function ProjectList(props: ProjectListProps) {
  return (
    <>
      <main>
        <div className="project-list">
          <h2 className="text-2xl font-bold mb-8">Projects</h2>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              onCardClick={props.onCardClick}
              data={{
                title: project.title,
                desc: project.desc,
                tags: project.tags,
                content: project.content,
              }}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default ProjectList;
