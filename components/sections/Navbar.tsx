import Image from "next/image";
import Thunder from "../../Assets/Vector.png";
import Profile from "../../Assets/avatar.png";
import Hexagon from "../../Assets/Polygon.png";

const Navbar = () => {
  return (
    <div className="flex justify-between p-5">
      <h2 className="text-2xl font-bold">codedamn</h2>
      <div className="flex w-auto">
        <div className="self-center mx-2 hidden cursor-pointer border-[rgba(0,0,0,0.08)] border-[1px] bg-[#FAFAFA]  h-9 rounded-xl px-2 w-80 align-middle justify-between text-[#71717A] md:flex">
          <div className="flex">
            <div className="flex align-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 self-center text-[#71717A]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>

            <p className="self-center ml-1 text-sm">Search</p>
          </div>
          <button className="self-center flex justify-center text-sm bg-[rgba(0,0,0,0.08)] px-[8px] py-[2px] rounded-md">
            <p> Courses</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 self-center mt-[4px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden w-14 justify-center align-middle grow-0 md:flex">
          <Image
            className="self-center"
            src={Thunder}
            alt="thunder"
            width={14}
            height={10}
          />
          <p className="text-xl font-bold text-zinc-500 self-center ml-1">2</p>
        </div>
        <div className="md:flex hidden w-14 justify-center align-middle">
          <span className="self-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
            <p className="absolute bg-pink-600 w-4 h-4 text-xs text-white font-semibold flex justify-center align-middle rounded-full self-center bottom-3 left-3">
              1
            </p>
          </span>
        </div>
        <div className="relative">
          <Image src={Profile} alt="profile" width={45} height={45} />
          <div className="absolute top-5">
            <Image src={Hexagon} alt="hexagon" width={70} height={70} />
            <p className="absolute text-xs text-white font-semibold top-[13px] left-5">
              5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
