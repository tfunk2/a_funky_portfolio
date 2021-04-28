import React from "react";
import "../../stylesheets/tabs/LinkedInTab.css";
import linkedInThumbnail from "../../images/linked-in-thumbnail.png";

const LinkedInTab = () => {
  return (
    <section className="center-section linked-in-section">
      <div className="center-body">
        <h2 className="center-title">LinkedIn</h2>
        <div className="faded-scroll" id="custom-fade-5"></div>
        <a
          href="https://www.linkedin.com/in/tylerfunk/"
          rel="noreferrer"
          target="_blank"
          className="thumbnail-a"
        >
          <img src={linkedInThumbnail} className="thumbnail"></img>
        </a>
        <p className="center-p">
          Check out my LinkedIn profile, feel free to reach out and connect!
        </p>
      </div>
      <div className="faded-scroll-bottom" id="custom-fade-5-bottom"></div>
    </section>
  );
};

export default LinkedInTab;
