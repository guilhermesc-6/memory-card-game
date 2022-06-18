import logo from "../assets/f1_logo.svg";
export const Header = ({ score, bestScore }) => {
  return (
    <header>
      <h1>Memory Card Game</h1>
      <span className="logo">
        <img src={logo} alt="formula one logo" />
        Edition
      </span>
      <div className="score-board">
        <span>Score: {score}</span>
        <span>Best Score: {bestScore}</span>
        <span>Max Score: 12</span>
      </div>
    </header>
  );
};
