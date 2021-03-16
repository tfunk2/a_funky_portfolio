import React from "react";
import resumeThumbnail from '../../images/resume-thumbnail.png';
import "../../stylesheets/tabs/ResumeTab.css";

const ResumeTab = () => {
  return (
    <section className="center-section resume-section">
      <h2 className="center-title">My Resume</h2>
      <div className="center-body">
        <div className="faded-scroll" id="custom-fade-3"></div>
        <a className="resume-anchor" target="_blank" href="https://docs.google.com/document/d/1dzLhAcSr4gdY-tpFzWkL_FVkB2ba-GfEoypfOeEn14A/edit">
          <img className="resume-thumbnail" src={resumeThumbnail} alt="resume thumbnail"></img>
          <div className="faded-anchor-bottom"></div>
        </a>
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
      <div className="faded-scroll-bottom" id="custom-fade-3-bottom"></div>
    </section>
  );
};

export default ResumeTab;
