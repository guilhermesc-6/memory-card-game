import { useState } from "react";
import "./App.css";
import { CardGrid } from "./components/CardGrid";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div>
      <Header score={score} bestScore={bestScore} />
      <CardGrid
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
      <Footer />
    </div>
  );
}

export default App;
