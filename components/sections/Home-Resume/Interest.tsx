import { useContext, useEffect } from "react";
import { ResumeContext } from "../../Context/resumeContext";
import InterestCard from "../../smallComponents/InterestCard";

const Interest = () => {
  const context = useContext(ResumeContext);

  useEffect(() => {
    let resume = JSON?.parse(window?.localStorage?.getItem("resume"));
    context.setInterests(resume?.interests);
  }, []);

  return (
    <div className="md:w-[78%] w-[85%] mx-auto my-8 rounded-lg p-2">
      <h1 className="text-2xl font-bold self-center">Interest</h1>
      <div className="my-8 flex flex-wrap">
        {context?.interests?.map((ele) => (
          <InterestCard key={ele.key} title={ele.title} highlight={false} />
        ))}
      </div>
    </div>
  );
};

export default Interest;
