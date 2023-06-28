import { useContext, useEffect } from "react";
import { ResumeContext } from "../../Context/resumeContext";

const About = () => {
  const context = useContext(ResumeContext);
  useEffect(() => {
    let resume = JSON?.parse(window?.localStorage?.getItem("resume"));
    context?.setAbout(resume?.about);
  }, []);
  return (
    <div className="md:w-[78%] w-[85%] mx-auto my-8 rounded-lg p-2">
      <h1 className="text-2xl font-bold self-center">About me</h1>
      <div className="bg-[#FAFAFA] p-2  my-4 md:p-8">
        <p className="text-[#18181B] text-[16px] font-medium w-[100%] text-justify">
          {!context?.showAllAbout
            ? `${context?.about?.slice(0, 165)}...`
            : context?.about}
        </p>
        <button
          className="bg-[#F4F4F5] my-2 w-auto self-center font-semibold px-3 py-1 h-8 rounded-[6px] text-sm"
          onClick={() => context?.setShowAllAbout(!context?.showAllAbout)}
        >
          {context?.showAllAbout ? "View less" : "Read more"}
        </button>
      </div>
    </div>
  );
};

export default About;
