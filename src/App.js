import { Navbar } from "./components/Navbar/Navbar";
import './App.css';
import { Intro } from "./components/intro/Intro";
import { Services } from "./components/Services/Services";
import { Experience } from "./components/Experience/Experience";
import { Works } from "./components/Works/Works";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Testmonials } from "./components/Testmonials/Testmonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testmonials />
    </div>
  );
}

export default App;
