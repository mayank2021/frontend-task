import Image, { StaticImageData } from "next/image";

type skillType = {
  img: string | StaticImageData;
  skill: string;
  highlight: boolean;
  handleSkillDelete?: () => void;
};

const SkillCard = ({ img, skill, highlight, handleSkillDelete }: skillType) => {
  return (
    <div className="flex align-middle border-[1px] p-2 rounded-md m-2">
      <Image
        className="self-center mr-1"
        src={img}
        alt="html"
        width={20}
        height={20}
      />
      <p className="text-[#18181B] font-semibold mr-1">{skill}</p>
      {highlight ? (
        <button onClick={handleSkillDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-[#71717A]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      ) : null}
    </div>
  );
};

export default SkillCard;
