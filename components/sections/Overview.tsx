import { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Avatar from "./../../Assets/avatar.png";
import { ProfileContext } from "../Context/ProfileContext";
import { ResumeContext } from "../Context/resumeContext";
import { PortfolioContext } from "../Context/PortfolioContext";

const Overview = () => {
  const profileContext = useContext(ProfileContext);
  const resumeContext = useContext(ResumeContext);
  const portfolioContext = useContext(PortfolioContext);

  useEffect(() => {
    profileContext.setProfileData(
      JSON?.parse(window?.localStorage?.getItem("profile"))
    );
    let skill = JSON?.parse(window?.localStorage?.getItem("resume"));
    resumeContext.setSkills(skill?.skills);
    portfolioContext.setSocialMediaLinks(
      JSON?.parse(window?.localStorage?.getItem("socials"))
    );
  }, []);
  return (
    <div className="border-2 md:w-[78%] w-[85%] mx-auto my-8 rounded-lg">
      <div className="rounded-t-lg bg-gradient-to-r from-sky-500 to-indigo-500 relative h-36 flex justify-end align-top">
        <Link href="/edit">
          <button className="self-start bg-[rgba(255,255,255,0.2)] border-[rgba(255,255,255,0.4)] flex text-white border-[1px] rounded-lg mt-5 mr-5 py-1 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            <span className="text-sm">Edit</span>
          </button>
        </Link>
        <Image
          className="w-[100px] top-6 left-6 rounded-full absolute md:w-[150px] md:top-16 md:left-6"
          src={
            profileContext?.userProfile ? profileContext?.userProfile : Avatar
          }
          alt="profile"
          width={150}
          height={150}
        />
      </div>

      <div className="md:pl-44 p-6">
        <div className="flex flex-wrap align-middle ml-2">
          <h1 className="text-2xl mr-8 font-bold self-center capitalize md:mr-0">
            {profileContext?.profileData?.name}
          </h1>
          <p className="bg-[#BEF264] text-sm m-2 rounded-[4px] self-center px-2 py-[2px] font-medium">
            Pro
          </p>
          {profileContext?.profileData?.openToWork ? (
            <p className="bg-[#E0F2FE] m-2 text-[#075985] rounded-[4px] self-center px-2 py-[2px] font-medium">
              Looking for job
            </p>
          ) : null}
        </div>
        <p className="text-[#71717A] my-1 ml-2 capitalize">
          {profileContext?.profileData?.about}
        </p>
        {profileContext?.profileData?.stats ? (
          <p className="text-[#A1A1AA] flex mb-2 ml-2">
            <span className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>
            Delhi, India
          </p>
        ) : null}

        <div className="mt-10 flex flex-wrap">
          {resumeContext?.skills?.map((ele) => (
            <span
              key={ele.key}
              className="m-2 w-auto self-center font-semibold px-3 py-1 h-8 rounded-[6px] bg-[#F4F4F5] text-sm"
            >
              {ele.skill}
            </span>
          ))}
        </div>
        <hr className="md:my-8 ml-2 my-4" />
        <div className="flex flex-wrap justify-between align-middle">
          <div className="flex align-middle flex-wrap justify-center">
            {portfolioContext?.socialMediaLinks?.map((ele) => {
              if (ele.link) {
                return (
                  <a
                    key={ele?.key}
                    href={ele?.link}
                    target="_blank"
                    rel="noreferrer"
                    className="border-2 m-2 w-10 h-10 flex justify-center align-middle rounded-[6px]"
                  >
                    <Image
                      className="self-center"
                      src={ele?.img}
                      alt={ele?.title}
                      width={ele.width}
                      height={ele.height}
                    />
                  </a>
                );
              }
            })}
          </div>
          <div className="w-[100%] flex align-middle justify-end">
            <button className="m-2 p-1 w-10 h-10 flex justify-center align-middle rounded-[6px] bg-[#F4F4F5]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 self-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </button>
            <button
              className="rounded-[6px] font-medium bg-[#4F46E5] text-white w-28 h-10 self-center"
              onClick={() => resumeContext.setShowModal(true)}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
