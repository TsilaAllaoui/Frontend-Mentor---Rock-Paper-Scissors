import "../styles/Choose.scss";
import paper from "../assets/images/icon-paper.svg";
import scissor from "../assets/images/icon-scissors.svg";
import rock from "../assets/images/icon-rock.svg";
import Item from "./Item";

const Choose = () => {
  return (
    <div id="choose">
      <div id="upper">
        <Item image={paper} type="paper" />
        <div id="horizontal-line"></div>
        <Item image={scissor} type="scissor" />
      </div>
      <div id="lower">
        <div id="oblic-line-1"></div>
        <Item image={rock} type="rock" />
        <div id="oblic-line-2"></div>
      </div>
    </div>
  );
};

export default Choose;
