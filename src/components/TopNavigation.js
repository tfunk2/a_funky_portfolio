import React, { useState, useEffect } from "react";
import "../stylesheets/TopNavigation.css";

export default function TopNavigation() {
  return (
    <div class="top-nav-div">
      <section className="rectangle-tab" id="tab-1">
        <span className="top-tab-name">The Real Kates Kitchen</span>
      </section>
      <section className="rectangle-tab" id="tab-2">
        <span className="top-tab-name">Home</span>
      </section>
      <section className="rectangle-tab" id="tab-3">
        <span className="top-tab-name">Funky Cafe</span>
      </section>
      <section className="rectangle-tab" id="tab-4">
        <span className="top-tab-name">Resume</span>
      </section>
      <section className="rectangle-tab" id="tab-5">
        <span className="top-tab-name">LinkedIn</span>
      </section>
    </div>
  );
}
