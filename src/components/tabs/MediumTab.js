import "../../stylesheets/tabs/MediumTab.css";
import mediumLogo from "../../images/medium-logo.jpeg";
import JSIPELogo from "../../images/JS-in-plain-english-logo-2.png";
import devGeniusLogo from "../../images/dev-genius-logo.png";
import levelUpCodingLogo from "../../images/gitconnected-logo.png";
import theStartupLogo from "../../images/the-startup-logo.jpeg";

const MediumTab = () => {
  return (
    <section className="center-section medium-section">
      <div className="center-body">
        <h2 className="center-title">Medium</h2>
        <div className="faded-scroll" id="custom-fade-4"></div>
        <a
          target="_blank"
          rel="noreferrer"
          className="medium-link"
          href="https://tyler-j-funk.medium.com/"
        >
          <img className="medium-logo" src={mediumLogo} alt="medium logo" />
          <h4 className="medium-name">@tyler-j-funk</h4>
        </a>
        <p className="center-p" id="medium-p">
          On a semi-regular basis I write a technical blog post on Medium about
          whatever I have been learning recently, or things I am interested in.
          Sometimes I write about things that I relearned and didn't want to
          forget again! I was lucky enough to have some publications reach out
          to me, and I submitted some articles to publish with them. Check them
          out below!
        </p>
        <h3>Publications I Write For</h3>
        <div className="publications-div">
          {/* JavaScript in Plain English */}
          <a
            target="_blank"
            rel="noreferrer"
            className="publication-link"
            href="https://javascript.plainenglish.io/"
          >
            <img
              className="JSIPE-logo"
              src={JSIPELogo}
              alt="JavaScript In Plain English logo"
            />
            <h5 className="publication-name">JavaScript In Plain English</h5>
          </a>
          {/* Dev Genius */}
          <a
            target="_blank"
            rel="noreferrer"
            className="publication-link"
            href="https://medium.com/dev-genius"
          >
            <img
              className="dev-genius-logo"
              src={devGeniusLogo}
              alt="Dev Genius logo"
            />
            <h5 className="publication-name">Dev Genius</h5>
          </a>
          {/* Level Up Coding by gitconnected */}
          <a
            target="_blank"
            rel="noreferrer"
            className="publication-link"
            href="https://levelup.gitconnected.com/"
          >
            <img
              className="level-up-coding-logo"
              src={levelUpCodingLogo}
              alt="Level Up Coding by gitconnected logo"
            />
            <h5 className="publication-name">
              Level Up Coding by gitconnected
            </h5>
          </a>
          {/* The Startup */}
          <a
            target="_blank"
            rel="noreferrer"
            className="publication-link"
            href="https://medium.com/swlh"
          >
            <img
              className="the-startup-logo"
              src={theStartupLogo}
              alt="The Startup logo"
            />
            <h5 className="publication-name">The Startup</h5>
          </a>
        </div>
      </div>
      <div className="faded-scroll-bottom" id="custom-fade-4-bottom"></div>
    </section>
  );
};

export default MediumTab;
