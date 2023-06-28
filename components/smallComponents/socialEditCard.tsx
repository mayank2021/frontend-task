import { StaticImageData } from "next/image";

type socialLinksType = {
  key: number;
  title: string;
  img: string | StaticImageData;
  link: string;
  width: number;
  height: number;
};

type socialEditCardType = {
  value: string;
  label: string;
  element: socialLinksType;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    element: socialLinksType
  ) => void;
};

const SocialEditCard = ({
  value,
  label,
  handleChange,
  element,
}: socialEditCardType) => {
  return (
    <div className="text-[#18181B] flex flex-col my-4">
      <label htmlFor={label} className="text-lg font-medium">
        {label}
      </label>
      <input
        name={label}
        id={label}
        className="border-[1.5px] border-[#E4E4E7] py-3 px-4 my-2 rounded-lg text-medium focus:outline-0"
        type="text"
        value={value}
        onChange={(e) => handleChange(e, element)}
        placeholder={`${label} profile URL`}
      />
    </div>
  );
};

export default SocialEditCard;
