import { useContext, useEffect } from "react";
import SkillCard from "../../smallComponents/skillCard";
import { ResumeContext } from "../../Context/resumeContext";

const Skills = () => {
  const context = useContext(ResumeContext);

  useEffect(() => {
    let resume = JSON?.parse(window?.localStorage?.getItem("resume"));
    context.setSkills(resume?.skills);
  }, []);
  return (
    <div className="md:w-[78%] w-[85%] mx-auto my-8 rounded-lg p-2">
      <h1 className="text-2xl font-bold self-center">Tech skills</h1>
      <div className="flex flex-wrap my-8">
        {context?.skills?.map((ele) => (
          <SkillCard
            key={ele.key}
            img={ele.img}
            skill={ele.skill}
            highlight={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
