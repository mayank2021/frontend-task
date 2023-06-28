import { createContext, useState } from "react";
import { educationData, homeEducationData } from "../../Data/educationData";
import { StaticImageData } from "next/image";
import { skillData } from "../../Data/skillData";
import HTML from "./../../Assets/html-5.png";
import { interestData } from "../../Data/InterestData";

type resumeContextProps = {
  children: React.ReactNode;
};

type educationType = {
  key: number;
  img: string | StaticImageData;
  title: string;
  location: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
  homeEducation: boolean;
};

type skillType = {
  key: number;
  img: string | StaticImageData;
  skill: string;
};

type interestType = {
  key: number;
  title: string;
};

type resumeContextType = {
  education: educationType[];
  setEducation: React.Dispatch<React.SetStateAction<educationType[]>>;
  skills: skillType[];
  setSkills: React.Dispatch<React.SetStateAction<skillType[]>>;
  handleSkillDelete: (key: number) => void;
  addSkill: string;
  setAddSkil: React.Dispatch<React.SetStateAction<string>>;
  handleAddSkill: () => void;
  interests: interestType[];
  setInterests: React.Dispatch<React.SetStateAction<interestType[]>>;
  handleInterestDelete: (key: number) => void;
  addInterest: string;
  setAddInterest: React.Dispatch<React.SetStateAction<string>>;
  handleAddInterest: () => void;
  handleEducationDelete: (key: number) => void;
  handleAddEducationToHome: (ele: educationType) => void;
  homeEducation: educationType[];
  setHomeEducation: React.Dispatch<React.SetStateAction<educationType[]>>;
  showAllEducation: boolean;
  setShowAllEducation: React.Dispatch<React.SetStateAction<boolean>>;
  about: string;
  setAbout: React.Dispatch<React.SetStateAction<string>>;
  handleResumeSubmit: () => void;
  handleResumeCancel: () => void;
  showAllAbout: boolean;
  setShowAllAbout: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ResumeContext = createContext<resumeContextType | null>(null);

export const ResumeContextProvider = ({ children }: resumeContextProps) => {
  const [education, setEducation] = useState<educationType[]>(educationData);
  const [skills, setSkills] = useState<skillType[]>(skillData);
  const [addSkill, setAddSkil] = useState<string>("");
  const [interests, setInterests] = useState<interestType[]>(interestData);
  const [addInterest, setAddInterest] = useState<string>("");
  const [homeEducation, setHomeEducation] =
    useState<educationType[]>(homeEducationData);
  const [showAllEducation, setShowAllEducation] = useState<boolean>(false);
  const [about, setAbout] = useState<string>(
    "A self-driven, versatile, reliable, diligent individual who is calm and cheerful with a team-minded approach to work and getting things done. A student who is passionate and with a keen eye for design"
  );
  const [showAllAbout, setShowAllAbout] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleResumeSubmit = () => {
    setShowAllEducation(false);
    let newEdu = [];
    education?.forEach((ele) => {
      if (ele.homeEducation) {
        newEdu.unshift(ele);
      } else {
        newEdu.push(ele);
      }
    });
    window?.localStorage?.setItem(
      "resume",
      JSON.stringify({
        about: about,
        education: newEdu,
        homeEducation: homeEducation,
        skills: skills,
        interests: interests,
      })
    );
  };

  const handleResumeCancel = () => {
    setShowAllEducation(false);
  };

  const handleSkillDelete = (key: number) => {
    let newArray = [...skills];
    let arr = newArray?.filter((pg) => pg.key !== key);
    setSkills([...arr]);
  };

  const handleAddSkill = () => {
    if (addSkill.length <= 0) {
      alert("Plaease enter a valid skill");
    } else if (addSkill.indexOf(" ") >= 0) {
      alert("Please add a single word of use - between them");
    } else {
      setSkills([
        ...skills,
        {
          key: skills.length + 1,
          img: HTML,
          skill: addSkill,
        },
      ]);
      setAddSkil("");
    }
  };

  const handleInterestDelete = (key: number) => {
    let newArray = [...interests];
    let arr = newArray?.filter((pg) => pg.key !== key);
    setInterests([...arr]);
  };

  const handleAddInterest = () => {
    if (addInterest.length <= 0) {
      alert("Plaease enter a valid skill");
    } else if (addInterest.indexOf(" ") >= 0) {
      alert("Please add a single word of use - between them");
    } else {
      setInterests([
        ...interests,
        {
          key: interests.length + 1,
          title: addInterest,
        },
      ]);
      setAddInterest("");
    }
  };

  const handleEducationDelete = (key: number) => {
    let newArray = [...education];
    let arr = newArray?.filter((pg) => pg.key !== key);
    setEducation([...arr]);
  };

  const handleAddEducationToHome = (ele: educationType) => {
    education.forEach((edu) => {
      if (
        edu.key === ele.key &&
        homeEducation?.some((edu1) => edu1.key === ele.key) === false &&
        homeEducation.length < 2
      ) {
        setHomeEducation([...homeEducation, edu]);
      } else if (
        edu.key === ele.key &&
        homeEducation?.some((edu1) => edu1.key === ele.key) === true
      ) {
        let newArray = [...homeEducation];
        let arr = newArray?.filter((edu) => edu.key !== ele.key);
        setHomeEducation([...arr]);
      } else if (
        edu.key === ele.key &&
        homeEducation?.some((edu1) => edu1.key === ele.key) === false &&
        homeEducation.length === 2
      ) {
        alert("limit exceeds");
      }
    });

    let arr = education.map((edu) => {
      if (
        edu.key === ele.key &&
        homeEducation?.some((edu1) => edu1.key === ele.key) === false &&
        homeEducation.length < 2
      ) {
        return { ...edu, homeEducation: true };
      } else if (
        edu.key === ele.key &&
        homeEducation?.some((edu1) => edu1.key === ele.key) === true
      ) {
        return { ...edu, homeEducation: false };
      }
      return edu;
    });
    setEducation(arr);
  };
  return (
    <ResumeContext.Provider
      value={{
        education,
        setEducation,
        skills,
        setSkills,
        handleSkillDelete,
        addSkill,
        setAddSkil,
        handleAddSkill,
        interests,
        setInterests,
        handleInterestDelete,
        addInterest,
        setAddInterest,
        handleAddInterest,
        handleEducationDelete,
        handleAddEducationToHome,
        homeEducation,
        setHomeEducation,
        showAllEducation,
        setShowAllEducation,
        about,
        setAbout,
        handleResumeSubmit,
        handleResumeCancel,
        showAllAbout,
        setShowAllAbout,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
