import { useEffect, useState } from "react";
import "./App.scss";
import Score from "./components/Score";
import Choose from "./components/Choose";
import Rules from "./components/Rules";
import Battle from "./components/Battle";
import GameContext from "./contexts/userChoiceContext";

function App() {
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState("rock");
  const [houseChoice, setHouseChoice] = useState("rock");
  const [isChoosing, setIsChoosing] = useState(true);
  const [battleResult, setBattleResult] = useState("");
  const [resetScore, setResetScore] = useState(false);

  const showRules = () => {
    const rulesContainer = document.querySelector("#rules-container") as HTMLDivElement;
    const rules = document.querySelector("#rules") as HTMLDivElement;
    rulesContainer.style.zIndex = "5";
    rulesContainer.style.height = "100%";
    rulesContainer.style.backgroundColor = "#00000082";
    rules.style.display = "block";
  };

  const choices = ["paper", "scissor", "rock"];

  useEffect(() => {
    if (userChoice == "paper") {
      if (houseChoice == "paper") {
        setBattleResult("draw");
      } else if (houseChoice == "scissor") {
        setBattleResult("loss");
      } else if (houseChoice == "rock") {
        setBattleResult("win");
      }
    } else if (userChoice == "scissor") {
      if (houseChoice == "paper") {
        setBattleResult("win");
      } else if (houseChoice == "scissor") {
        setBattleResult("draw");
      } else if (houseChoice == "rock") {
        setBattleResult("loss");
      }
    }
    else if (userChoice == "rock") {
      if (houseChoice == "paper") {
        setBattleResult("loss");
      } else if (houseChoice == "scissor") {
        setBattleResult("win");
      } else if (houseChoice == "rock") {
        setBattleResult("draw");
      }
    }
  }, [userChoice])

  useEffect(() => {
    if (resetScore) {
      setScore(0);
      setResetScore(false);
    }
  }, [resetScore])

  useEffect(() => {
    if (!isChoosing) {
      console.log("Choice/HouseChoice : " + userChoice + "/" + houseChoice);

      if (userChoice == houseChoice)
        return;

      if (userChoice == "paper") {
        if (houseChoice == "rock") {
          setScore((score) => score + 1);
        }
      }
      else if (userChoice == "scissor") {
        if (houseChoice == "paper") {
          setScore((score) => score + 1);
        }
      }
      else if (userChoice == "rock") {
        if (houseChoice == "scissor") {
          setScore((score) => score + 1);
        }
      }
    }
  }, [isChoosing])


  return (
    <GameContext.Provider
      value={{
        choiceState: userChoice,
        choiceSetter: setUserChoice,
        houseChoiceState: houseChoice,
        houseChoiceSetter: setHouseChoice,
        gameStatusState: isChoosing,
        gameStatusSetter: setIsChoosing,
        scoreState: score,
        scoreStateSetter: setScore,
        winState: battleResult,
        winStateSetter: setBattleResult,
        resetState: resetScore,
        resetStateSetter: setResetScore
      }}
    >
      <div id="app">
        <Score score={score} />
        {isChoosing ? <Choose /> : <Battle />}
        <button id="rules-button" onClick={showRules}>
          RULES
        </button>
        <div id="rules-container">
          <Rules />
        </div>
      </div>
    </GameContext.Provider>
  );
}

export default App;
