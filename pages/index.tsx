import { useContext, useEffect } from "react";
import Navbar from "../components/sections/Navbar";
import Overview from "../components/sections/Overview";
import ToggleBar from "../components/sections/ToggleBar";
import Portfolio from "../components/sections/Home-Portfolio/Portfolio";
import Resume from "../components/sections/Home-Resume/Resume";
import { PortfolioContext } from "../components/Context/PortfolioContext";
import { ProfileContext } from "../components/Context/ProfileContext";
import { ResumeContext } from "../components/Context/resumeContext";
import Modal from "../components/smallComponents/modal";

export default function Home() {
  const context = useContext(PortfolioContext);
  const profileContext = useContext(ProfileContext);
  const resumeContext = useContext(ResumeContext);

  useEffect(() => {
    if (!JSON.parse(window?.localStorage?.getItem("profile"))) {
      window?.localStorage?.setItem(
        "profile",
        JSON.stringify(profileContext?.profileData)
      );
    }
    if (!JSON.parse(window?.localStorage?.getItem("resume"))) {
      window?.localStorage?.setItem(
        "resume",
        JSON.stringify({
          about: resumeContext?.about,
          education: resumeContext?.education,
          homeEducation: resumeContext?.homeEducation,
          skills: resumeContext?.skills,
          interests: resumeContext?.interests,
        })
      );
    }
    if (!JSON.parse(window?.localStorage?.getItem("socials"))) {
      window?.localStorage?.setItem(
        "socials",
        JSON.stringify(context.socialMediaLinks)
      );
    }
    if (!JSON.parse(window?.localStorage?.getItem("playgrounds"))) {
      window?.localStorage?.setItem(
        "playgrounds",
        JSON.stringify({
          homePlaygroudData: context?.homePlaygrounds,
          playgrounds: context?.playgrounds,
        })
      );
    }
    if (!JSON.parse(window?.localStorage?.getItem("projects"))) {
      window?.localStorage?.setItem(
        "projects",
        JSON.stringify({
          allProjects: context?.allProjects,
          homeProjects: context?.homeProjects,
        })
      );
    }
  }, []);

  return (
    <div>
      {resumeContext?.showModal ? <Modal /> : null}

      <Navbar />
      <Overview />
      <ToggleBar />
      {context?.path ? <Portfolio /> : <Resume />}
    </div>
  );
}
