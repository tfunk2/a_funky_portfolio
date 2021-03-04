import './App.css';
import TopNavigation from './components/TopNavigation.js'
import BottomNavigation from './components/BottomNavigation.js'
import CenterContent from './components/CenterContent.js'

function App() {
  return (
    <div className="App">
      <TopNavigation />
      <CenterContent />
      <BottomNavigation />
    </div>
  );
}

export default App;
