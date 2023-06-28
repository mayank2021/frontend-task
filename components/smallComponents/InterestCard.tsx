import React from "react";

type interestType = {
  title: string;
  highlight: boolean;
  handleInterestDelete?: () => void;
};

const InterestCard = ({
  title,
  highlight,
  handleInterestDelete,
}: interestType) => {
  return (
    <div className="rounded-[6px] bg-[#F4F4F5] flex align-middle px-1 m-2">
      <span className="w-auto self-center font-semibold px-3 py-1 h-8  text-sm">
        {title}
      </span>
      {highlight ? (
        <button onClick={handleInterestDelete}>
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

export default InterestCard;
