import "../styles/Battle.scss";
import Item from "./Item";
import GameContext from "../contexts/userChoiceContext";
import { useContext, useEffect } from "react";

const Battle = (
) => {

  const gameCtx = useContext(GameContext);

  useEffect(() => {
    console.log(gameCtx.winState);
  }, [gameCtx.winState]);

  return (
    <>
      <div id="battle">
        <div id="left">
          <p>YOU PICKED</p>
          <Item scaleFactor={window.screen.width <= 430 ? 0.5 : 1.5} type={gameCtx.choiceState}
            winner={gameCtx.winState == "win" ? true : undefined} />
        </div>
        {
          window.screen.width > 430 ?
            <div id="middle">
              {
                gameCtx.winState == "win" ? <p>YOU WIN</p> : (gameCtx.winState == "loss" ? <p>YOU LOSE</p> : (gameCtx.winState == "draw" ? <p>DRAW</p> : null))
              }
              <button onClick={() => {
                gameCtx.gameStatusSetter(true);
                if (gameCtx.winState == "loss") {
                  gameCtx.resetStateSetter(true);
                }
              }} style={{ color: gameCtx.winState != "loss" ? "rgb(23, 32, 65)" : "red" }}>PLAY AGAIN</button>
            </div> : null
        }
        <div id="right">
          <p>THE HOUSE PICKED</p>
          <Item scaleFactor={window.screen.width <= 430 ? 0.5 : 1.5} type={gameCtx.houseChoiceState}
            winner={gameCtx.winState == "loss" ? true : undefined}
          />
        </div>
      </div >
      {
        window.screen.width <= 430 ?
          <div id="middle">
            {
              gameCtx.winState == "win" ? <p>YOU WIN</p> : (gameCtx.winState == "loss" ? <p>YOU LOSE</p> : (gameCtx.winState == "draw" ? <p>DRAW</p> : null))
            }
            <button onClick={() => {
              gameCtx.gameStatusSetter(true);
              if (gameCtx.winState == "loss") {
                gameCtx.resetStateSetter(true);
              }
            }} style={{ color: gameCtx.winState != "loss" ? "rgb(23, 32, 65)" : "red" }}>PLAY AGAIN</button>
          </div> : null
      }
    </>
  );
};

export default Battle;
