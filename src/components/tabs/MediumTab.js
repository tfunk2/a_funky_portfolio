import React from "react";
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
        <a className="medium-link" href="https://tyler-j-funk.medium.com/">
          <img className="medium-logo" src={mediumLogo} alt="medium logo"></img>
          <h4 className="medium-name">@tyler-j-funk</h4>
        </a>
        <h3>Publications I Write For</h3>
        <div className="publications-div">
          {/* JavaScript in Plain English */}
          <a
            className="publication-link"
            href="https://javascript.plainenglish.io/"
          >
            <img
              className="JSIPE-logo"
              src={JSIPELogo}
              alt="JavaScript In Plain English logo"
            ></img>
            <h5 className="publication-name">JavaScript In Plain English</h5>
          </a>
          {/* Dev Genius */}
          <a className="publication-link" href="https://medium.com/dev-genius">
            <img
              className="dev-genius-logo"
              src={devGeniusLogo}
              alt="Dev Genius logo"
            ></img>
            <h5 className="publication-name">Dev Genius</h5>
          </a>
          {/* Level Up Coding by gitconnected */}
          <a
            className="publication-link"
            href="https://levelup.gitconnected.com/"
          >
            <img
              className="level-up-coding-logo"
              src={levelUpCodingLogo}
              alt="Level Up Coding by gitconnected logo"
            ></img>
            <h5 className="publication-name">
              Level Up Coding by gitconnected
            </h5>
          </a>
          {/* The Startup */}
          <a className="publication-link" href="https://medium.com/swlh">
            <img
              className="the-startup-logo"
              src={theStartupLogo}
              alt="The Startup logo"
            ></img>
            <h5 className="publication-name">The Startup</h5>
          </a>
        </div>
        <p className="center-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor
          rutrum, vulputate sapien vel, condimentum est. Vestibulum cursus diam
          varius ipsum pretium ullamcorper. Mauris diam lectus, posuere nec
          risus a, tempor maximus augue. Donec accumsan massa ac ex venenatis,
          et congue enim consequat. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Duis aliquam felis nec
          dictum ultrices. Quisque pretium mi id mi faucibus varius. Aenean non
          erat nec lacus facilisis tincidunt. Duis velit sapien, ultricies in
          cursus et, lacinia sed est. Suspendisse potenti. Aenean finibus,
          lectus nec accumsan iaculis, diam augue blandit libero, ac sodales
          purus augue eu lectus. Aenean blandit dui at ligula porttitor, vitae
          pulvinar diam vehicula. Nulla pharetra libero quis turpis dignissim,
          sit amet tempor dui mattis. Ut vel fringilla lectus, a fringilla
          augue. Curabitur facilisis tincidunt erat, at fermentum arcu
          sollicitudin vitae. Nulla et congue purus, ac rutrum mi. In vel ex vel
          augue lobortis scelerisque eu ac ex. Maecenas faucibus, nisi sit amet
          mollis posuere, nibh quam scelerisque libero, in vestibulum quam ante
          non nisl. Fusce tincidunt a justo eu iaculis. Aenean eu magna vitae
          dolor pulvinar blandit ut quis magna. Donec pretium lacus metus, vitae
          ullamcorper est ultricies vitae. Cras a lacinia turpis, ac rhoncus
          arcu. Curabitur a nunc commodo lorem dictum consequat. Nunc tincidunt
          magna nisl, et sagittis purus sagittis at. Mauris fringilla sit amet
          tortor vel tristique. Cras condimentum congue lectus quis dictum.
          Aenean elit magna, rhoncus nec mattis nec, convallis a elit.
          Suspendisse gravida a arcu vitae congue. Phasellus non vulputate
          velit. In quam dolor, rutrum nec ligula sit amet, laoreet condimentum
          diam. Maecenas quis est ut diam varius elementum id non sapien.
          Praesent congue, metus quis vehicula accumsan, velit nisl malesuada
          magna, congue efficitur turpis augue vitae libero. Sed ut interdum
          sapien. Vestibulum eget imperdiet enim. Duis venenatis consequat augue
          ac condimentum. Phasellus rutrum est nibh. Aliquam tincidunt massa
          orci, ut mattis sapien fermentum vitae. Donec imperdiet lectus est,
          vitae dapibus felis semper vitae. Fusce auctor odio neque, eget
          lobortis lectus semper non. Pellentesque posuere augue rhoncus, congue
          nibh in, sollicitudin odio. Donec quis nisl id orci dictum
          condimentum. Cras tincidunt tempor urna, in rhoncus nibh consectetur
          a. Integer quis pharetra risus. Vestibulum sit amet ante nec metus
          sollicitudin malesuada. Vivamus purus sapien, aliquet eget mollis at,
          finibus et velit. Donec turpis eros, pretium aliquam nisi a, tristique
          aliquam risus. Phasellus ac nulla in quam venenatis blandit. Mauris
          sollicitudin eleifend magna dapibus eleifend. Ut maximus, ligula eu
          varius tincidunt, nibh nulla consequat dui, a sagittis eros risus nec
          sem. Suspendisse sed elit aliquam, lobortis risus sagittis, euismod
          erat. Ut suscipit nisi a justo tristique, sed sodales lorem efficitur.
        </p>
      </div>
      <div className="faded-scroll-bottom" id="custom-fade-4-bottom"></div>
    </section>
  );
};

export default MediumTab;
