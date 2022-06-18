import { useState } from "react";
import "./App.css";
import { CardGrid } from "./components/CardGrid";
import { Header } from "./components/Header";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <CardGrid
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </div>
  );
}

export default App;
