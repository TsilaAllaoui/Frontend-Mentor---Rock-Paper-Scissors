import "../styles/Score.scss";
import logo from "../assets/images/logo.svg";

const Score = ({ score }: { score: number }) => {
  return (
    <div id="score">
      <img src={logo} alt="logo" />
      <div id="score-info">
        <p>SCORE</p>
        <p>{score}</p>
      </div>
    </div>
  );
};

export default Score;
