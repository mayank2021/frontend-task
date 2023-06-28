import CertificteCard from "../../smallComponents/CertificteCard";
import { certificateData } from "../../../Data/certificateData";

const Certificates = () => {
  return (
    <div className="md:w-[78%] w-[85%] mx-auto my-8 rounded-lg p-2">
      <div className="flex align-middle justify-between py-4">
        <h1 className="text-2xl font-bold self-center">Certificates</h1>
        {/* <button className="text-[#4F46E5] font-semibold">
          Create new Certificate
        </button> */}
      </div>
      <div className="flex flex-wrap justify-between">
        {certificateData?.map((ele) => (
          <CertificteCard
            key={ele.key}
            img={ele.img}
            title={ele.title}
            issueDate={ele.issueDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
