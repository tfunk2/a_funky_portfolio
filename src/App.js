import './App.css';
import TopNavigation from './components/TopNavigation.js'
import BottomNavigation from './components/BottomNavigation.js'
import CenterContent from './components/CenterContent.js'
import React, { useState, useEffect } from "react"

function App() {
  const [activeTab, setActiveTab] = useState("Home")

  const tabSwitch = () => {
    switch (activeTab) {
      case "The Real Kate's Kitchen":
        return katesKitchen;
      case "Home":
        return home;
      case "Funky Cafe":
        return funkyCafe;
      case "Resume":
        return resume;
      case "LinkedIn":
        return linkedIn;
      case "Nalarama":
        return nalarama;
      case "Crossword":
        return crossword;
      case "GitHub":
        return github;
      case "About Me":
        return aboutMe;
      case "In Progress":
        return inProgress;
      default:
        return home;
        break;
    }
  };


  // Turn each of these into their own components, then import and return above
  const katesKitchen = (
    <section>
      <h2>The Real Kate's Kitchen</h2>
      <p>A blurb paragraph about Kate's Kitchen here</p>
    </section>
  );

  const home = (
    <>
      <h1 className="first-name">Tyler</h1>
      <h1 className="last-name">Funk</h1>
    </>
  );

  const funkyCafe = (
    <section>
      <h2>Funky Cafe</h2>
      <p>A blurb paragraph about Funky Cafe here</p>
    </section>
  );

  const resume = (
    <section>
      <h2>Resume</h2>
      <p>A blurb paragraph about my resume here</p>
    </section>
  );

  const linkedIn = (
    <section>
      <h2>LinkedIn</h2>
      <p>A blurb paragraph about Funky Cafe here</p>
    </section>
  );

  const nalarama = (
    <section>
      <h2>Nalarama</h2>
      <p>A blurb paragraph about Nalarama here</p>
    </section>
  );

  const crossword = (
    <section>
      <h2>A Funky Crossword</h2>
      <p>A blurb paragraph about the Funky Crossword here</p>
    </section>
  );

  const github = (
    <section>
      <h2>GitHub</h2>
      <p>A blurb paragraph about my GitHub here</p>
    </section>
  );

  const aboutMe = (
    <section>
      <h2>About Me</h2>
      <p>A blurb paragraph about me here</p>
    </section>
  );

  const inProgress = (
    <section>
      <h2>In Progress</h2>
      <p>A look at my projects in progress here</p>
    </section>
  );



  const handleClick = (tabClicked) => {
    setActiveTab(tabClicked)
  }

  return (
    <div className="App">
      <TopNavigation activeTab={activeTab} handleClick={handleClick} />
      <CenterContent tabSwitch={tabSwitch} />
      <BottomNavigation activeTab={activeTab} handleClick={handleClick} />
    </div>
  );
}

export default App;
