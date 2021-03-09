import React from "react";
import "../stylesheets/CenterContent.css";

const CenterContent = ({ tabSwitch, activeTab }) => {

  const whichBacksplash = () => {
    switch (activeTab) {
      case "About Me":
        return "about-me";
      case "Resume":
        return "resume";
      case "Medium":
        return "medium";
      case "LinkedIn":
        return "linked-in";
      case "Funky Cafe":
        return "funky-cafe";
      case "Nalarama":
        return "nalarama";
      case "GitHub":
        return "github";
      case "In Progress":
        return "in-progress";
      case "The Real Kate's Kitchen":
        return "the-real-kates-kitchen";
      default:
        return "home";
        break;
    }
  }
  

  return <div className="center-content-div">
    <div className={activeTab !== 'Home' ? "backsplash-shape" + " " + whichBacksplash() : null}></div>
    {tabSwitch()}
  </div>;
};

export default CenterContent;
