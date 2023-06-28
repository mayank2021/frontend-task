import { useContext, useEffect } from "react";
import EducationCard from "../../smallComponents/EducationCard";
import { ResumeContext } from "../../Context/resumeContext";

const Education = () => {
  const context = useContext(ResumeContext);

  useEffect(() => {
    let resume = JSON?.parse(window?.localStorage?.getItem("resume"));
    context.setHomeEducation(resume?.homeEducation);
  }, []);

  return (
    <div className="md:w-[78%] w-[85%] mx-auto my-8 rounded-lg p-2">
      <h1 className="text-2xl font-bold self-center">Education</h1>
      <div className="my-8">
        {context?.homeEducation?.map((ele) => (
          <EducationCard
            key={ele.key}
            img={ele.img}
            title={ele.title}
            location={ele.location}
            degree={ele.degree}
            startDate={ele.startDate}
            endDate={ele.endDate}
            description={ele.description}
            homeEducation={ele.homeEducation}
            highlight={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
