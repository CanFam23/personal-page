import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import OtherTech from './components/otherTech/OtherTech';
import Project from './components/project/Project';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <About/>
        <OtherTech/>
        <Project/>
        <Experience/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
