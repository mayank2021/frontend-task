import { useContext } from "react";
import { PortfolioContext } from "../Context/PortfolioContext";

const ToggleBar = () => {
  const context = useContext(PortfolioContext);

  return (
    <div className="border-2 md:w-[78%] w-[85%] mx-auto my-8 rounded-lg p-2">
      <button
        className={`${
          context?.path ? "bg-[#EEF2FF] text-[#4338CA]" : "bg-[#F4F4F5]"
        } m-2 w-auto self-center font-semibold px-3 py-1 h-8 rounded-[6px] text-sm`}
        onClick={() => context.setPath(true)}
      >
        Portfolio
      </button>
      <button
        className={`${
          !context?.path ? "bg-[#EEF2FF] text-[#4338CA]" : "bg-[#F4F4F5]"
        } m-2 w-auto self-center font-semibold px-3 py-1 h-8 rounded-[6px] text-sm`}
        onClick={() => context.setPath(false)}
      >
        Resume
      </button>
    </div>
  );
};

export default ToggleBar;
