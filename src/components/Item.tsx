import "../styles/Item.scss";
import paper from "../assets/images/icon-paper.svg";
import scissor from "../assets/images/icon-scissors.svg";
import rock from "../assets/images/icon-rock.svg";
import GameContext from "../contexts/userChoiceContext";
import { useContext } from "react";

const Item = ({
  type,
  scaleFactor,
}: {
  type: string;
  scaleFactor?: number;
}) => {
  const r1 = "rgb(255,54,84)";
  const r2 = "rgb(156,22,49)";

  const y1 = "rgb(239,158,17)";
  const y2 = "rgb(201,110,29)";

  const b1 = "rgb(70,101,244)";
  const b2 = "rgb(39,67,192)";

  const GameCtx = useContext(GameContext);

  return (
    <div
      className="item"
      style={{
        transform: `scale(${
          scaleFactor === undefined ? "1" : scaleFactor.toString()
        })`,
      }}
      onClick={() => {
        console.log(GameCtx.gameStatusState);
        GameCtx.choiceSetter(type);
        GameCtx.gameStatusSetter(!GameCtx.gameStatusState);
      }}
    >
      <div
        className="circle-1"
        style={{
          backgroundColor: type == "paper" ? b2 : type == "scissor" ? y2 : r2,
        }}
      ></div>
      <div
        className="circle-2"
        style={{
          backgroundColor: type == "paper" ? b1 : type == "scissor" ? y1 : r1,
        }}
      >
        <div
          className="circle-3"
          style={{ backgroundColor: "rgb(189,191,212)" }}
        ></div>
        <div className="circle-4" style={{ backgroundColor: "white" }}></div>
      </div>
      <img
        src={type == "paper" ? paper : type == "scissor" ? scissor : rock}
        alt={type + "-image"}
      />
    </div>
  );
};

export default Item;
