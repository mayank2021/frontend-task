import { useContext } from "react";
import Navbar from "../components/sections/Navbar";
import Sidebar from "../components/sections/Edit/sidebar";
import Profile from "../components/sections/Edit/Profile";
import Socials from "../components/sections/Edit/Socials";
import Portfolio from "../components/sections/Edit/Portfolio";
import Resume from "../components/sections/Edit/Resume";
import { PortfolioContext } from "../components/Context/PortfolioContext";

const Edit = () => {
  const context = useContext(PortfolioContext);
  const chooseSection = () => {
    if (context?.editSection === "profile") return <Profile />;
    else if (context?.editSection === "socials") return <Socials />;
    else if (context?.editSection === "portfolio") return <Portfolio />;
    else return <Resume />;
  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        {chooseSection()}
      </div>
    </div>
  );
};

export default Edit;
