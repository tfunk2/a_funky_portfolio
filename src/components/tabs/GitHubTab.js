import React from "react";
import "../../stylesheets/tabs/GitHubTab.css";
import githubIcon from "../../images/github-logo.png";

const GitHubTab = () => {
  return (
    <section className="center-section github-section">
      <div className="center-body">
        <h2 className="center-title">GitHub</h2>
        <div className="faded-scroll" id="custom-fade-8"></div>
        <a
          href="https://github.com/tfunk2"
          rel="noreferrer"
          target="_blank"
          className="thumbnail-a"
          id="github-thumbnail-a"
        >
          <img src={githubIcon} className="github-icon"></img>
        </a>
        <p className="center-p">
          Here's a link to my GitHub profile, check out my pinned repositories,
          heat map, and more!
        </p>
      </div>
      <div className="faded-scroll-bottom" id="custom-fade-8-bottom"></div>
    </section>
  );
};

export default GitHubTab;
