import React from "react";
import GitHub from "./../../../Assets/github.png";
import Dribbble from "./../../../Assets/instagram1.png";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="md:w-[78%] w-[85%] mx-auto my-8 rounded-lg p-2">
      <h1 className="text-2xl font-bold self-center">Work experience</h1>
      <div className="my-8">
        <div className="bg-[#FAFAFA] rounded-lg flex my-4 p-2 md:p-6 ">
          <div className="md:w-[11%]">
            <Image
              className="w-[250px]"
              src={GitHub}
              alt="github"
              width={50}
              height={50}
            />
          </div>
          <div className="pl-2 ">
            <h1 className="text-xl font-medium text-[#18181B]">
              Front-end developer at GitHub
            </h1>
            <div className="flex justify-between">
              <div className="flex text-[#18181B] text-sm">
                <p className="mr-1">London</p>
                <span className="hidden md:flex w-[4px] h-[4px] rounded-full bg-[#71717A] self-center mx-2"></span>
                <p>Google</p>
              </div>
              <p className="text-[#18181B] text-sm font-medium">
                May 2021 - Present
              </p>
            </div>
            <p className="text-[#71717A] text-sm text-justify mt-4">
              This role would be great for a web developer with 3+ years
              experience in designing and developing responsive websites. This
              position requires a profound understanding of the development
              process, using front-end technologies including HTML5, CSS3,
              JavaScript, jQuery, PHP/WordPress.
            </p>
          </div>
        </div>
        <div className="bg-[#FAFAFA]  rounded-lg flex my-4 p-2 md:p-6">
          <div className="md:w-[11%]">
            <Image
              className="w-[250px]"
              src={Dribbble}
              alt="Dribbble"
              width={36}
              height={36}
            />
          </div>
          <div className="pl-2">
            <h1 className="text-xl font-medium text-[#18181B]">
              Front-end developer at Dribbble
            </h1>
            <div className="flex justify-between">
              <div className="flex text-[#18181B] text-sm">
                <p className="mr-1 md:mr-0">Delhi</p>
                <span className="md:flex hidden w-[4px] h-[4px] rounded-full bg-[#71717A] self-center mx-2"></span>
                <p>FB</p>
              </div>
              <p className="text-[#18181B] text-sm font-medium">
                June 2020 - May 2021
              </p>
            </div>
            <p className="text-[#71717A] text-sm text-justify mt-4">
              This role would be great for a web developer with 3+ years
              experience in designing and developing responsive websites. This
              position requires a profound understanding of the development
              process, using front-end technologies including HTML5, CSS3,
              JavaScript, jQuery, PHP/WordPress.
            </p>
            <div className="mt-4">
              <h1 className="text-md font-medium text-[#18181B]">
                Job responsibilities
              </h1>
              <ul className="text-[#71717A] text-sm text-justify list-disc pl-4">
                <li>
                  Create an appealing design and turn it into a WordPress plugin
                </li>
                <li>Manage all technical aspects of the CMS</li>
                <li>Conducting website/application tests</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
