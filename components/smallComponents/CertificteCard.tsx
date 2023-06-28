import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

type certificateType = {
  img: string | StaticImageData;
  title: string;
  issueDate: string;
};

const CertificteCard = ({ img, title, issueDate }: certificateType) => {
  return (
    <div className="border-[#E4E4E7] border-[1px] rounded-md md:w-[48%] w-[100%] p-4 bg-[#FAFAFA] my-2">
      <Image className="mr-1" src={img} alt="html" width={35} height={35} />
      <div>
        <h1 className="font-bold text-xl text-[#18181B] mt-4">{title}</h1>
        <p className="text-sm text-[#71717A] mt-1 font-normal">{issueDate}</p>
        <p className="text-sm text-[#71717A] mt-1 font-medium">
          See credentials
        </p>
      </div>
    </div>
  );
};

export default CertificteCard;
