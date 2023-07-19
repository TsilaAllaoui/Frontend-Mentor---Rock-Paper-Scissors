import { useContext } from "react";
import Item from "./Item";
import "../styles/Choose.scss";

const Choose = ({}: //   setUserChoice,
{
  //   setUserChoice: (choice: string) => void;
}) => {
  return (
    <div id="choose">
      <div id="upper">
        <Item type="paper" />
        <div id="horizontal-line"></div>
        <Item type="scissor" />
      </div>
      <div id="lower">
        <div id="oblic-line-1"></div>
        <Item type="rock" />
        <div id="oblic-line-2"></div>
      </div>
    </div>
  );
};

export default Choose;
