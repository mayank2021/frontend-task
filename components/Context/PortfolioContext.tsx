import { createContext, useState } from "react";
import { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { playgroundData, homePlaygroudData } from "../../Data/playgroundData";
import { projectData, homeProjectData } from "../../Data/projectData";
import { socialLinksData } from "../../Data/socialCardEditData";

type portfolioContextProps = {
  children: React.ReactNode;
};
type socialLinksType = {
  key: number;
  title: string;
  img: string | StaticImageData;
  link: string;
  width: number;
  height: number;
};

type playgroundType = {
  key: number;
  cardImage: string | StaticImageData;
  title: string;
  techUsed: string;
  createdTime: string;
  peopleImg1: string | StaticImageData;
  peopleImg2: string | StaticImageData;
  peopleName1: string;
  peopleName2: string;
  sharedNumber: number;
  homePlayground: boolean;
};

type projectType = {
  key: number;
  title: string;
  homeProject: boolean;
  highlight: boolean;
  tech: {
    img: StaticImageData;
    title: string;
  }[];
};

type portfolioContextType = {
  path: boolean;
  setPath: React.Dispatch<React.SetStateAction<boolean>>;
  editSection: string;
  setEditSection: React.Dispatch<React.SetStateAction<string>>;
  socialMediaLinks: socialLinksType[];
  setSocialMediaLinks: React.Dispatch<React.SetStateAction<socialLinksType[]>>;
  handleEditSocials: (
    e: React.ChangeEvent<HTMLInputElement>,
    element: socialLinksType
  ) => void;
  handleSocialSubmit: () => void;
  handleCancelSubmit: () => void;
  playgrounds: playgroundType[];
  setPlaygrounds: React.Dispatch<React.SetStateAction<playgroundType[]>>;
  handlePlaygroundDelete: (ele: number) => void;
  homePlaygrounds: playgroundType[];
  setHomePlaygrounds: React.Dispatch<React.SetStateAction<playgroundType[]>>;
  handleAddToHomePlayground: (ele: playgroundType) => void;
  showAllPlaygrounds: boolean;
  setShowAllPlaygrounds: React.Dispatch<React.SetStateAction<boolean>>;
  showAllProjects: boolean;
  setShowAllProjects: React.Dispatch<React.SetStateAction<boolean>>;
  handleProjectDelete: (ele: number) => void;
  allProjects: projectType[];
  setAllProjects: React.Dispatch<React.SetStateAction<projectType[]>>;
  handleAddToHomeProject: (ele: projectType) => void;
  handlePortfolioSubmit: () => void;
  handlePortfolioCancel: () => void;
  homeProjects: projectType[];
  setHomeProjects: React.Dispatch<React.SetStateAction<projectType[]>>;
};

export const PortfolioContext = createContext<portfolioContextType | null>(
  null
);

export const PortfolioContextProvider = ({
  children,
}: portfolioContextProps) => {
  const [path, setPath] = useState<boolean>(true);
  const [editSection, setEditSection] = useState<string>("profile");
  const [socialMediaLinks, setSocialMediaLinks] =
    useState<socialLinksType[]>(socialLinksData);
  const [playgrounds, setPlaygrounds] =
    useState<playgroundType[]>(playgroundData);

  const [homePlaygrounds, setHomePlaygrounds] =
    useState<playgroundType[]>(homePlaygroudData);
  const [showAllPlaygrounds, setShowAllPlaygrounds] = useState<boolean>(false);
  const [showAllProjects, setShowAllProjects] = useState<boolean>(false);
  const [allProjects, setAllProjects] = useState<projectType[]>(projectData);
  const [homeProjects, setHomeProjects] =
    useState<projectType[]>(homeProjectData);

  const router = useRouter();

  const handleEditSocials = (
    e: React.ChangeEvent<HTMLInputElement>,
    element: socialLinksType
  ) => {
    let newArr = socialMediaLinks?.map((ele) => {
      if (ele.key === element.key) {
        return {
          ...ele,
          link: e?.target?.value,
        };
      }
      return ele;
    });
    setSocialMediaLinks(newArr);
  };

  const handleSocialSubmit = () => {
    window?.localStorage?.setItem("socials", JSON.stringify(socialMediaLinks));
    router.push("/");
  };

  const handleCancelSubmit = () => {
    router.push("/");
  };

  const handlePlaygroundDelete = (ele: number) => {
    let newArray = [...playgrounds];
    let arr = newArray?.filter((pg) => pg.key !== ele);
    setPlaygrounds([...arr]);
  };

  const handlePortfolioSubmit = () => {
    setShowAllPlaygrounds(false);
    setShowAllPlaygrounds(false);

    let newPlaygrds = [];
    playgrounds?.forEach((ele) => {
      if (ele.homePlayground) {
        newPlaygrds.unshift(ele);
      } else {
        newPlaygrds.push(ele);
      }
    });

    let newProjects = [];
    allProjects?.forEach((ele) => {
      if (ele.homeProject) {
        newProjects.unshift(ele);
      } else {
        newProjects.push(ele);
      }
    });
    window?.localStorage?.setItem(
      "playgrounds",
      JSON.stringify({
        homePlaygroudData: homePlaygrounds,
        playgrounds: newPlaygrds,
      })
    );
    window?.localStorage?.setItem(
      "projects",
      JSON.stringify({
        allProjects: newProjects,
        homeProjects: homeProjects,
      })
    );
  };

  const handlePortfolioCancel = () => {
    setShowAllPlaygrounds(false);
    setShowAllPlaygrounds(false);
  };

  const handleAddToHomePlayground = (ele: playgroundType) => {
    playgrounds.forEach((pg) => {
      if (
        pg.key === ele.key &&
        homePlaygrounds?.some((pg1) => pg1.key === ele.key) === false &&
        homePlaygrounds.length < 4
      ) {
        setHomePlaygrounds([...homePlaygrounds, pg]);
      } else if (
        pg.key === ele.key &&
        homePlaygrounds?.some((pg1) => pg1.key === ele.key) === true
      ) {
        let newArray = [...homePlaygrounds];
        let arr = newArray?.filter((pg) => pg.key !== ele.key);
        setHomePlaygrounds([...arr]);
      } else if (
        pg.key === ele.key &&
        homePlaygrounds?.some((pg1) => pg1.key === ele.key) === false &&
        homePlaygrounds.length === 4
      ) {
        alert("limit exceeds");
      }
    });

    let arr = playgrounds.map((pg) => {
      if (
        pg.key === ele.key &&
        homePlaygrounds?.some((pg1) => pg1.key === ele.key) === false &&
        homePlaygrounds.length < 4
      ) {
        return { ...pg, homePlayground: true };
      } else if (
        pg.key === ele.key &&
        homePlaygrounds?.some((pg1) => pg1.key === ele.key) === true
      ) {
        return { ...pg, homePlayground: false };
      }
      return pg;
    });
    setPlaygrounds(arr);
  };

  // ---------------------------PROJECTS-------------------------------
  const handleProjectDelete = (ele: number) => {
    let newArray = [...allProjects];
    let arr = newArray?.filter((project) => project.key !== ele);
    setAllProjects([...arr]);
  };

  const handleAddToHomeProject = (ele: projectType) => {
    console.log(ele);
    allProjects.forEach((pro) => {
      if (
        pro.key === ele.key &&
        homeProjects?.some((pro1) => pro1.key === ele.key) === false &&
        homeProjects.length < 4
      ) {
        setHomeProjects([...homeProjects, pro]);
      } else if (
        pro.key === ele.key &&
        homeProjects?.some((pro1) => pro1.key === ele.key) === true
      ) {
        let newArray = [...homeProjects];
        let arr = newArray?.filter((pro1) => pro1.key !== ele.key);
        setHomeProjects([...arr]);
      } else if (
        pro.key === ele.key &&
        homeProjects?.some((pro1) => pro1.key === ele.key) === false &&
        homeProjects.length === 4
      ) {
        alert("limit exceeds");
      }
    });

    let arr = allProjects.map((pro) => {
      if (
        pro.key === ele.key &&
        homeProjects?.some((pro1) => pro1.key === ele.key) === false &&
        homeProjects.length < 4
      ) {
        return { ...pro, homeProject: true };
      } else if (
        pro.key === ele.key &&
        homeProjects?.some((pro1) => pro1.key === ele.key) === true
      ) {
        return { ...pro, homeProject: false };
      }
      return pro;
    });
    setAllProjects(arr);
  };
  return (
    <PortfolioContext.Provider
      value={{
        path,
        setPath,
        editSection,
        setEditSection,
        socialMediaLinks,
        setSocialMediaLinks,
        handleEditSocials,
        handleSocialSubmit,
        handleCancelSubmit,
        playgrounds,
        setPlaygrounds,
        handlePlaygroundDelete,
        homePlaygrounds,
        setHomePlaygrounds,
        handleAddToHomePlayground,
        showAllPlaygrounds,
        setShowAllPlaygrounds,
        handleProjectDelete,
        allProjects,
        setAllProjects,
        handleAddToHomeProject,
        showAllProjects,
        setShowAllProjects,
        handlePortfolioSubmit,
        handlePortfolioCancel,
        homeProjects,
        setHomeProjects,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
