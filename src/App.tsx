import { useEffect, useState } from "react";
import "./App.scss";
import Score from "./components/Score";
import Choose from "./components/Choose";
import Rules from "./components/Rules";
import Battle from "./components/Battle";
import GameContext from "./contexts/userChoiceContext";

function App() {
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState("paper");
  const [isChoosing, setIsChoosing] = useState(true);

  const showRules = () => {
    const rules = document.querySelector("#rules") as HTMLDivElement;
    rules.style.display = "block";
  };

  useEffect(() => {
    setIsChoosing(true);
  }, []);

  return (
    <GameContext.Provider
      value={{
        choiceState: userChoice,
        choiceSetter: setUserChoice,
        gameStatusState: isChoosing,
        gameStatusSetter: setIsChoosing,
      }}
    >
      <div id="app">
        <Score score={score} />
        {isChoosing ? <Choose /> : <Battle type={userChoice} />}
        <button id="rules-button" onClick={showRules}>
          RULES
        </button>
        <Rules />
      </div>
    </GameContext.Provider>
  );
}

export default App;
