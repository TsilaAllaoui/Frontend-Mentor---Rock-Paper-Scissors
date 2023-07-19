import { useState } from "react";
import "./App.scss";
import Score from "./components/Score";
import Choose from "./components/Choose";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div id="app">
      <Score score={score} />
      <Choose />
      <button id="rules-button">RULES</button>
    </div>
  );
}

export default App;
