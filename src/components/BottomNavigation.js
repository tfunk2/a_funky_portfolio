import React, { useState, useEffect } from "react";
import "../stylesheets/BottomNavigation.css";

export default function BottomNavigation({ activeTab, handleClick }) {
  return (
    <div class="bottom-nav-div">
      <section
        onClick={() => handleClick("Nalarama")}
        className={
          activeTab === "Nalarama"
            ? "bottom-rectangle-tab active-tab-bottom"
            : "bottom-rectangle-tab"
        }
        id="tab-6"
      >
        <span className="bottom-tab-name">Nalarama</span>
      </section>
      <section
        onClick={() => handleClick("Funky Cafe")}
        className={
          activeTab === "Funky Cafe"
            ? "bottom-rectangle-tab active-tab-bottom"
            : "bottom-rectangle-tab"
        }
        id="tab-7"
      >
        <span className="bottom-tab-name">Funky Cafe</span>
      </section>
      <section
        onClick={() => handleClick("GitHub")}
        className={
          activeTab === "GitHub"
            ? "bottom-rectangle-tab active-tab-bottom"
            : "bottom-rectangle-tab"
        }
        id="tab-8"
      >
        <span className="bottom-tab-name">GitHub</span>
      </section>
      <section
        onClick={() => handleClick("The Real Kate's Kitchen")}
        className={
          activeTab === "The Real Kate's Kitchen"
            ? "bottom-rectangle-tab active-tab-bottom"
            : "bottom-rectangle-tab"
        }
        id="tab-9"
      >
        <span className="bottom-tab-name">The Real Kate's Kitchen</span>
      </section>
      <section
        onClick={() => handleClick("In Progress")}
        className={
          activeTab === "In Progress"
            ? "bottom-rectangle-tab active-tab-bottom"
            : "bottom-rectangle-tab"
        }
        id="tab-10"
      >
        <span className="bottom-tab-name">In Progress</span>
      </section>
    </div>
  );
}
