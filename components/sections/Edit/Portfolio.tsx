import { useContext, useEffect } from "react";
import Link from "next/link";
import React from "./../../../Assets/React.png";
import PlaygroundCard from "../../smallComponents/playgroundCard";
import { PortfolioContext } from "../../Context/PortfolioContext";
import ProjectCard from "../../smallComponents/projectCard";
import InfoCard from "../../smallComponents/InfoCard";

const Portfolio = () => {
  const context = useContext(PortfolioContext);

  useEffect(() => {
    let playground = JSON?.parse(window?.localStorage?.getItem("playgrounds"));
    context?.setHomePlaygrounds(playground?.homePlaygroudData);
    context?.setPlaygrounds(playground?.playgrounds);
    let projects = JSON?.parse(window?.localStorage?.getItem("projects"));
    context?.setAllProjects(projects?.allProjects);
    context?.setHomeProjects(projects?.homeProjects);
  }, []);

  return (
    <div className="w-[100%] px-4 md:px-0">
      <div className="md:w-[55rem] mx-auto my-8 rounded-lg p-2">
        <InfoCard />
        <div className="flex align-middle justify-between py-4">
          <h1 className="text-2xl font-bold self-center">Playgrounds</h1>
          <button
            className="text-[#71717A] font-semibold"
            onClick={() =>
              context.setShowAllPlaygrounds(!context.showAllPlaygrounds)
            }
          >
            {context.showAllPlaygrounds ? "View less" : "See all"}
          </button>
        </div>
        <div className="flex flex-wrap justify-between">
          {context?.playgrounds
            ?.slice(
              0,
              context.showAllPlaygrounds ? context.playgrounds.length : 4
            )
            .map((ele) => (
              <PlaygroundCard
                key={ele.key}
                cardImage={ele.cardImage}
                title={ele.title}
                techUsed={ele.techUsed}
                createdTime={ele.createdTime}
                peopleImg1={ele.peopleImg1}
                peopleImg2={ele.peopleImg2}
                peopleName1={ele.peopleName1}
                peopleName2={ele.peopleName2}
                sharedNumber={ele.sharedNumber}
                homePlayground={ele.homePlayground}
                highlight={true}
                handlePlaygroundDelete={() =>
                  context.handlePlaygroundDelete(ele.key)
                }
                handleAddToHomePlayground={() =>
                  context.handleAddToHomePlayground(ele)
                }
              />
            ))}
        </div>
      </div>
      <div className="md:w-[55rem] mx-auto my-8 rounded-lg p-2">
        <div className="flex align-middle justify-between py-4">
          <h1 className="text-2xl font-bold self-center">Projects</h1>
          <button
            className="text-[#71717A] font-semibold"
            onClick={() => context.setShowAllProjects(!context.showAllProjects)}
          >
            {context.showAllProjects ? "View less" : "See all"}
          </button>
        </div>

        <div className="flex flex-wrap justify-between">
          {context?.allProjects
            ?.slice(0, context.showAllProjects ? context.allProjects.length : 4)
            .map((project) => (
              <ProjectCard
                key={project.key}
                title={project.title}
                tech={project.tech}
                homeProject={project.homeProject}
                highlight={true}
                handleProjectDelete={() =>
                  context.handleProjectDelete(project.key)
                }
                handleAddToHomeProject={() =>
                  context.handleAddToHomeProject(project)
                }
              />
            ))}
        </div>
      </div>

      <div className="flex justify-end mb-10 md:mb-20 md:w-[55rem] mx-auto my-8 rounded-lg p-2">
        <Link href="/">
          <button
            className="self-center py-2 px-4 font-medium flex justify-center align-middle rounded-[6px] bg-[#F4F4F5]"
            onClick={context.handlePortfolioCancel}
          >
            Cancel
          </button>
        </Link>
        <Link href="/">
          <button
            className="rounded-[6px] mx-3 ml-7 py-2 px-4 font-medium bg-[#4F46E5] text-white  self-center"
            onClick={context.handlePortfolioSubmit}
          >
            Save changes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
