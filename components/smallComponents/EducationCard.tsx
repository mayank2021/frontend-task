import React from "react";
import Image, { StaticImageData } from "next/image";

type educationType = {
  img: string | StaticImageData;
  title: string;
  location: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
  homeEducation: boolean;
  highlight: boolean;
  handleEducationDelete?: () => void;
  handleAddEducationToHome?: () => void;
};

const EducationCard = ({
  img,
  title,
  location,
  degree,
  startDate,
  endDate,
  description,
  homeEducation,
  highlight,
  handleEducationDelete,
  handleAddEducationToHome,
}: educationType) => {
  return (
    <div
      className={`${
        homeEducation && highlight
          ? " border-[#4F46E5] bg-[#EEF2FF]"
          : "border-transparent bg-[#FAFAFA]"
      } rounded-xl flex my-4 border-[3px] p-2 md:p-6`}
    >
      <div className="md:w-[4%] w-[100px]">
        <Image src={img} alt="School" width={40} height={40} />
      </div>
      <div className="pl-2  grow">
        <h1 className="text-xl font-medium text-[#18181B]">{title}</h1>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-wrap text-[#18181B] text-sm">
            <p>{location}</p>
            {degree.length ? (
              <>
                <span className="w-[4px] h-[4px] rounded-full bg-[#71717A] self-center mx-2"></span>
                <p>{degree}</p>
              </>
            ) : null}
          </div>
          <p className="text-[#18181B] text-sm font-medium">
            {startDate} - {endDate}
          </p>
        </div>
        {description.length ? (
          <p className="text-[#71717A] text-sm text-justify mt-4">
            {description}
          </p>
        ) : null}
      </div>
      {highlight ? (
        <div className="flex flex-col px-2 pl-4">
          <button
            className="bg-[rgba(0,0,0,0.06)] p-2 rounded-lg w-9 self-end my-2"
            onClick={handleEducationDelete}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
          <button
            className="bg-[rgba(0,0,0,0.06)] p-2 rounded-lg w-9 self-end my-2"
            onClick={handleAddEducationToHome}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
              />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default EducationCard;
