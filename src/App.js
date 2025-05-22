import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import OtherTech from './components/otherTech/OtherTech';
import Project from './components/project/Project';
import Experience from './components/experience/Experience';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <About/>
        <OtherTech/>
        <Project/>
        <Experience/>
      </main>
    </div>
  );
}

export default App;
