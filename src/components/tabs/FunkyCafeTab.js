import React from "react";
import "../../stylesheets/tabs/FunkyCafeTab.css";
import funkyCafeThumbnail from '../../images/funky-cafe-thumbnail.png';

const FunkyCafeTab = () => {
  return (
    <section className="center-section funky-cafe-section">
      <div className="center-body">
        <h2 className="center-title">Funky Cafe</h2>
        <div className="faded-scroll" id="custom-fade-7"></div>
        <a
          href="https://funky-cafe.web.app/"
          rel="noreferrer"
          target="_blank"
          className="thumbnail-a"
        >
          <img src={funkyCafeThumbnail} className="thumbnail"></img>
        </a>
        <p className="center-p">
          This is a project I built for my wife and I to select our meals and
          sides for the week, then get a printable compiled ingredients list! 
        </p>
      </div>
      <div className="faded-scroll-bottom" id="custom-fade-7-bottom"></div>
    </section>
  );
};

export default FunkyCafeTab;
