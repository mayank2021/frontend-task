import { useContext } from "react";
import SocialEditCard from "../../smallComponents/socialEditCard";
import { PortfolioContext } from "../../Context/PortfolioContext";

const Socials = () => {
  const context = useContext(PortfolioContext);

  return (
    <div className="md:w-[80%] w-[100%] md:px-20 px-6">
      <div>
        {context.socialMediaLinks?.map((ele) => (
          <SocialEditCard
            key={ele?.key}
            label={ele?.title}
            element={ele}
            value={ele.link}
            handleChange={(e, element) =>
              context?.handleEditSocials(e, element)
            }
          />
        ))}
      </div>
      <div className="flex justify-end my-10 mb-10 md:mb-20">
        <button
          className="self-center py-2 px-4 font-medium flex justify-center align-middle rounded-[6px] bg-[#F4F4F5]"
          onClick={context.handleCancelSubmit}
        >
          Cancel
        </button>
        <button
          className="rounded-[6px] mx-3 ml-7 py-2 px-4 font-medium bg-[#4F46E5] text-white  self-center"
          onClick={context.handleSocialSubmit}
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export default Socials;
