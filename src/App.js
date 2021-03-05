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
      default:
        break;
    }
  };

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

  return (
    <div className="App">
      <TopNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <CenterContent tabSwitch={tabSwitch}/>
      <BottomNavigation />
    </div>
  );
}

export default App;
