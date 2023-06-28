import { useContext, useEffect } from "react";
import PlaygroundCard from "../../smallComponents/playgroundCard";
import { PortfolioContext } from "../../Context/PortfolioContext";

const Playgrounds = () => {
  const context = useContext(PortfolioContext);

  useEffect(() => {
    let playground = JSON?.parse(window?.localStorage?.getItem("playgrounds"));
    context.setHomePlaygrounds(playground?.homePlaygroudData);
  }, []);
  return (
    <div className="md:w-[78%] w-[85%] mx-auto my-8 rounded-lg p-2">
      <div className="flex align-middle justify-between py-4">
        <h1 className="text-2xl font-bold self-center">Playgrounds</h1>
        {/* <button className="text-[#4F46E5] font-semibold">
          Create new playground
        </button> */}
      </div>
      <div className="flex flex-wrap justify-between">
        {context?.homePlaygrounds?.map((ele) => (
          <PlaygroundCard
            key={ele.key}
            cardImage={ele.cardImage}
            title={ele.title}
            techUsed={ele.techUsed}
            createdTime={ele.createdTime}
            peopleImg1={ele.peopleImg1}
            peopleImg2={ele.peopleImg2}
            peopleName1={ele.peopleName1}
            peopleName2={ele.peopleName2}
            sharedNumber={ele.sharedNumber}
            homePlayground={ele.homePlayground}
            highlight={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Playgrounds;
