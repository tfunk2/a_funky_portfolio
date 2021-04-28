import React from "react";
import resumeThumbnail from "../../images/resume-thumbnail.png";
import "../../stylesheets/tabs/ResumeTab.css";

const ResumeTab = () => {
  return (
    <section className="center-section resume-section">
      <h2 className="center-title resume-title">Resume</h2>
      <div className="center-body" id="resume-center-body">
        {/* <div className="faded-scroll" id="custom-fade-3"></div> */}
        <a
          className="resume-anchor"
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/1dzLhAcSr4gdY-tpFzWkL_FVkB2ba-GfEoypfOeEn14A/edit"
        >
          <img
            className="thumbnail"
            src={resumeThumbnail}
            alt="resume thumbnail"
          ></img>
          <div className="faded-anchor-bottom"></div>
        </a>
      </div>
      {/* <div className="faded-scroll-bottom" id="custom-fade-3-bottom"></div> */}
    </section>
  );
};

export default ResumeTab;
