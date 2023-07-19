import { useState } from "react";
import "../styles/Battle.scss";
import Item from "./Item";

const Battle = ({ type }: { type: string }) => {
  const choices = ["paper", "scissor", "rock"];
  const houseChoice = choices[Math.floor(Math.random() * choices.length)];

  return (
    <div id="battle">
      <div id="left">
        <p>YOU PICKED</p>
        <Item scaleFactor={1.5} type={type} />
      </div>
      <div id="right">
        <p>THE HOUSE PICKED</p>
        <Item scaleFactor={1.5} type={houseChoice} />
      </div>
    </div>
  );
};

export default Battle;
