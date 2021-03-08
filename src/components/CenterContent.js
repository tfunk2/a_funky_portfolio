import React from "react";
import "../stylesheets/CenterContent.css";

const CenterContent = ({ tabSwitch }) => {
  

  return <div className="center-content-div">
    {tabSwitch()}
  </div>;
};

export default CenterContent;
