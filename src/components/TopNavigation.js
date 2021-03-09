import React, { useState, useEffect } from "react";
import "../stylesheets/TopNavigation.css";

export default function TopNavigation({ activeTab, handleClick }) {
  return (
    <div class="top-nav-div">
      <section
        onClick={() => handleClick("About Me")}
        className={
          activeTab === "About Me"
            ? "rectangle-tab active-tab"
            : "rectangle-tab"
        }
        id="tab-1"
      >
        <span className="top-tab-name">About Me</span>
      </section>
      <section
        onClick={() => handleClick("Home")}
        className={
          activeTab === "Home" ? "rectangle-tab active-tab" : "rectangle-tab"
        }
        id="tab-2"
      >
        <span className="top-tab-name">Home</span>
      </section>
      <section
        onClick={() => handleClick("Resume")}
        className={
          activeTab === "Resume" ? "rectangle-tab active-tab" : "rectangle-tab"
        }
        id="tab-3"
      >
        <span className="top-tab-name">Resume</span>
      </section>
      <section
        onClick={() => handleClick("Medium")}
        className={
          activeTab === "Medium"
            ? "rectangle-tab active-tab"
            : "rectangle-tab"
        }
        id="tab-4"
      >
        <span className="top-tab-name">Medium</span>
      </section>
      <section
        onClick={() => handleClick("LinkedIn")}
        className={
          activeTab === "LinkedIn"
            ? "rectangle-tab active-tab"
            : "rectangle-tab"
        }
        id="tab-5"
      >
        <span className="top-tab-name">LinkedIn</span>
      </section>
    </div>
  );
}
