import { createContext, useState } from "react";
import { StaticImageData } from "next/image";
import Avatar from "./../../Assets/avatar.png";

type profileContextProps = {
  children: React.ReactNode;
};

type profileDataType = {
  name: string;
  about: string;
  profession: string;
  DOB: string;
  gender: string;
  stats: boolean;
  openToWork: boolean;
};

type profileContextType = {
  profileData: profileDataType;
  setProfileData: React.Dispatch<React.SetStateAction<profileDataType>>;
  handleProfileSubmit: () => void;
  handleProfileCancel: () => void;
  userProfile: string | StaticImageData;
  setUserProfile: React.Dispatch<
    React.SetStateAction<string | StaticImageData>
  >;
  handleEditProfile: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

export const ProfileContext = createContext<profileContextType | null>(null);

export const ProfileContextProvider = ({ children }: profileContextProps) => {
  const [profileData, setProfileData] = useState<profileDataType>({
    name: "mayank sonkar",
    about: "frontend deveoper | IIITT 23",
    profession: "student",
    DOB: "02/08/2001",
    gender: "male",
    stats: true,
    openToWork: true,
  });
  const [userProfile, setUserProfile] = useState<string | StaticImageData>();

  const handleProfileSubmit = () => {
    window?.localStorage?.setItem("profile", JSON.stringify(profileData));
  };

  const handleProfileCancel = () => {};

  const handleEditProfile = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(e.target.name, e.target.value, "hello");
    if (e.target.name === "stats") {
      setProfileData({
        ...profileData,
        stats: !profileData.stats,
      });
    } else if (e.target.name === "openToWork") {
      setProfileData({
        ...profileData,
        openToWork: !profileData.openToWork,
      });
    } else {
      setProfileData({
        ...profileData,
        [e.target.name]: [e.target.value],
      });
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        profileData,
        setProfileData,
        handleProfileSubmit,
        handleProfileCancel,
        handleEditProfile,
        userProfile,
        setUserProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
