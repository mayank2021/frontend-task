import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

type statsType = {
  img: string | StaticImageData;
  title: string;
  description: string;
};

const StatsCard = ({ img, title, description }: statsType) => {
  return (
    <div className="flex border-[1px] border-[rgba(0,0,0,0.05)] rounded-lg w-[49%] p-2 my-2">
      <Image
        className="w-[50px] h-[50px]"
        src={img}
        alt="Lightening"
        width={40}
        height={40}
      />
      <div className="ml-2">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-[#71717A]">{description}</p>
      </div>
    </div>
  );
};

export default StatsCard;
