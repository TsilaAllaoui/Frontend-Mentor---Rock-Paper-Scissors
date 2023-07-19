import { useState } from "react";
import "./App.scss";
import Score from "./components/Score";
import Choose from "./components/Choose";
import Rules from "./components/Rules";

function App() {
  const [score, setScore] = useState(0);

  const showRules = () => {
    const rules = document.querySelector("#rules") as HTMLDivElement;
    rules.style.display = "block";
  };

  return (
    <div id="app">
      <Score score={score} />
      <Choose />
      <button id="rules-button" onClick={showRules}>
        RULES
      </button>
      <Rules />
    </div>
  );
}

export default App;
