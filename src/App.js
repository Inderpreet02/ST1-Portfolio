import './App.css'

import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import FixedLeft from "./Components/FixedLeft";
import FixedRight from "./Components/FixedRight";
import AboutMe from "./Components/AboutMe";
import Work from "./Components/Work";
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <AboutMe/>
      <Work/>
      <Projects/>
      <Contact/>
      <FixedLeft/>
      <FixedRight/>
    </div>
  );
}

export default App;
