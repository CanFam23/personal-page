import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import OtherTech from './components/otherTech/OtherTech';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <About/>
        <OtherTech/>
      </main>
    </div>
  );
}

export default App;
