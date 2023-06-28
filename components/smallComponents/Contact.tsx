import React from "react";
import Image from "next/image";
import MayankImg from "./../../Assets/profile-mayank.png";

const Contact = () => {
  return (
    <div className="flex align-middle flex-col md:flex-row">
      <div className="flex w-[250px] md:w-[450px] self-center p-2 rounded-lg justify-between align-middle border-[2px] border-[#4F46E5]">
        <Image
          className="rounded-lg self-center"
          src={MayankImg}
          alt="profile"
          width={750}
          height={750}
        />
      </div>
      <div className="p-3 text-[#333]">
        <h1 className="text-2xl font-medium">Mayank Sonkar</h1>
        <h1 className="font-medium">About</h1>
        <div className="bg-[#4F46E5] h-[3px] w-8 rounded-full"></div>
        <p className="text-sm text-justify mt-2">
          My name is Mayank Sonkar, a graduate from IIITT. I enhanced my skills
          by designing and developing a web application and I am extremely
          flexible and adaptive to learning new things.
        </p>
        <h1 className="font-medium mt-2">Contact</h1>

        <div className="bg-[#4F46E5] h-[3px] w-8 rounded-full"></div>
        <div className="flex pt-1">
          <p className="text-xs">mayanksonkar16@gmail.com</p>
          <p className="text-xs ml-2">+918859167328</p>
        </div>
        <div className="flex pt-2">
          <a
            className="flex m-2 ml-0 bg-[rgba(0,0,0,0.08)] px-2 py-1 rounded-sm cursor-pointer justify-center align-middle"
            href="https://shorturl.at/lNOT8"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 self-center mr-1 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <p>Resume</p>
          </a>
          <a
            className="flex m-2 bg-[rgba(0,0,0,0.08)] px-2 py-1 rounded-sm cursor-pointer justify-center align-middle"
            href="https://heymayank.surge.sh/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 self-center mr-1 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
              />
            </svg>

            <p>Portfolio</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
