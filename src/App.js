import React, { useState, useEffect } from "react";
import "./App.css";
import TopNavigation from "./components/TopNavigation.js";
import BottomNavigation from "./components/BottomNavigation.js";
import CenterContent from "./components/CenterContent.js";
import AboutMeTab from "./components/tabs/AboutMeTab.js";
import KatesKitchenTab from "./components/tabs/KatesKitchenTab.js";
import FunkyCafeTab from "./components/tabs/FunkyCafeTab.js";
import ResumeTab from "./components/tabs/ResumeTab.js";
import MediumTab from "./components/tabs/MediumTab.js";
import LinkedInTab from "./components/tabs/LinkedInTab.js";
import NalaramaTab from "./components/tabs/NalaramaTab.js";
import GitHubTab from "./components/tabs/GitHubTab.js";
import InProgressTab from "./components/tabs/InProgressTab.js";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  const tabSwitch = () => {
    switch (activeTab) {
      case "About Me":
        return <AboutMeTab />;
      case "Home":
        return home;
      case "Resume":
        return <ResumeTab />;
      case "Medium":
        return <MediumTab />;
      case "LinkedIn":
        return <LinkedInTab />;
      case "Funky Cafe":
        return <FunkyCafeTab />;
      case "Nalarama":
        return <NalaramaTab />;
      case "GitHub":
        return <GitHubTab />;
      case "In Progress":
        return <InProgressTab />;
      case "The Real Kate's Kitchen":
        return <KatesKitchenTab />;
      default:
        return home;
        break;
    }
  };

  // Turn each of these into their own components, then import and return above

  const home = (
    <>
      <h1 className="first-name">Tyler</h1>
      <h1 className="last-name">Funk</h1>
    </>
  );

  const handleClick = (tabClicked) => {
    setActiveTab(tabClicked);
  };

  return (
    <div className="App">
      <TopNavigation activeTab={activeTab} handleClick={handleClick} />
      <CenterContent tabSwitch={tabSwitch} activeTab={activeTab}/>
      <BottomNavigation activeTab={activeTab} handleClick={handleClick} />
    </div>
  );
}

export default App;
