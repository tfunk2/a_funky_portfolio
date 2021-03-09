import React from "react";
import "../../stylesheets/tabs/AboutMeTab.css";

const AboutMeTab = () => {
  return (
    <section className="center-section">
      <h2 className="center-title">About Me</h2>
      <div className="center-body">
        <div className="faded-scroll"></div>
        <p className="center-p">
          I made the switch to software engineering when my wife heard an ad on
          the radio. She inspired me to start a career I would love, and since
          then I have been on a mission to further my adventures in tech.
          <br></br>
          <br></br>I am a Flatiron School alumni that loves Rails and React, and
          brings both technical and soft skills to the table, with an emphasis
          on communication, creativity and collaboration. I completed the second
          half of my education remotely, so I have plenty of practice with
          working from home, and utilizing a plethora of video chat apps.
          <br></br>
          <br></br>Things I do in my free time: I love playing as much golf
          as I can, camping in unique places with my wife (like the Great Sand
          Dunes National Park), and I have night kayaked in 2 different bodies
          of water which had active bioluminescence (once in Ireland, once in
          Puerto Rico).
        </p>
      </div>
      <div className="faded-scroll-bottom"></div>
    </section>
  );
};

export default AboutMeTab;
