import logo from './logo.svg';
import './App.css';

// Components
import Greet from './components/Greet'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Greet name = "Aaron Barcenas"/>
      <Greet name = "Gilberto Gonzalez"/>
      <Greet name = "Carlos Gonzalez"/>
      <Counter />
    </div>
  );
}

export default App;
