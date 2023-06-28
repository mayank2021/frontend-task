import { useContext, useEffect } from "react";
import { ResumeContext } from "../../Context/resumeContext";
import EducationCard from "../../smallComponents/EducationCard";
import SkillCard from "../../smallComponents/skillCard";
import InterestCard from "../../smallComponents/InterestCard";
import Link from "next/link";

const Resume = () => {
  const context = useContext(ResumeContext);

  useEffect(() => {
    let resumeData = JSON?.parse(window?.localStorage?.getItem("resume"));
    context.setAbout(resumeData.about);
    context.setEducation(resumeData.education);
    context.setSkills(resumeData.skills);
    context.setInterests(resumeData.interests);
    context.setHomeEducation(resumeData?.homeEducation);
  }, []);
  return (
    <div className="md:w-[80%] w-[100%] md:px-20 px-6">
      {/* --------------------------About -------------------------------- */}
      <div className="text-[#18181B] flex flex-col my-4">
        <label htmlFor="about" className="text-xl font-bold">
          About
        </label>
        <textarea
          name="about"
          id="about"
          onChange={(e) => context.setAbout(e.target.value)}
          value={context.about}
          className="border-[1.5px] border-[#E4E4E7] py-3 px-4 my-2 rounded-lg text-medium focus:outline-0"
          placeholder="About"
        />
      </div>
      {/* ------------------------------Education--------------------------- */}
      <div className="w-[100%] my-8 rounded-lg py-2">
        <div className="flex align-middle justify-between py-4">
          <h1 className="text-2xl font-bold self-center">Education</h1>
          <div className="flex align-middle">
            <button
              className="text-[#71717A] font-semibold"
              onClick={() =>
                context.setShowAllEducation(!context.showAllEducation)
              }
            >
              {context.showAllEducation ? "View less" : "See all"}
            </button>
          </div>
        </div>
        <div>
          {context.education
            .slice(0, context.showAllEducation ? context.education.length : 2)
            .map((ele) => (
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
                highlight={true}
                handleEducationDelete={() =>
                  context.handleEducationDelete(ele.key)
                }
                handleAddEducationToHome={() =>
                  context.handleAddEducationToHome(ele)
                }
              />
            ))}
        </div>
      </div>
      {/* -----------------------------------Tech skills-------------------------------  */}
      <div className="w-[100%]  my-8 rounded-lg p-2">
        <h1 className="text-2xl font-bold self-center">Tech skills</h1>
        <div className="flex flex-wrap my-8">
          {context.skills.map((ele) => (
            <SkillCard
              key={ele.key}
              img={ele.img}
              skill={ele.skill}
              highlight={true}
              handleSkillDelete={() => context.handleSkillDelete(ele.key)}
            />
          ))}
        </div>
        <div>
          <input
            className="md:w-[88%] w-[68%] border-[1.5px] border-[#E4E4E7] py-2 px-4 my-2 rounded-lg text-medium focus:outline-0"
            type="text"
            onChange={(e) => context.setAddSkil(e.target.value)}
            value={context.addSkill}
          />
          <button
            className="rounded-[6px] ml-4 py-2 px-6 font-medium bg-[#4F46E5] text-white  self-center"
            onClick={context.handleAddSkill}
          >
            Add
          </button>
        </div>
      </div>
      {/* --------------------------------------- Interest ----------------------------------  */}
      <div className="w-[100%] my-8 rounded-lg p-2">
        <h1 className="text-2xl font-bold self-center">Interest</h1>
        <div className="my-8 flex flex-wrap">
          {context.interests.map((ele) => (
            <InterestCard
              key={ele.key}
              title={ele.title}
              highlight={true}
              handleInterestDelete={() => context.handleInterestDelete(ele.key)}
            />
          ))}
        </div>
        <div>
          <input
            className="md:w-[88%] w-[68%] border-[1.5px] border-[#E4E4E7] py-2 px-4 my-2 rounded-lg text-medium focus:outline-0"
            type="text"
            onChange={(e) => context.setAddInterest(e.target.value)}
            value={context.addInterest}
          />
          <button
            className="rounded-[6px] ml-4 py-2 px-6 font-medium bg-[#4F46E5] text-white  self-center"
            onClick={context.handleAddInterest}
          >
            Add
          </button>
        </div>
      </div>
      {/* -------------------------------------------Buttons--------------------------------  */}
      <div className="flex justify-end md:mb-20 mb-10 w-[100%]  my-8 rounded-lg p-2">
        <Link href="/">
          <button
            className="self-center py-2 px-4 font-medium flex justify-center align-middle rounded-[6px] bg-[#F4F4F5]"
            onClick={context.handleResumeCancel}
          >
            Cancel
          </button>
        </Link>
        <Link href="/">
          <button
            className="rounded-[6px] mx-3 mr-0 md:mr-3 ml-7 py-2 px-4 font-medium bg-[#4F46E5] text-white  self-center"
            onClick={context.handleResumeSubmit}
          >
            Save changes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Resume;
