import "./App.css";
import { Board } from "./components/Board";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Memory Card Game</h1>
        <span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1b/F1logo_2018.png"
            alt="formula one logo"
          />
          Edition
        </span>
        <div className="score-board">
          <span>Score: 0</span>
          <span>Best Score: 0</span>
        </div>
      </header>
      <Board />
    </div>
  );
}

export default App;
