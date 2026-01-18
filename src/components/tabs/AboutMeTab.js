import "../../stylesheets/tabs/AboutMeTab.css";
import portfolioPicture from "../../images/portfolio-picture.png";

const AboutMeTab = () => {
  return (
    <section className="center-section about-me-section">
      <div className="center-body">
        <h2 className="center-title">About Me</h2>
        <div className="faded-scroll" id="custom-fade-1"></div>
        <img
          className="portfolio-picture"
          alt="Tyler Funk"
          src={portfolioPicture}
        />
        <p className="center-p">
          I made the switch to software engineering when my wife heard an ad on
          the radio. She inspired me to start a career I would love, and since
          then I have been on a mission to further my adventures in tech.
          <br />
          <br />I am a Flatiron School alumni that loves Rails and React, and
          brings both technical and soft skills to the table, with an emphasis
          on communication, creativity and collaboration. I completed the second
          half of my education remotely, so I have plenty of practice with
          working from home, and utilizing a plethora of video chat apps.
          <br />
          <br />A few interesting things:
          <ul>
            <li>
              I have night kayaked in 2 different bodies of water which had
              active bioluminescence (once in Ireland, once in Puerto Rico)
            </li>
            <br />
            <li>
              I started playing violin in 5th grade, played through high school,
              and even played 2 years in the Northland Symphony in college
            </li>
            <br />
            <li>
              I used to be a table games dealer for a casino in Kansas City and
              learned how to deal every major game offered by casinos, including
              some lesser "carnival" style games
            </li>
          </ul>
          Things I love to do in my free time:
          <ul>
            <li>Golf as much as I can</li>
            <br></br>
            <li>
              Camp in unique places with my wife (like the Great Sand Dunes
              National Park)
            </li>
            <br />
            <li>Play video games with my friends</li>
          </ul>
        </p>
      </div>
      <div className="faded-scroll-bottom" id="custom-fade-1-bottom"></div>
    </section>
  );
};

export default AboutMeTab;
