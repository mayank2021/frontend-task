import Image, { StaticImageData } from "next/image";

type playgroundType = {
  cardImage: string | StaticImageData;
  title: string;
  techUsed: string;
  createdTime: string;
  peopleImg1: string | StaticImageData;
  peopleImg2: string | StaticImageData;
  peopleName1: string;
  peopleName2: string;
  sharedNumber: number;
  homePlayground: boolean;
  highlight: boolean;
  handlePlaygroundDelete?: () => void;
  handleAddToHomePlayground?: () => void;
};

const PlaygroundCard = ({
  cardImage,
  title,
  techUsed,
  createdTime,
  peopleImg1,
  peopleImg2,
  peopleName1,
  peopleName2,
  sharedNumber,
  homePlayground,
  highlight,
  handlePlaygroundDelete,
  handleAddToHomePlayground,
}: playgroundType) => {
  return (
    <div
      className={`${
        homePlayground && highlight
          ? " border-[#4F46E5] bg-[#EEF2FF] border-[3px]"
          : " bg-[#FAFAFA] border-[1px]"
      } rounded-md flex md:p-4 p-2 w-[100%] my-2  md:w-[48%]`}
    >
      <div>
        <Image
          className="mr-1"
          src={cardImage}
          alt="html"
          width={40}
          height={40}
        />
      </div>
      <div>
        <h1 className="font-bold text-xl">{title}</h1>
        <div className="text-[#71717A] text-sm flex my-2">
          <p>{techUsed}</p>
          <span className="w-[4px] h-[4px] rounded-full bg-[#71717A] self-center mx-2"></span>
          <p>{createdTime}</p>
        </div>
        <div className="flex">
          <div className="flex">
            <Image
              className="mr-1 self-center"
              src={peopleImg1}
              alt="people"
              width={20}
              height={20}
            />
            <Image
              className="self-center relative border-[1px] border-white right-[8px] rounded-full"
              src={peopleImg2}
              alt="people"
              width={20}
              height={20}
            />
          </div>
          <p className="text-[#71717A] text-xs self-center">
            Shared with{" "}
            <span className="font-semibold">
              {peopleName1}, {peopleName2}...
            </span>{" "}
            +{sharedNumber}
            more
          </p>
        </div>
      </div>
      {highlight ? (
        <div className="flex flex-col  justify-evenly px-2 grow">
          <button
            className="bg-[rgba(0,0,0,0.06)] p-2 rounded-lg w-9 self-end"
            onClick={handlePlaygroundDelete}
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
            className="bg-[rgba(0,0,0,0.06)] p-2 rounded-lg w-9 self-end"
            onClick={handleAddToHomePlayground}
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

export default PlaygroundCard;
