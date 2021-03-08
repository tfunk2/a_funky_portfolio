import React, { useState, useEffect } from "react";
import "../stylesheets/TopNavigation.css";

export default function TopNavigation({ activeTab, handleClick }) {
  return (
    <div class="top-nav-div">
      <section
        onClick={() => handleClick("The Real Kate's Kitchen")}
        className={activeTab === "The Real Kate's Kitchen" ? "rectangle-tab active-tab" : "rectangle-tab"}
        id="tab-1"
      >
        <span className="top-tab-name">The Real Kate's Kitchen</span>
      </section>
      <section
        onClick={() => handleClick("Home")}
        className={activeTab === "Home" ? "rectangle-tab active-tab" : "rectangle-tab"}
        id="tab-2"
      >
        <span className="top-tab-name">Home</span>
      </section>
      <section
        onClick={() => handleClick("Funky Cafe")}
        className={activeTab === "Funky Cafe" ? "rectangle-tab active-tab" : "rectangle-tab"}
        id="tab-3"
      >
        <span className="top-tab-name">Funky Cafe</span>
      </section>
      <section
        onClick={() => handleClick("Resume")}
        className={activeTab === "Resume" ? "rectangle-tab active-tab" : "rectangle-tab"}
        id="tab-4"
      >
        <span className="top-tab-name">Resume</span>
      </section>
      <section
        onClick={() => handleClick("LinkedIn")}
        className={activeTab === "LinkedIn" ? "rectangle-tab active-tab" : "rectangle-tab"}
        id="tab-5"
      >
        <span className="top-tab-name">LinkedIn</span>
      </section>
    </div>
  );
}
