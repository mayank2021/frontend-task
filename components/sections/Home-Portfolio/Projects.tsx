import { useContext, useEffect } from "react";
import { PortfolioContext } from "../../Context/PortfolioContext";
import ProjectCard from "../../smallComponents/projectCard";
import { ResumeContext } from "../../Context/resumeContext";

const Projects = () => {
  const context = useContext(PortfolioContext);
  const resumeContext = useContext(ResumeContext);

  useEffect(() => {
    let project = JSON?.parse(window?.localStorage?.getItem("projects"));
    context.setHomeProjects(project?.homeProjects);
  }, []);
  return (
    <div className="md:w-[78%] w-[85%] mx-auto my-8 rounded-lg p-2">
      <div className="flex align-middle justify-between py-4">
        <h1 className="text-2xl font-bold self-center">Projects</h1>
        {/* <button
          className="text-[#4F46E5] font-semibold"
          onClick={() => resumeContext?.setShowModal(true)}
        >
          Create new project
        </button> */}
      </div>

      <div className="flex flex-wrap justify-between">
        {context?.homeProjects?.map((project) => (
          <ProjectCard
            key={project.key}
            title={project.title}
            tech={project.tech}
            homeProject={project.homeProject}
            highlight={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
