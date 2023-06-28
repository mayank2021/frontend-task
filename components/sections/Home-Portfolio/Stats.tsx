import { statsData } from "../../../Data/statsData";
import StatsCard from "../../smallComponents/StatsCard";

const Stats = () => {
  return (
    <div className="md:w-[78%] w-[85%] mx-auto my-8 rounded-lg p-2">
      <h1 className="text-2xl font-bold mb-6">Stats</h1>
      <div className="flex flex-wrap justify-between">
        {statsData?.map((ele) => (
          <StatsCard
            key={ele.key}
            img={ele.img}
            title={ele.title}
            description={ele.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Stats;
