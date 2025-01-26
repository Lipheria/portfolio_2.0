import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/home';
import About from './components/about/about';
import Services from './components/services/services';
import About2 from './components/about-2/about2';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Contact from "./components/contact/Contact"

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Home />
        <About2 />
        {/* <About /> */}
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
