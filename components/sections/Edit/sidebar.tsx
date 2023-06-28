import { useContext } from "react";
import { PortfolioContext } from "../../Context/PortfolioContext";

const Sidebar = () => {
  const context = useContext(PortfolioContext);

  return (
    <div className="flex justify-between px-2 py-4 rounded-xl bg-[#FAFAFA] w-[100%] md:w-[25%] md:flex-col md:h-[10%] md:py-2 md:px-0">
      <div
        className={`${
          context.editSection === "profile"
            ? "text-[#18181B]"
            : "text-[#A1A1AA]"
        } flex p-2 cursor-pointer my-4 md:pl-6`}
        onClick={() => context.setEditSection("profile")}
      >
        <p
          className={`${
            context.editSection === "profile"
              ? "bg-[#18181B]"
              : "bg-transparent"
          } font-bold  w-[2px] h-6 mr-3`}
        ></p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-1 hidden md:flex"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
          />
        </svg>
        <p className="font-medium">Profile</p>
      </div>
      <div
        className={`${
          context.editSection === "socials"
            ? "text-[#18181B]"
            : "text-[#A1A1AA]"
        } flex p-2  cursor-pointer my-4 md:pl-6`}
        onClick={() => context.setEditSection("socials")}
      >
        <p
          className={`${
            context.editSection === "socials"
              ? "bg-[#18181B]"
              : "bg-transparent"
          } font-bold  w-[2px] h-6 mr-3`}
        ></p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-1 hidden md:flex"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
          />
        </svg>
        <p className="font-medium">Socials</p>
      </div>
      <div
        className={`${
          context.editSection === "portfolio"
            ? "text-[#18181B]"
            : "text-[#A1A1AA]"
        } flex p-2  cursor-pointer my-4 md:pl-6`}
        onClick={() => context.setEditSection("portfolio")}
      >
        <p
          className={`${
            context.editSection === "portfolio"
              ? "bg-[#18181B]"
              : "bg-transparent"
          } font-bold  w-[2px] h-6 mr-3`}
        ></p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-1 hidden md:flex"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
          />
        </svg>
        <p className="font-medium">Portfolio</p>
      </div>
      <div
        className={`${
          context.editSection === "resume" ? "text-[#18181B]" : "text-[#A1A1AA]"
        } flex p-2  cursor-pointer my-4 md:pl-6`}
        onClick={() => context.setEditSection("resume")}
      >
        <p
          className={`${
            context.editSection === "resume" ? "bg-[#18181B]" : "bg-transparent"
          } font-bold  w-[2px] h-6 mr-3`}
        ></p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-1 hidden md:flex"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
          />
        </svg>
        <p className="font-medium">Resume</p>
      </div>
    </div>
  );
};

export default Sidebar;
