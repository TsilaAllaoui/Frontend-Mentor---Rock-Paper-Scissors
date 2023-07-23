import Item from "./Item";
import "../styles/Choose.scss";
import GameContext from "../contexts/userChoiceContext";
import { useContext } from "react";


const Choose = () => {

  const choices = ["paper", "scissor", "rock"];
  const gameCtx = useContext(GameContext);

  return (
    <div id="choose">
      <div id="upper">
        <div onClick={() => {
          gameCtx.choiceSetter("paper");
          gameCtx.houseChoiceSetter(choices[Math.floor(Math.random() * choices.length)]);
          gameCtx.gameStatusSetter(false);
        }}>
          <Item type="paper" />
        </div>
        <div id="horizontal-line"></div>
        <div onClick={() => {
          gameCtx.choiceSetter("scissor");
          gameCtx.houseChoiceSetter(choices[Math.floor(Math.random() * choices.length)]);
          gameCtx.gameStatusSetter(false);
        }}>
          <Item type="scissor" />
        </div>
      </div>
      <div id="lower">
        <div id="oblic-line-1"></div>
        <div onClick={() => {
          gameCtx.choiceSetter("rock");
          gameCtx.houseChoiceSetter(choices[Math.floor(Math.random() * choices.length)]);
          gameCtx.gameStatusSetter(false);
        }}
          id="rock"
        >
          <Item type="rock" />
        </div>
        <div id="oblic-line-2"></div>
      </div>
    </div >
  );
};

export default Choose;
