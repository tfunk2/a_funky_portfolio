import React, {useState, useEffect} from "react";
import '../stylesheets/TopNavigation.css'

export default function TopNavigation() {
    const [isSVGClicked, setIsSVGClicked] = useState(false)

  return (
    <div class="top-nav-div">
      <section className="rectangle-tab" id="tab-1"></section>
      <section className="rectangle-tab" id="tab-2"></section>
      <section className="rectangle-tab" id="tab-3"></section>
      <section className="rectangle-tab" id="tab-4"></section>
      <section className="rectangle-tab" id="tab-5"></section>
    </div>
  );
}
