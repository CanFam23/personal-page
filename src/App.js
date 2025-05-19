import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <About/>
      </main>
    </div>
  );
}

export default App;
