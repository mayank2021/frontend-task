import { useContext, useEffect } from "react";
import Image from "next/image";
import Avatar from "./../../../Assets/avatar.png";
import { ProfileContext } from "../../Context/ProfileContext";
import Link from "next/link";

const Profile = () => {
  const context = useContext(ProfileContext);

  useEffect(() => {
    let profileData = JSON?.parse(window?.localStorage?.getItem("profile"));
    context.setProfileData(profileData);
  }, []);

  return (
    <div className="md:w-[80%] w-[100%] md:px-20 p-4 pb-0">
      <div className="flex align-middle mb-10 pt-0">
        <Image
          className="rounded-full"
          src={context?.userProfile ? context?.userProfile : Avatar}
          alt="profile"
          width={80}
          height={80}
        />
        <input
          type="file"
          className="rounded-[6px] w-60 mx-3 md:ml-7 py-2 px-4 font-medium bg-[#4F46E5] text-white  self-center"
          name="profilePhoto"
          id="profilePhoto"
          onChange={(e) =>
            context.setUserProfile(URL.createObjectURL(e.target.files[0]))
          }
        />

        <button
          className="self-center py-2 px-4 font-medium flex justify-center align-middle rounded-[6px] bg-[#F4F4F5]"
          onClick={() => context?.setUserProfile(Avatar)}
        >
          Delete
        </button>
      </div>
      <form>
        <div>
          <div className="text-[#18181B] flex flex-col">
            <label htmlFor="name" className="text-lg font-medium">
              Display name
            </label>
            <input
              name="name"
              id="name"
              className="border-[1.5px] border-[#E4E4E7] py-3 px-4 my-2 rounded-lg text-medium focus:outline-0"
              type="text"
              placeholder="Name"
              value={context?.profileData?.name}
              onChange={context?.handleEditProfile}
            />
            <p className="text-[#71717A] text-sm">
              Name entered above will be used for all issued certificates
            </p>
          </div>
          <div className="text-[#18181B] flex flex-col my-6">
            <label htmlFor="about" className="text-lg font-medium">
              About
            </label>
            <textarea
              name="about"
              id="about"
              className="border-[1.5px] h-20 border-[#E4E4E7] py-3 px-4 my-2 rounded-lg text-medium focus:outline-0"
              placeholder="Please drop a short description here..."
              value={context?.profileData?.about}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                context?.handleEditProfile(e)
              }
            />
          </div>
          <div className="text-[#18181B] flex flex-col my-6">
            <label htmlFor="profession" className="text-lg font-medium">
              Profession
            </label>
            <input
              className="border-[1.5px] border-[#E4E4E7] py-3 px-4 my-2 rounded-lg text-medium focus:outline-0"
              type="text"
              name="profession"
              id="profession"
              placeholder="Ex:- Student"
              value={context?.profileData?.profession}
              onChange={context?.handleEditProfile}
            />
          </div>
          <div className="text-[#18181B] flex flex-col my-6">
            <label htmlFor="dob" className="text-lg font-medium">
              Date of birth
            </label>
            <input
              className="text-[#18181B] border-[1.5px] border-[#E4E4E7] py-3 px-4 my-2 rounded-lg text-medium focus:outline-0"
              type="date"
              name="DOB"
              id="DOB"
              placeholder="Ex:- Student"
              value={context?.profileData?.DOB}
              onChange={context?.handleEditProfile}
            />
          </div>
          <div className="text-[#18181B] flex flex-col mb-6">
            <label htmlFor="gender" className="text-lg font-medium">
              Gender
            </label>
            <select
              className="border-[1.5px] border-[#E4E4E7] py-3 px-4 my-2 rounded-lg text-medium focus:outline-0"
              name="gender"
              id="gender"
              value={context?.profileData?.gender}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                context?.handleEditProfile(e)
              }
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="pt-10">
          <h1 className="text-2xl font-bold self-center">Section visibility</h1>
          <p className="text-[#71717A] text-md my-1">
            Select which sections and content should show on your profile page.
          </p>
          <div className="md:my-12">
            <div className="flex align-middle justify-between md:pl-12 pl-6 my-4">
              <div>
                <h1 className="text-xl font-bold self-center">Location</h1>
                <p className="text-[#71717A] text-sm my-1">
                  Let recruiters know your current location
                </p>
              </div>
              <label className="self-center relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="stats"
                  id="stats"
                  className="sr-only peer"
                  checked={context?.profileData?.stats}
                  onChange={context?.handleEditProfile}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F46E5]"></div>
              </label>
            </div>
            <div className="flex align-middle justify-between md:pl-12 pl-6 my-4">
              <div>
                <h1 className="text-xl font-bold self-center">
                  Looking for job
                </h1>
                <p className="text-[#71717A] text-sm my-1">
                  Show the recruiters that you are open to new opportunities
                </p>
              </div>
              <label className="self-center relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="openToWork"
                  id="openToWork"
                  className="sr-only peer"
                  checked={context?.profileData?.openToWork}
                  onChange={context?.handleEditProfile}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#4F46E5]"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end my-10 mb-10 md:mb-20">
          <Link href="/">
            <button
              className="self-center py-2 px-4 font-medium flex justify-center align-middle rounded-[6px] bg-[#F4F4F5]"
              onClick={context?.handleProfileCancel}
            >
              Cancel
            </button>
          </Link>

          <Link href="/">
            <button
              className="rounded-[6px] mx-3 ml-7 py-2 px-4 font-medium bg-[#4F46E5] text-white  self-center"
              onClick={context?.handleProfileSubmit}
            >
              Save changes
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Profile;
