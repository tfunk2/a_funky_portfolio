import React, { useState, useEffect } from "react";
import "../stylesheets/BottomNavigation.css";

export default function BottomNavigation({ activeTab, handleClick }) {
  return (
    <div class="bottom-nav-div">
      <section
        onClick={() => handleClick("Nalarama")}
        className="bottom-rectangle-tab"
        id="tab-6"
      >
        <span className="bottom-tab-name">Nalarama</span>
      </section>
      <section
        onClick={() => handleClick("Medium")}
        className="bottom-rectangle-tab"
        id="tab-7"
      >
        <span className="bottom-tab-name">Medium</span>
      </section>
      <section
        onClick={() => handleClick("GitHub")}
        className="bottom-rectangle-tab"
        id="tab-8"
      >
        <span className="bottom-tab-name">GitHub</span>
      </section>
      <section
        onClick={() => handleClick("About Me")}
        className="bottom-rectangle-tab"
        id="tab-9"
      >
        <span className="bottom-tab-name">About Me</span>
      </section>
      <section
        onClick={() => handleClick("In Progress")}
        className="bottom-rectangle-tab"
        id="tab-10"
      >
        <span className="bottom-tab-name">In Progress</span>
      </section>
    </div>
  );
}
