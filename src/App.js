import React, { useState, useEffect } from "react";
import "./App.css";
import TopNavigation from "./components/TopNavigation.js";
import BottomNavigation from "./components/BottomNavigation.js";
import CenterContent from "./components/CenterContent.js";
import AboutMeTab from "./components/tabs/AboutMeTab.js";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  const tabSwitch = () => {
    switch (activeTab) {
      case "About Me":
        return <AboutMeTab />;
      case "Home":
        return home;
      case "Resume":
        return resume;
      case "Medium":
        return medium;
      case "LinkedIn":
        return linkedIn;
      case "Funky Cafe":
        return funkyCafe;
      case "Nalarama":
        return nalarama;
      case "GitHub":
        return github;
      case "In Progress":
        return inProgress;
      case "The Real Kate's Kitchen":
        return katesKitchen;
      default:
        return home;
        break;
    }
  };

  // Turn each of these into their own components, then import and return above
  const katesKitchen = (
    <section className="center-section">
      <h2 className="center-title">The Real Kate's Kitchen</h2>
      <div className="center-body">
        <div className="faded-scroll"></div>
        <p>A blurb paragraph about Kate's Kitchen here</p>
        <p>
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
      <div className="faded-scroll-bottom"></div>
    </section>
  );

  const home = (
    <>
      <h1 className="first-name">Tyler</h1>
      <h1 className="last-name">Funk</h1>
    </>
  );

  const funkyCafe = (
    <section className="center-section">
      <h2 className="center-title">Funky Cafe</h2>
      <div className="center-body">
        <div className="faded-scroll"></div>
        <p>A blurb paragraph about Funky Cafe here</p>
        <p>
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
      <div className="faded-scroll-bottom"></div>
    </section>
  );

  const resume = (
    <section className="center-section">
      <h2 className="center-title">Resume</h2>
      <div className="center-body">
        <div className="faded-scroll"></div>
        <p>A blurb paragraph about my resume here</p>
        <p>
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
      <div className="faded-scroll-bottom"></div>
    </section>
  );

  const linkedIn = (
    <section className="center-section">
      <h2 className="center-title">LinkedIn</h2>
      <div className="center-body">
        <div className="faded-scroll"></div>
        <p>A blurb paragraph about Funky Cafe here</p>
        <p>
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
      <div className="faded-scroll-bottom"></div>
    </section>
  );

  const nalarama = (
    <section className="center-section">
      <h2 className="center-title">Nalarama</h2>
      <div className="center-body">
        <div className="faded-scroll"></div>
        <p>A blurb paragraph about Nalarama here</p>
        <p>
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
      <div className="faded-scroll-bottom"></div>
    </section>
  );

  const medium = (
    <section className="center-section">
      <h2 className="center-title">My Medium</h2>
      <div className="center-body">
        <div className="faded-scroll"></div>
        <p>A blurb paragraph about my Medium blog here</p>
        <p>
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
      <div className="faded-scroll-bottom"></div>
    </section>
  );

  const github = (
    <section className="center-section">
      <h2 className="center-title">GitHub</h2>
      <div className="center-body">
        <div className="faded-scroll"></div>
        <p>A blurb paragraph about my GitHub here</p>
        <p>
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
      <div className="faded-scroll-bottom"></div>
    </section>
  );

  const inProgress = (
    <section className="center-section">
      <h2 className="center-title">In Progress</h2>
      <div className="center-body">
        <div className="faded-scroll"></div>
        <p>A look at my projects in progress here</p>
        <p>
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
      <div className="faded-scroll-bottom"></div>
    </section>
  );

  const handleClick = (tabClicked) => {
    setActiveTab(tabClicked);
  };

  return (
    <div className="App">
      <TopNavigation activeTab={activeTab} handleClick={handleClick} />
      <CenterContent tabSwitch={tabSwitch} activeTab={activeTab}/>
      <BottomNavigation activeTab={activeTab} handleClick={handleClick} />
    </div>
  );
}

export default App;
