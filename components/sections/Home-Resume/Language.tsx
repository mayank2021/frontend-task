import Image from "next/image";
import India from "./../../../Assets/india.png";
import US from "./../../../Assets/us.png";

const Language = () => {
  return (
    <div className="md:w-[78%] w-[85%] mx-auto my-8 rounded-lg p-2">
      <h1 className="text-2xl font-bold self-center">Language</h1>
      <div className="flex flex-wrap my-8">
        <div className="flex align-middle border-[1px] py-2 px-3 rounded-md m-2">
          <Image
            className="self-center mr-1"
            src={India}
            alt="html"
            width={20}
            height={20}
          />

          <p className="text-[#18181B] font-semibold">Hindi</p>
        </div>
        <div className="flex align-middle border-[1px] py-2 px-3 rounded-md m-2">
          <Image
            className="self-center mr-1"
            src={US}
            alt="html"
            width={20}
            height={20}
          />

          <p className="text-[#18181B] font-semibold">English</p>
        </div>
      </div>
    </div>
  );
};

export default Language;
